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
      <div class="v-header-nav--cart"></div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import VSearch from "@/components/ui-components/vSearch/vSearch.vue";
export default {
  name: "vHeader",
  components: {
    VSearch,
    RouterLink,
  }
};
</script>