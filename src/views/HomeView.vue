<script lang="ts" setup>
import { ref } from "vue";
import { GetCardsList } from "@/api/getCardsList/getCardsList";
import VCardsList from "@/components/ widget-components/vCardsList/vCardsList.vue";
const cardsList = ref([]);
const title = ref("");

async function getCards() {
  const fetchCardsList = new GetCardsList()
  await fetchCardsList.getPosts();
  cardsList.value = fetchCardsList.data.list;
  title.value = fetchCardsList.data.title;
}

await getCards();
</script>

<template>
  <h1 class="v-title">{{ title }}</h1>
  <v-cards-list
    :cards-list="cardsList"
  />
</template>
