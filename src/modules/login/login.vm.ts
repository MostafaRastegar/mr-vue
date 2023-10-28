import { computed, ref } from "vue";
import { useStore } from "vuex";
import { userActions } from "@/app/users/actions";

const loginVM = () => {
  const store = useStore();
  const email = ref("{{EMAIL}}");
  const password = ref("{{PASSWORD}}");

  const loading = computed(() => {
    return store.getters.getLoginResponse.loading;
  });

  const postUsersLoginRequest = async () => {
    const requestBody = {
      user: {
        email: email.value,
        password: password.value,
      },
    };
    await store.dispatch(userActions.postUsersLoginRequest, requestBody);
  };

  return {
    store,
    email,
    password,
    loading,
    postUsersLoginRequest,
  };
};

export default loginVM;
