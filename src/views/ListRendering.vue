<template>
  <div class="text-3xl">リストレンダリング</div>

  <div class="mt-4">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2.5" />
      <button class="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 ml-2">Add Todo</button>
    </form>

    <ul class="mt-3">
      <li v-for="todo in todos" :key="todo.id" class="py-2">
        {{ todo.text }}
        <button class="bg-red-600 hover:bg-red-500 text-white rounded px-3 py-1" @click="removeTodo(todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// give each todo a unique id
let id = 0;

const newTodo = ref("");
const todos = ref([
  { id: id++, text: "Learn HTML" },
  { id: id++, text: "Learn JavaScript" },
  { id: id++, text: "Learn Vue" },
]);

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>
