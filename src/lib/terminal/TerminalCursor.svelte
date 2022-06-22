<script lang="ts">
  export let blink = true;
</script>

<div class="terminalCursor" class:blink />

<style lang="scss">
  .terminalCursor {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    background-color: var(--color-fg);

    @keyframes blink {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    &.blink {
      animation: blink 0.6s alternate infinite 0.3s;
    }
  }
</style>
