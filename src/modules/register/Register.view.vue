<script>
import AuthFormWrapper from "@/components/AuthFormWrapper.vue";
import Input from "@/components/kits/Input.vue";
import registerVM from "./register.vm";
export default {
  name: "RegisterView",
  components: { AuthFormWrapper, Input },
  setup: registerVM,
};
</script>

<template>
  <div class="register-page">
    <AuthFormWrapper
      mode="register"
      :is-loading="loading"
      :handle-form-submit="postUsersRequest"
      footer-link="/"
    >
      <Input
        label="user"
        id="InputUser"
        v-model="username"
        type="text"
        :disabled="loading"
      />
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
.register-page {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
