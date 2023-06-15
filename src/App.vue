<template>
  <v-header :bag-count="0" />
  <main class="v-content">
    <RouterView />
  </main>
  <v-footer />
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import VHeader from "@/components/base-components/vHeader/vHeader.vue";
import VFooter from "@/components/base-components/vFooter/vFooter.vue";

export default defineComponent({
  name: "App",
  components: {
    VFooter,
    VHeader,
    RouterView
  },
});
</script>
