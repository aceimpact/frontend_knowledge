<template>
  <div class="text-3xl">算出プロパティー</div>

  <div class="mt-4">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2.5" />
      <button class="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 ml-2">Add Todo</button>
    </form>

    <ul class="mt-3">
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span class="ml-2" :class="{ done: todo.done }">{{ todo.text }}</span>
        <button class="bg-red-600 hover:bg-red-500 text-white rounded px-3 py-1 ml-2" @click="removeTodo(todo)">
          X
        </button>
      </li>
    </ul>
    <button
      class="bg-gray-300 hover:bg-gray-200 text-white rounded px-4 py-2 mt-3"
      @click="hideCompleted = !hideCompleted"
    >
      {{ hideCompleted ? "全て表示" : "完了しているものを隠す" }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

let id = 0;

const newTodo = ref("");
const hideCompleted = ref(false);
const todos = ref([
  { id: id++, text: "Learn HTML", done: true },
  { id: id++, text: "Learn JavaScript", done: true },
  { id: id++, text: "Learn Vue", done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false });
  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
