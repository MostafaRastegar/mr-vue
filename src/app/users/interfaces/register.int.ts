import { Commit } from "vuex";

export interface PostRegisterBodyWithCommit extends PostRegisterBody {
  commit: Commit;
}

export interface PostRegisterBody {
  user: {
    email: string;
    password: string;
    username: string;
  };
}

export interface PostRegisterResult {
  user: User;
}

export interface User {
  email: string;
  username: string;
  bio?: any;
  image: string;
  token: string;
}
