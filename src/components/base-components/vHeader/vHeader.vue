<template>
  <header class="v-header">
    <div class="v-header-nav">
      <div class="v-header-nav--logo">
        <RouterLink
          to="/"
          class="v-icon v-icon-logo"
        />
      </div>
      <div class="v-header-nav--links">
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
      </div>
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
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

// component definition
export default defineComponent({
  name: "vHeader",
  components: {
    vSearch,
    RouterLink,
  },
  props: {
    bagCount: {
      type: Number,
      default: 0,
    }
  }
  // other component options
});
</script>