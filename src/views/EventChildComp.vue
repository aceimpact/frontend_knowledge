<template>
  <h2>Child component</h2>
</template>

<script lang="ts" setup>
const emit = defineEmits(["response"]);

emit("response", "hello from child");
</script>
