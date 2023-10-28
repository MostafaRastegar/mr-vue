import type { Users } from "../state";
const getters = {
  getLoginResponse(state: Users) {
    return state.login;
  },
  getRegisterResponse(state: Users) {
    return state.register;
  },
};

export default getters;
