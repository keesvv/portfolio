<template>
  <div
    class="jumbotron flex justify-between items-center bg-gray-100 px-base py-32"
  >
    <div class="left">
      <h1 class="text-3xl mb-2">Hi there 👋</h1>
      <h2 class="text-5xl font-bold mb-4">My name is Kees</h2>
      <!-- <h3>Feel free to <a href="mailto:contact@keesvv.nl">contact me</a>.</h3> -->
      <!-- <Socials /> -->
      <AutoTyper
        class="text-md mb-8"
        :strings="[
          'I write software.',
          'I make websites.',
          'I build scalable backends.',
          'I love FOSS and Linux.',
          'I like learning new things.',
        ]"
      />
      <ContactButton caption="Contact me" />
    </div>
    <div class="right">
      <img class="w-52 rounded-full" src="../assets/me.jpg" alt="Me" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AutoTyper from "./AutoTyper.vue";
import ContactButton from "./ContactButton.vue";
</script>
