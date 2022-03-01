<template>
  <div class="contact-container">
    <a
      href="mailto:contact@keesvv.nl"
      class="contact-button bg-blue-500 text-white text-sm font-bold py-2.5 px-3.5 rounded-md"
    >
      Contact me
    </a>
  </div>
</template>

<script lang="ts" setup>
const { cta } = defineProps({
  cta: { type: Boolean },
});
</script>
