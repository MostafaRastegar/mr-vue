import actionTemplate from "@/helpers/vuex/actionTemplate";
import services from "../services";
import types from "../types";
import type {
  PostArticlesBody,
  PostArticlesResult,
} from "../interfaces/create.int";
import type {
  PutArticlesSlugParams,
  PutArticlesSlugResult,
} from "../interfaces/update.int";

import type { GetTagsResult } from "../interfaces/tags";

import type { Commit, Dispatch } from "vuex";
import router from "@/router";

export const articleActions = {
  postArticlesRequest: "postArticlesRequest",
  putArticlesSlugRequest: "putArticlesSlugRequest",
  getArticlesSlugRequest: "getArticlesSlugRequest",
  getArticlesRequest: "getArticlesRequest",
  deleteArticlesSlugRequest: "deleteArticlesSlugRequest",
  getTagsRequest: "getTagsRequest",
};

const actions = {
  [articleActions.postArticlesRequest]: (
    context: { commit: Commit },
    body: PostArticlesBody
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.postArticlesService(body),
      type: types.POST_ARTICLES,
      resolve: (data: PostArticlesResult) => {
        console.log("data :>> ", data);
        router.push("/articles");
      },
    }),

  [articleActions.putArticlesSlugRequest]: (
    context: { commit: Commit },
    params: PutArticlesSlugParams
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.putArticlesSlugService(params),
      type: types.PUT_ARTICLES_SLUG,
      resolve: (data: PutArticlesSlugResult) => {
        console.log("data :>> ", data);
        router.push("/articles");
      },
    }),

  [articleActions.getArticlesRequest]: (
    context: { commit: Commit },
    page: string
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.getArticlesService(page),
      type: types.GET_ARTICLES,
    }),

  [articleActions.getTagsRequest]: (context: { commit: Commit }) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.getTagsService(),
      type: types.GET_TAGS,
      resolve: (data: GetTagsResult) => {
        console.log("data :>> ", data);
      },
    }),

  [articleActions.getArticlesSlugRequest]: (
    context: { commit: Commit; dispatch: Dispatch },
    slug: string
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.getArticlesSlugService(slug),
      type: types.GET_ARTICLES_SLUG,
      resolve: () => {
        context.dispatch(articleActions.getTagsRequest);
      },
    }),

  [articleActions.deleteArticlesSlugRequest]: (
    context: { commit: Commit; dispatch: Dispatch },
    slug: string
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => services.deleteArticlesSlugService(slug),
      type: types.DELETE_ARTICLES_SLUG,
      resolve: () => {
        console.log("is delete");
        context.dispatch(articleActions.getArticlesRequest);
      },
    }),
};

export default actions;
