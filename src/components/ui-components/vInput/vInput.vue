<template>
  <div class="v-input">
    <div class="v-input__icon"></div>
    <div class="v-input__wrap">
      <input :value="value" @input="updateValue" :placeholder="placeholder" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
    modelValue: {
      type: String,
      default: "",
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  })

const value = ref(props.modelValue);

const emit = defineEmits(['update:modelValue'])
const updateValue = (event: InputEvent) => {
  value.value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    value.value = newValue;
  }
);

</script>