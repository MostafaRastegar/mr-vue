import { initState } from "@/helpers/vuex/mutations";
import { InitState } from "@/app/interfaces";

export interface Users {
  login: InitState;
  register: InitState;
}

const state = () => ({
  login: initState,
  register: initState,
});
export default state;
