<template>
  <div class="text-3xl">フォームバインディング</div>

  <div class="mt-4">
    <input
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-2.5"
      :value="text"
      @input="onInput"
      placeholder="入力してください。"
    />
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const text = ref("");

function onInput(e) {
  text.value = e.target.value;
}
</script>
