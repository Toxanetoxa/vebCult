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
        <v-search @update:value="setValue" v-model="searchValue" />
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

<script setup lang="ts">
import vSearch from "@/components/ui-components/vSearch/vSearch.vue";
import { RouterLink } from 'vue-router';
import { ref, watch } from "vue";
import { userStoreCardsList } from "@/stores/userCardsList";
import { headerSearch} from "@/stores/headerSearch";
import VSearch from "@/components/ui-components/vSearch/vSearch.vue";

const store = userStoreCardsList()
const bagCount = ref(store.list.length)
watch(
  () => store.list.length,
  (newValue) => {
    bagCount.value = newValue;
  }
);

const searchStore = headerSearch()
const searchValue = ref('')
function setValue (value:String){
  searchValue.value=value
  searchStore.setSearchValue(value)
}
</script>