<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      class="form-control"
      :class="{ 'is-invalid': error }"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :disabled="disabled"
    />

    <div v-if="error" class="invalid-feedback">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: String,
    type: String,
    id: String,
    modelValue: [String, Number],
    disabled: Boolean,
    error: String,
  },
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
/* Add any custom styling for your input component here */
</style>
