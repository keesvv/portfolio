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

<span class="typer">{buf}</span>

<style lang="scss">
  .typer {
    white-space: pre;
  }
</style>
