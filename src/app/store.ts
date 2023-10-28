import { createStore } from "vuex";
import users from "./users";
import articles from "./articles";
export default createStore({
  modules: {
    users,
    articles,
  },
});
