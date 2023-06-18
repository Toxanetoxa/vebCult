<template>
  <div class="v-card">
    <div class="v-card-wrap" :class="classesCard">
      <div class="v-card--img">
        <img :src="cardImage" :alt="imageDesc">
      </div>
      <div class="v-card--title">
        <h4 class="v-card--title_title">{{ cardData.title }}</h4>
      </div>
      <div class="v-card--description">
        <span class="v-card--description_text">{{ cardData.description }}</span>
      </div>
      <div v-if="isPrice" class="v-card--price">
        <span class="v-card--price_new">{{ currentPrice }}</span>
        <span class="v-card--price_old">{{ oldPrice }}</span>
      </div>
      <div class="v-card--action">
        <span v-if="cardData.is_sales" class="v-card--action_sales">Продана на аукционе</span>
        <v-button
          v-else
          class="v-card--action_bye"
          @click="handleClick"
          :in-cart="cIsBags"
          :is-loading="isLoading"
        >
          {{ cBtnText }}
        </v-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { formatCurrency } from "@/assets/utils/formatCurrency";
import { userStoreCardsList } from "@/stores/userCardsList";
import VButton from "@/components/ui-components/vButton/vButton.vue";
import { SetItem } from "@/api/setItem/setItem";

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  btnText: {
    type: String,
    default: "Купить"
  },
  btnInCartText: {
    type: String,
    default: "В корзине"
  }
});

const cardData = ref(props.item);
const isLoading = ref(false);
const userStoreList = userStoreCardsList();

async function setItem() {
  isLoading.value = true;
  const setPost = new SetItem();
  await setPost.getData();
  isLoading.value = false;
}

const isPrice = computed(() => {
  return !!cardData.value.price;
});
const isPriceCurrent = computed(() => {
  if (isPrice.value) {
    return !!cardData.value.price.current;
  }
  return false;
});
const isPriceOld = computed(() => {
  if (isPrice.value) {
    return !!cardData.value.price.old_value;
  }
  return false;
});
const isCurrency = computed(() => {
  if (isPrice.value) {
    return !!cardData.value.price.currency;
  }
  return false;
});
const currentPrice = computed(() => {
  if (isPriceCurrent.value && isCurrency.value) {
    return new formatCurrency(
      cardData.value.price.current,
      cardData.value.price.currency
    ).format();
  }
  return 0;
});
const oldPrice = computed(() => {
  if (isPriceOld.value && isCurrency.value) {
    let value = new formatCurrency(
      cardData.value.price.old_value,
      cardData.value.price.currency
    ).format();
    return value == 0 ? "" : value;
  }
  return "";
});
const cardImage = computed(() => {
  if (cardData.value.img && cardData.value.img.length) {
    return cardData.value.img;
  } else {
    return "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png";
  }
});
const imageDesc = computed(() => {
  if (cardData.value.img && cardData.value.img.length) {
    return cardData.value.name;
  } else {
    return "Картинка, ксожалению, не найдена";
  }
});
const isSales = computed(() => {
  return cardData.value.is_sales ?? false;
});
const classesCard = computed(() => {
  return isSales.value ? "v-card-sales" : "";
});
const cIsBags = computed(()=>{
  return userStoreList.list.some(el => el.id == cardData.value.id)
})
const cBtnText = computed(() => {
  return cIsBags.value ? props.btnInCartText : props.btnText;
});

const emit = defineEmits(["click:clickBuy"]);

watch(
  () => userStoreList.list,
  () => {
  }
);

const handleClick = () => {
  emit("click:clickBuy", cardData);
  setItem();
};

</script>
