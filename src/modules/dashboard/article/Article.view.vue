<script>
import articleVM from "./article.vm";
export default {
  name: "ArticlePage",
  setup: articleVM,
};
</script>
<template>
  <h1>{{ `${mode ? "Edit" : "New"} Articles` }}</h1>
  <div v-if="loading">
    <span class="spinner-border spinner-border-sm mr-1"></span>
    <span>loading ...</span>
  </div>
  <div v-else class="container-fluid new-article-page">
    <div class="row d-flex flex-sm-column-reverse flex-md-row">
      <div class="col-sm-12 col-md-7 col-lg-9">
        <form>
          <div class="form-group">
            <label for="InputTitle">Title</label>
            <input
              id="InputTitle"
              v-model="title"
              type="text"
              class="form-control"
              placeholder="Title"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputDescription">Description</label>
            <input
              id="InputDescription"
              v-model="description"
              type="text"
              class="form-control"
              placeholder="Description"
              required
            />
          </div>
          <div class="form-group">
            <label for="InputBody">Body</label>
            <textarea
              id="InputBody"
              v-model="body"
              type="text"
              class="form-control"
              rows="8"
              required
            ></textarea>
          </div>
          <button
            class="submit-button btn btn-primary col-lg-2 col-md-4 col-sm-12"
            :disabled="true"
          >
            <Spinner v-if="isLoading" color="white" size="20px" />
            <span v-else>{{ mode ? "Update" : "Submit" }}</span>
          </button>
        </form>
      </div>
      <div class="col-sm-12 col-md-5 col-lg-3 mb-3">
        <div>
          <div class="card">
            <div class="card-body">
              <div
                v-for="(tagItem, tagIndex) in tagList"
                :key="tagIndex"
                class="form-check mb-2"
              >
                <input
                  :id="`tag-item-${tagItem}`"
                  v-model="tagItem.checked"
                  class="form-check-input"
                  type="checkbox"
                  :value="tagItem.name"
                  :checked="tagItem.checked"
                />
                <label class="form-check-label" :for="`tag-item-${tagItem}`">
                  {{ tagItem.name }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.new-article-page {
  .submit-button {
    height: 40px;
    display: flex;
    margin-top: 28px;
    align-items: center;
    justify-content: center;
  }
}
</style>
