import { Commit } from "vuex";
import { Article } from "./list.int";
import { PostArticlesBody } from "./create.int";

export interface PostArticlesBodyWithCommit extends PostArticlesBody {
  commit: Commit;
}
export interface PutArticlesSlugParams {
  body: Partial<PostArticlesBody>;
  slug: string;
}

export interface PutArticlesSlugResult {
  article: Article;
}
