<template>
  <form @submit.prevent="handleSubmit">
    <div class="login-form">
      <h1>{{ message.title }}</h1>

      <div class="form-items">
        <slot></slot>
      </div>

      <Button
        classes="btn btn-primary btn-block mt-3"
        :disabled="isLoading"
        :isLoading="isLoading"
        :error="error"
        type="submit"
      >
        {{ message.submitLabel }}
      </Button>

      <div class="footer">
        <div class="footer-desc">{{ message.footerDesc }}</div>
        <router-link :to="footerLink" class="footer-action">
          {{ message.footerLink }}
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
import authMessages from "@/constants/messages/auth";
import Button from "./kits/Button.vue";

export default {
  name: "AuthForm",
  props: {
    mode: String,
    footerLink: String,
    isLoading: Boolean,
    handleFormSubmit: {
      type: Function,
      required: true,
    },
  },
  data({ mode }) {
    return { message: authMessages[mode] };
  },
  methods: {
    handleSubmit() {
      this.handleFormSubmit();
    },
  },
  components: { Button },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
  display: flex;
  max-width: 450px;
  transition: 0.3s;
  border-radius: 4px;
  align-items: center;
  padding: 0 20px 19px;
  flex-direction: column;
  justify-content: start;
  background-color: #eceeef;
  &.disabled {
    opacity: 0.5;
  }
  > h1 {
    color: #707070;
    margin-top: 37px;
    font-weight: 300;
    font-size: 2.938rem;
    margin-bottom: 27px;
    text-transform: uppercase;
  }
  > .form-items {
    width: 100%;
  }
  > .action-button {
    height: 40px;
    width: 100%;
    margin-top: 28px;
  }
  > .footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
    .footer-action {
      font-weight: 700;
      margin-left: 11px;
    }
  }
}
</style>
