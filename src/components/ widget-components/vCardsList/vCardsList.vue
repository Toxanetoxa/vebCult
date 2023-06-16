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
import { onMounted, ref, watch } from "vue";
import VCard from "@/components/ widget-components/vCard/vCard.vue";
import { userStoreCardsList } from "@/stores/userCardsList";
import { Data } from '@/api/getCardsList/interfacies'

const props = defineProps({
  cardsList: {
    type: Array,
    required: true
  }
});

const list = ref(props.cardsList)

const isLoading = ref(false)

const userStoreList = userStoreCardsList()

const usersItems = userStoreList.list

onMounted(()=> {
  userStoreList.getAllCards()
})
function saveInStorage() {
  localStorage.setItem('usersItems', JSON.stringify(usersItems))
}
function setEmit(event:Data) {
  isLoading.value = true
  userStoreList.getItem(event.value)
  saveInStorage()
  isLoading.value = false
}
</script>