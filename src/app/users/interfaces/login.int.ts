import { Commit } from "vuex";

export interface PostLoginBodyWithCommit extends PostLoginBody {
  commit: Commit;
}
export interface PostLoginBody {
  user: {
    email: string;
    password: string;
  };
}

export interface PostLoginResult {
  user: User;
}

export interface User {
  email: string;
  username: string;
  bio?: any;
  image: string;
  token: string;
}
