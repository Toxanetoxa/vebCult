<template>
  <h1 class="v-title  v-home-title">{{ title }}</h1>
  <v-cards-list
    :cards-list="cCardsList"
  />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { GetCardsList } from "@/api/getCardsList/getCardsList";
import VCardsList from "@/components/ widget-components/vCardsList/vCardsList.vue";
import { headerSearch } from "@/stores/headerSearch";
import type { Post } from "@/api/getCardsList/interfacies";

const cardsList = ref([]);
const title = ref("");
const searchStore = headerSearch();
const list = ref([]);

const searchValue = computed(() => {
  return searchStore.searchValue
})

async function getCards() {
  const fetchCardsList = new GetCardsList();
  await fetchCardsList.getPosts();
  cardsList.value = fetchCardsList.data.list;
  title.value = fetchCardsList.data.title;
}

await getCards();

const cCardsList = computed(()=>{
  if (searchValue.value.length > 0) {
    return cardsList.value.filter((item: Post) => {
      return item.title.toLowerCase().includes(searchValue.value.toLowerCase());
    })
  } else {
    return cardsList.value
  }
})
</script>
