<template>
  <button
    class="action-button bg-blue-500 text-white text-sm font-bold py-2.5 px-3.5 rounded-md"
  >
    {{ caption }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { caption } = defineProps({
  caption: { type: String, required: true },
});
</script>
