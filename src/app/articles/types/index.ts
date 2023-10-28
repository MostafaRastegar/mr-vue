import { mutationKeysGenerator } from "@/helpers/vuex/mutations";

export const GET_ARTICLES = "GET_ARTICLES";
export const GET_ARTICLES_SLUG = "GET_ARTICLES_SLUG";
export const POST_ARTICLES = "POST_ARTICLES";
export const PUT_ARTICLES_SLUG = "PUT_ARTICLES_SLUG";
export const DELETE_ARTICLES_SLUG = "DELETE_ARTICLES_SLUG";
export const GET_TAGS = "GET_TAGS";

const articlesTypes = {
  ...mutationKeysGenerator(GET_ARTICLES),
  ...mutationKeysGenerator(GET_ARTICLES_SLUG),
  ...mutationKeysGenerator(POST_ARTICLES),
  ...mutationKeysGenerator(PUT_ARTICLES_SLUG),
  ...mutationKeysGenerator(DELETE_ARTICLES_SLUG),
  ...mutationKeysGenerator(GET_TAGS),
};

export default articlesTypes;
