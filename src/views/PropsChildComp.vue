<template>
  <h2>{{ msg || "No props passed yet" }}</h2>
</template>

<script lang="ts" setup>
const props = defineProps({
  msg: String,
});
</script>
