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
import { computed, onMounted, ref } from "vue";
import VCard from "@/components/ widget-components/vCard/vCard.vue";
import { userStoreCardsList } from "@/stores/userCardsList";
import { Data } from '@/api/getCardsList/interfacies'

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

onMounted(()=> {
  userStoreList.getAllCards()
})
function setEmit(event:Data) {
  userStoreList.getItem(event.value)
}
</script>