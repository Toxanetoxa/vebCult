<script lang="ts" setup>
import { onMounted, ref } from "vue";
import vCardsList from "@/components/ widget-components/vCardsList/vCardsList.vue";
import { getCardsList } from "@/api/getCardsList/getCardsList";
import { cardsListStore } from "../stores/cardsStore";

const cardsList = ref([]);
const title = ref("");

async function getCards() {
  const fetchCardsList = new getCardsList();
  await fetchCardsList.loadPosts();
  cardsList.value = fetchCardsList.data.list;
  title.value = fetchCardsList.data.title;
}

await getCards();

const cardsStore = cardsListStore();

onMounted(() => {
  cardsStore.fetchCards();
});
</script>

<template>
  <h1 class="v-title">{{ title }}</h1>
  <v-cards-list
    :cards-list="cardsList"
  />
</template>
