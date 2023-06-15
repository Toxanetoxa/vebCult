<template>
  <header class="v-header">
    <div class="v-header-nav">
      <div class="v-header-nav--logo">
        <RouterLink
          to="/"
          class="v-icon v-icon-logo"
        />
      </div>
      <nav class="v-header-nav--links">
        <RouterLink
          to="/"
          class="v-link"
        >Каталог</RouterLink>
        <RouterLink
          to="/"
          class="v-link">Доставка</RouterLink>
        <RouterLink
          to="/"
          class="v-link">Оплата</RouterLink>
        <RouterLink
          to="/"
          class="v-link">Контакты</RouterLink>
        <RouterLink
          to="/"
          class="v-link">О галерее</RouterLink>
      </nav>
      <div class="v-header-nav--search">
        <v-search />
      </div>
      <div class="v-header-nav--cart">
        <div class="v-header-nav--cart-wrap">
          <i class="v-icon v-icon-cart" />
          <span class="v-header-nav--cart-wrap_count">
            {{ bagCount }}
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import vSearch from "@/components/ui-components/vSearch/vSearch.vue";
import { RouterLink } from 'vue-router';
import {ref} from "vue";
export default  {
  components: { vSearch, RouterLink },
  props: {
    bagCount: {
      type: Number,
      default: 0,
    }
  },
  setup(props) {
    const items = ref([1, 2, 4, 5, 6])

    const handleSubmit = item => items.value.push(item)

    return {
      props,
      handleSubmit
    }
  }
}


// defineExpose({
//   bagCount: defineProp({
//     type: Number,
//     default: 0
//   })
// })
//
// const components = {
//   vSearch,
//   RouterLink
// }
</script>