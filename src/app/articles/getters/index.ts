import type { Articles } from "../state";
const getters = {
  getArticleListResponse(state: Articles) {
    return state.list;
  },
  getArticleResponse(state: Articles) {
    return state.article;
  },
  getArticleUpdateResponse(state: Articles) {
    return state.update;
  },
  getArticleCreateResponse(state: Articles) {
    return state.create;
  },
  getArticleDeleteResponse(state: Articles) {
    return state.delete;
  },
  getTagsResponse(state: Articles) {
    return state.tags;
  },
};

export default getters;
