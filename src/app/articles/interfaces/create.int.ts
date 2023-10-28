import { Commit } from "vuex";
import { Article } from "./list.int";

export interface PostArticlesBodyWithCommit extends PostArticlesBody {
  commit: Commit;
}
export interface PostArticlesBody {
  article: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
}

export interface PostArticlesResult {
  article: Article;
}
