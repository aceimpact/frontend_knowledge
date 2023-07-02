<template>
  <div class="text-3xl">ライフサイクルとテンプレート参照</div>

  <div class="mt-4">
    <p ref="pElementRef">hello</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const pElementRef = ref(null);

onMounted(() => {
  pElementRef.value.textContent = "mounted!";
});
</script>
