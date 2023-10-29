import endpoints from "@/constants/endpoints";
import request from "@/utils/request";
import type { PostLoginBody } from "../interfaces/login.int";
import type { PostRegisterBody } from "../interfaces/register.int";
const services = {
  postUsersService(body: PostRegisterBody) {
    const url = endpoints.USERS.POST_USERS();
    return request.post(url, body);
  },
  postUsersLoginService(body: PostLoginBody) {
    const url = endpoints.USERS.POST_USERS_LOGIN();
    return request.post(url, body);
  },
};

export default services;
