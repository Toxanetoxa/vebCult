<script lang="ts">
import { defineComponent } from "vue";
import VCardsList from "@/components/ widget-components/vCardsList/vCardsList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    VCardsList
  }
});
</script>

<template>
  <h1 class="v-title">Картины эпохи Возрождения</h1>
  <suspense>
    <v-cards-list />
  </suspense>
</template>
