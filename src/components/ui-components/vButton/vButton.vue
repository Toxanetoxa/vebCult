<template>
  <button
    class="v-button"
    :disabled="disabled"
  >
    <template v-if="isLoading">
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

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'VButton',
  props: {
    icon: {
      type: String,
      default: 'Кнопка'
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
      default: false,
    }
  },

  setup(props) {
    const cIcon = computed(() => {
      return props.inCart ? 'v-icon-check-mark' : props.icon
    })

    const cisIcon = computed(() => {
      return !!cIcon.value.length
    })

    return {
      cIcon,
      cisIcon
    }
  }
})
</script>