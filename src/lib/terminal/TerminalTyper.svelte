<script lang="ts">
  import { onMount } from "svelte";

  export let input: string;
  export let rate = 100;

  let buf = "";

  function typeString(str: string) {
    [...str].forEach((char, i) =>
      setTimeout(() => (buf += char), i * rate)
    );
  }

  onMount(() => typeString(input));
</script>

<span class="terminalTyper">{buf}</span>

<style lang="scss">
  .terminalTyper {
    white-space: pre;
  }
</style>
