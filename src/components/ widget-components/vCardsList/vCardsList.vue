<template>
  <div class="v-cards-list">
    <template v-for="card in list" :key="card.id">
        <v-card
          v-if="isCard(card)"
          :item="card"
          :btn-text="'Купить'"
          :btn-in-cart-text="'В корзине'"
          @click:click-buy="setEmit"
        />
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import VCard from "@/components/ widget-components/vCard/vCard.vue";
import { userStoreCardsList } from "@/stores/userCardsList";

const props = defineProps({
  cardsList: {
    type: Array,
    required: true
  }
});

const list = computed(()=>{
  return props.cardsList?.values()
})

const userStoreList = userStoreCardsList()

const isCard = (cardItem:Object) => !!Object.keys(cardItem).length

onMounted(()=> {
  userStoreList.getAllCards()
})
function setEmit(event:Object) {
  userStoreList.getItem(event.value)
}
</script>