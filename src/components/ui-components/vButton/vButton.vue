<template>
  <button
    class="v-button"
    :disabled="disabled"
    :class="classesInCart"
  >
    <template v-if="isLoading">
      <v-loading />
    </template>
    <template v-else>
      <i
        v-if="cisIcon"
        class="v-icon"
        :class="cIcon"
      />
      <slot></slot>
    </template>

  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import VLoading from "@/components/ui-components/vLoading/vLoading.vue";

const props = defineProps({
  icon: {
    type: String,
    default: "Кнопка"
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inCart: {
    type: Boolean,
    default: false
  }
});

const cIcon = computed(() => {
  return props.inCart ? "v-icon-check-mark" : props.icon || "";
});

const cisIcon = computed(() => {
  return !!cIcon.value.length;
});

const classesInCart = computed(() => {
  return props.inCart ? "v-button_in-cart" : "";
});
</script>