<template>
  <div class="autotyper font-mono">
    <span>{{ visible }}</span>
    <span class="ml-1">&#9608;</span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const { text } = defineProps({
  text: { type: String, required: true },
});

const visible = ref("");

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

onMounted(async () => {
  for (const char of text) {
    visible.value += char;
    await sleep(Math.floor(Math.random() * 30 + 20));
  }
});

// const items = [
//   "I write software.",
//   "I make websites.",
//   "I build scalable backends.",
// ];
</script>
