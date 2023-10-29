import Cookies from "js-cookie";

import actionTemplate from "@/helpers/vuex/actionTemplate";
import { ACCESS_TOKEN } from "@/constants/configs";
import usersServices from "../services";
import types from "../types";
import type { PostLoginBody, PostLoginResult } from "../interfaces/login.int";
import type {
  PostRegisterBody,
  PostRegisterResult,
} from "../interfaces/register.int";
import type { Commit } from "vuex";
import router from "@/router";
export const userActions = {
  postUsersRequest: "postUsersRequest",
  postUsersLoginRequest: "postUsersLoginRequest",
};

const actions = {
  [userActions.postUsersLoginRequest]: (
    context: { commit: Commit },
    body: PostLoginBody
  ) => {
    return actionTemplate({
      commit: context.commit,
      service: () => usersServices.postUsersLoginService(body),
      type: types.POST_USERS_LOGIN,
      resolve: (data: PostLoginResult) => {
        Cookies.set(ACCESS_TOKEN, data.user.token);
        router.push("/articles/page/1");
      },
    });
  },

  [userActions.postUsersRequest]: (
    context: { commit: Commit },
    body: PostRegisterBody
  ) =>
    actionTemplate({
      commit: context.commit,
      service: () => usersServices.postUsersService(body),
      type: types.POST_USERS,
      resolve: (data: PostRegisterResult) => {
        Cookies.set(ACCESS_TOKEN, data.user.token);
        router.push("/articles/page/1");
      },
    }),
};

export default actions;
