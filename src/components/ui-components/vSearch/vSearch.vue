<template>
<div class="v-search">
  <div class="v-search__wrap">
    <v-input
      v-model="value"
      :placeholder="'Поиск по названию картины'"
    />
    <v-button >Найти</v-button>
  </div>
</div>
</template>

<script setup lang="ts">
import VInput from "@/components/ui-components/vInput/vInput.vue";
import VButton from "@/components/ui-components/vButton/vButton.vue";
import { ref } from 'vue';

const value = ref('');

</script>