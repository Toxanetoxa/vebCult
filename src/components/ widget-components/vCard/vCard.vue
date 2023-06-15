<template>
<!--  <span>{{ formattedPrice }}</span>-->
  <div class="v-card">
    <div class="v-card-wrap">
      <div class="v-card--img">
        <img :src="cardData.img" :alt="cardData.name">
      </div>
      <div class="v-card--title">
        <h4 class="v-card--title_title">{{ cardData.title }}</h4>
      </div>
      <div class="v-card--description">
        <span class="v-card--description_text">{{ cardData.description }}</span>
      </div>
      <div v-if="cardData.price" class="v-card--price">
        <span class="v-card--price_old">{{ 0 }}</span>
        <span class="v-card--price_new" v-if="oldCurrency">{{ oldCurrency }}</span>
      </div>
      <div class="v-card--action">
        <span v-if="cardData.is_sales" class="v-card--action_sales">Продана на аукционе</span>
        <v-button
          v-else
          class="v-card--action_bye"
        >Купить</v-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vButton from '@/components/ui-components/vButton/vButton.vue'
import { computed, defineProps, ref } from "vue";
import { formatCurrency } from "@/assets/utils/formatCurrency";

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const cardData = ref(props.item)


const formattedPrice = computed(() => {
  if (cardData.value.price && cardData.value.price.currency) {
    return new formatCurrency(
      cardData.value.price.current,
      cardData.value.price.currency
    ).format()
  }
  return ''
})
//
console.log(new formatCurrency(
  2000,
  'USD'
).format())

</script>
