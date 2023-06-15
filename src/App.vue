<template>
  <v-header :bag-count="0" />
  <main class="v-content">
    <suspense>
      <RouterView />
    </suspense>
  </main>
  <v-footer />
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
import VHeader from "@/components/base-components/vHeader/vHeader.vue";
import VFooter from "@/components/base-components/vFooter/vFooter.vue";
</script>
