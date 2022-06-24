<script lang="ts">
  export let disabled = false;
</script>

<div class="button" class:disabled>
  <slot />
</div>

<style lang="scss">
  .button {
    padding: 12px 32px;
    color: white;
    background: #218ce4;
    font-weight: bold;
    border-radius: 8px;

    &.disabled {
      background: #969696;
      color: var(--color-bg);
    }

    @media (max-width: 768px) {
      font-size: 0.9em;
      padding: 12px 24px;
    }
  }
</style>
