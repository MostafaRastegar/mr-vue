import { initState } from "@/helpers/vuex/mutations";
import { InitState } from "@/app/interfaces";

export interface Articles {
  article: InitState;
  list: InitState;
  create: InitState;
  update: InitState;
  delete: InitState;
  tags: InitState;
}

const state = () => ({
  article: initState,
  list: initState,
  create: initState,
  update: initState,
  delete: initState,
  tags: initState,
});
export default state;
