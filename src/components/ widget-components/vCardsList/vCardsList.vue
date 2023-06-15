<template>
  <div
    class="v-cards-list"
  >
    <template v-for="(card, index) in cardsList" :key="index">
      <v-card
        v-if="Object.keys(card).length"
        :item="card"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { getCardsList } from "@/api/getCardsList/getCardsList";
import { ref } from "vue";
import VCard from "@/components/ widget-components/vCard/vCard.vue";
const cardsList = ref([]);

async function getCards() {
  const fetchCardsList = new getCardsList();
  await fetchCardsList.loadPosts();
  cardsList.value = fetchCardsList.data.list;
}
getCards();
</script>