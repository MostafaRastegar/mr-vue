import { mutationsGenerator } from "@/helpers/vuex/mutations";
import { Users } from "../state";
import types, { POST_USERS, POST_USERS_LOGIN } from "../types";

export default {
  ...mutationsGenerator<Users>(types, POST_USERS, "register"),
  ...mutationsGenerator<Users>(types, POST_USERS_LOGIN, "login"),
};
