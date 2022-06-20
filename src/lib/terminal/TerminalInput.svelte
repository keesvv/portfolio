<script lang="ts">
  import TerminalCursor from "./TerminalCursor.svelte";
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
