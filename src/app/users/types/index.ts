import { mutationKeysGenerator } from "@/helpers/vuex/mutations";

export const POST_USERS = "GET_USERS";
export const POST_USERS_LOGIN = "GET_USERS_LOGIN";

const usersTypes = {
  ...mutationKeysGenerator(POST_USERS),
  ...mutationKeysGenerator(POST_USERS_LOGIN),
};

export default usersTypes;
