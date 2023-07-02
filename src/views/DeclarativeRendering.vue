<template>
  <div class="text-3xl">宣言的レンダリング&属性バインディング</div>

  <div class="mt-4">
    <h1>{{ message }}</h1>
    <p>Count is: {{ counter.count }}</p>
    <h1 :class="titleClass">Make me red</h1>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const counter = reactive({ count: 0 });
const message = ref("Hello World!");
const titleClass = ref("title");
</script>

<style scoped>
.title {
  color: red;
}
</style>
