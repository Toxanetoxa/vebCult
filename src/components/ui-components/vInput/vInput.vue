<template>
  <div class="v-input">
    <div class="v-input__icon"></div>
    <div class="v-input__wrap">
      <input :value="value" @input="updateValue" :placeholder="placeholder"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'vInput',
  props: {
    modelValue: {
      type: String,
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit }) {
    const value = ref(props.modelValue)

    const updateValue = (event: InputEvent) => {
      value.value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value.value)
    }

    watch(
      () => props.modelValue,
      (newValue) => {
        value.value = newValue
      }
    )

    return {
      value,
      updateValue
    }
  }
})
</script>