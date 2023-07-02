<template>
  <button class="bg-green-400 hover:bg-green-300 text-white rounded px-4 py-2" @click="increment">
    count is: {{ count }}
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}
</script>
