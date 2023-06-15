<template>
  <div class="v-cards-list">
    <template v-for="card in list" :key="card.id">
        <v-card
          v-if="Object.keys(card).length"
          :item="card"
          @click:click-buy="setEmit"
        />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import VCard from "@/components/ widget-components/vCard/vCard.vue";
import { userStoreCardsList } from "@/stores/userCardsList";

const props = defineProps({
  cardsList: {
    type: Array,
    required: true
  }
});

const list = ref(props.cardsList)

const userStoreList = userStoreCardsList()
function setEmit(event) {
  userStoreList.getItem(event)
}
</script>