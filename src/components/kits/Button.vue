<template>
  <button
    :class="classes"
    :disabled="disabled || isLoading"
    @click="handleClick"
    :type="type"
  >
    <span v-if="isLoading" class="spinner-border spinner-border-sm mr-1"></span>
    <slot></slot>
    <div v-if="error" class="text-danger">{{ error }}</div>
  </button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    classes: String,
    disabled: Boolean,
    isLoading: Boolean,
    error: String,
    type: String,
  },
  methods: {
    handleClick() {
      if (!this.isLoading) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style scoped></style>
