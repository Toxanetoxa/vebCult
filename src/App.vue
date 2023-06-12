<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import VButton from "@/components/ui-components/vButton/vButton.vue";
import VHeader from "@/components/base-components/vHeader/vHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    VHeader,
    VButton,
    RouterView
  }
});
</script>

<template>
  <v-header />
  <main class="v-content">
    <v-button>Привет</v-button>
    <RouterView />
  </main>
</template>
