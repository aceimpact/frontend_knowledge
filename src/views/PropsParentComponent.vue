<template>
  <div class="text-3xl">11.コンポーネント&12.props</div>

  <div class="mt-4">
    <ChildComp :msg="greeting" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChildComp from "./PropsChildComp.vue";

const greeting = ref("Hello from parent");
</script>
