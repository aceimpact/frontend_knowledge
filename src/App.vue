<template>
  <header class="bg-blue-200">
    <div class="p-4">
      <RouterLink to="/">
        <p class="text-white text-3xl font-bold">フロントエンド知見</p>
      </RouterLink>
    </div>
  </header>
  <main class="p-4">
    <div class="container mx-auto">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
