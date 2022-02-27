<template>
  <nav class="navbar flex items-center justify-between px-8 sm:px-base py-7">
    <ul class="flex space-x-6">
      <li><a href="#">Home</a></li>
      <li><a href="#projects">Projects</a></li>
    </ul>
    <ul class="flex space-x-6">
      <li>
        <ContactButton />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import ContactButton from "./ContactButton.vue";
</script>
