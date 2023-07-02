<template>
  <ChildComp @response="(msg) => (childMsg = msg)" />
  <p>{{ childMsg }}</p>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ChildComp from "./EventChildComp.vue";

const childMsg = ref("No child msg yet");
</script>
