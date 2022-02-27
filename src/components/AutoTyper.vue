<template>
  <div class="autotyper font-mono">
    <span>{{ buf }}</span>
    <span>&#9608;</span>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, PropType } from "vue";

const { strings } = defineProps({
  strings: { type: Array as PropType<string[]>, required: true },
});

const buf = ref("");

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

const type = async (str: string) => {
  for (const char of str) {
    buf.value += char;
    await sleep(Math.floor(Math.random() * 30 + 20));
  }
};

const reset = () => {
  buf.value = "";
};

onMounted(async () => {
  while (true) {
    for (const str of strings) {
      await sleep(250);
      type(str);

      await sleep(2000);
      reset();
    }
  }
});
</script>
