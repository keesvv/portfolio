<script lang="ts">
  import { getContext } from "svelte";
  import type { TypingContext } from "../types";
  import TerminalCursor from "./TerminalCursor.svelte";

  export let ctx: symbol = null;
  const typing = getContext<TypingContext>(ctx);
</script>

<span class="terminalInput">
  <slot />
  <TerminalCursor />
</span>

<style lang="scss">
  .terminalInput {
    display: flex;
    align-items: center;
    gap: 2px;
  }
</style>
