<template>
  <div class="jumbotron flex justify-between items-center bg-gray-100 p-24">
    <div class="left">
      <h1 class="text-3xl mb-2">Hi there 👋</h1>
      <h2 class="text-5xl font-bold mb-4">My name is Kees</h2>
      <!-- <h3>Feel free to <a href="mailto:contact@keesvv.nl">contact me</a>.</h3> -->
      <!-- <Socials /> -->
      <AutoTyper
        class="text-md mb-6"
        :strings="[
          'I write software.',
          'I make websites.',
          'I build scalable backends.',
        ]"
      />
      <ActionButton caption="Contact me" />
    </div>
    <div class="right">
      <img class="w-52 mb-6 rounded-full" src="../assets/me.jpg" alt="Me" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AutoTyper from "./AutoTyper.vue";
import ActionButton from "./ActionButton.vue";
</script>
