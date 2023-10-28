<script>
import AuthFormWrapper from "@/components/AuthFormWrapper.vue";
import Input from "@/components/kits/Input.vue";
import loginVM from "./login.vm";
export default {
  name: "LoginView",
  components: { AuthFormWrapper, Input },
  setup: loginVM,
};
</script>

<template>
  <div class="login-page">
    <AuthFormWrapper
      mode="login"
      :is-loading="loading"
      :handle-form-submit="postUsersLoginRequest"
      footer-link="/register"
    >
      <Input
        label="Email"
        id="InputEmail"
        v-model="email"
        type="text"
        :disabled="loading"
      />

      <Input
        label="password"
        id="InputPassword"
        v-model="password"
        type="password"
        :disabled="loading"
      />
    </AuthFormWrapper>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
