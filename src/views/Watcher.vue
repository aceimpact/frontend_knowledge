<template>
  <div class="text-3xl">ウォッチャー</div>

  <div class="mt-4">
    <p>Todo id: {{ todoId }}</p>
    <button class="bg-blue-200 hover:bg-blue-100 text-white rounded px-4 py-2 my-4" @click="todoId++">
      Fetch next todo
    </button>
    <div class="w-min border-2 border-gray-200 rounded p-4">
      <p v-if="!todoData">Loading...</p>
      <pre v-else>{{ todoData }}</pre>
    </div>

    <button class="bg-red-600 hover:bg-red-500 text-white rounded px-4 py-2 my-4" @click="doReset">リセット</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  todoData.value = await res.json();
}

async function doReset() {
  todoId.value = 1;
}

fetchData();

watch(todoId, fetchData);
</script>
