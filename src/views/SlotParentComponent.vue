<template>
  <div class="text-3xl">スロット</div>

  <div class="mt-4">
    <ChildComp>Message: {{ msg }}</ChildComp>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChildComp from "./SlotChildComp.vue";

const msg = ref("from parent");
</script>
