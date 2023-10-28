import endpoints from "@/constants/endpoints";
import request from "@/utils/request";
import type { PostArticlesBody } from "../interfaces/create.int";
import type { PutArticlesSlugParams } from "../interfaces/update.int";

const usersServices = {
  getTagsService() {
    const url = endpoints.ARTICLES.GET_TAGS();
    return request.get(url);
  },
  getArticlesService(page: string) {
    const url = endpoints.ARTICLES.GET_ARTICLES();
    return request.get(url, {
      params: {
        page,
      },
    });
  },
  getArticlesSlugService(slug: string) {
    const url = endpoints.ARTICLES.GET_ARTICLES_SLUG(slug);
    return request.get(url);
  },
  postArticlesService(body: PostArticlesBody) {
    const url = endpoints.ARTICLES.POST_ARTICLES();
    return request.post(url, body);
  },
  putArticlesSlugService(params: PutArticlesSlugParams) {
    const { slug, body } = params;
    const url = endpoints.ARTICLES.PUT_ARTICLES_SLUG(slug);
    return request.put(url, body);
  },
  deleteArticlesSlugService(slug: string) {
    const url = endpoints.ARTICLES.DELETE_ARTICLES_SLUG(slug);
    return request.delete(url);
  },
};

export default usersServices;
