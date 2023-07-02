<template>
  <div class="text-3xl">条件付きレンダリング</div>

  <div class="mt-4">
    <button class="bg-gray-400 hover:bg-gray-300 text-white rounded px-4 py-2" @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const awesome = ref(true);

function toggle() {
  awesome.value = !awesome.value;
}
</script>
