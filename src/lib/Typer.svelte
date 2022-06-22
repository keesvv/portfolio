<script lang="ts">
  import type { TypingContext } from "./types";
  import { getContext, onMount } from "svelte";

  export let input: string;
  export let rate = 100;
  export let ctx: symbol = null;

  let buf = "";

  const typing = getContext<TypingContext>(ctx);

  function typeString(str: string) {
    typing?.set(true);

    [...str].forEach((char, i) =>
      setTimeout(() => (buf += char), i * rate)
    );

    setTimeout(() => typing?.set(false), (str.length - 1) * rate);
  }

  onMount(() => typeString(input));
</script>

<span class="typer">{buf}</span>

<style lang="scss">
  .typer {
    white-space: pre;
  }
</style>
