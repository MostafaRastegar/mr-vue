import { computed, ref } from "vue";
import { useStore } from "vuex";
import { userActions } from "@/app/users/actions";
import { PostRegisterBody } from "@/app/users/interfaces/register.int";

const registerVM = () => {
  const store = useStore();
  const email = ref("");
  const password = ref("");
  const username = ref("");

  const loading = computed(() => {
    return store.getters.getRegisterResponse.loading;
  });

  const postUsersRequest = async () => {
    const requestBody: PostRegisterBody = {
      user: {
        email: email.value,
        password: password.value,
        username: username.value,
      },
    };
    await store.dispatch(userActions.postUsersRequest, requestBody);
  };

  return {
    store,
    email,
    password,
    username,
    loading,
    postUsersRequest,
  };
};

export default registerVM;
