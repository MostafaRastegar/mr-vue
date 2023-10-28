<template>
  <div id="pagination" class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <ul class="pagination">
          <li class="page-item" v-if="currentPage > 1">
            <a
              class="page-link"
              href="#"
              @click="setCurrentPage(currentPage - 1)"
              >Previous</a
            >
          </li>
          <li
            class="page-item"
            v-for="pageNumber in pages"
            :key="pageNumber"
            :class="{ active: pageNumber === currentPage }"
          >
            <a class="page-link" href="#" @click="setCurrentPage(pageNumber)">{{
              pageNumber
            }}</a>
          </li>
          <li class="page-item" v-if="currentPage < totalPages">
            <a
              class="page-link"
              href="#"
              @click="setCurrentPage(currentPage + 1)"
              >Next</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "PagePagination",
  props: {
    totalItems: Number,
  },

  data() {
    return { currentPage: 1, pageSize: 10 };
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.totalItems / this.pageSize);
    },
    pages: function () {
      let pagesArray = [];
      for (let i = 1; i <= this.totalPages; i++) {
        pagesArray.push(i);
      }
      return pagesArray;
    },
  },
  beforeMount() {
    this.currentPage = parseInt(router.currentRoute.value.params.page, 10);
  },
  methods: {
    setCurrentPage: function (pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
      router.push(`/articles/page/${pageNumber}`);
    },
  },
};
</script>
