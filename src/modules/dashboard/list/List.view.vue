<script>
import listVM from "./list.vm";
import Pagination from "@/components/kits/Pagination.vue";
export default {
  name: "ListView",
  setup: listVM,
  components: { Pagination },
};
</script>

<template>
  <div>
    <h1>All Posts</h1>
    <div v-if="articlesLoading || deleteLoading">
      <span class="spinner-border spinner-border-sm mr-1"></span>
      <span>loading ...</span>
    </div>

    <table class="table" v-else>
      <thead class="thead-light">
        <tr>
          <th v-for="(col, colIndex) in columns" :key="colIndex" scope="col">
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, rowIndex) in data?.articles"
          :key="`table-${rowIndex}`"
        >
          <td>{{ row.title }}</td>
          <td>@{{ row.author.username }}</td>
          <td>{{ row.tagList.join(", ") || "-" }}</td>
          <td>{{ row.description.split(" ").slice(0, 20).join(" ") }}...</td>
          <td>
            <div class="d-flex align-items-center">
              <div>
                {{ dayjs(row.createdAt).format("MMM DD,YYYY") }}
              </div>
              <div class="dropdown">
                <button
                  id="dropdownMenuButton"
                  class="btn btn-info dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ...
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <router-link
                    :to="`/articles/edit/${row.slug}`"
                    class="dropdown-item"
                    >Edit</router-link
                  >
                  <div class="dropdown-divider"></div>
                  <div
                    class="dropdown-item"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </td>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Delete Article
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body pb-4">
                  Are you sure to delete Article?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    data-dismiss="modal"
                  >
                    no
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    @click="deleteArticlesSlugRequest(row.slug)"
                  >
                    yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <Pagination :total-items="articlesCount" />
  </div>
</template>
