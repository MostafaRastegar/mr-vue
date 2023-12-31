import { mutationsGenerator } from "@/helpers/vuex/mutations";
import { Articles } from "../state";
import types from "../types";

export default {
  ...mutationsGenerator<Articles>(types.GET_ARTICLES, "list"),
  ...mutationsGenerator<Articles>(types.GET_ARTICLES_SLUG, "article"),
  ...mutationsGenerator<Articles>(types.POST_ARTICLES, "create"),
  ...mutationsGenerator<Articles>(types.PUT_ARTICLES_SLUG, "update"),
  ...mutationsGenerator<Articles>(types.DELETE_ARTICLES_SLUG, "delete"),
  ...mutationsGenerator<Articles>(types.GET_TAGS, "tags"),
};
