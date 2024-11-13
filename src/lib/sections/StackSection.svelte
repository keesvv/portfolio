<script lang="ts">
  import type { Technology } from "../types";
  import {
    Rust,
    Go,
    Python,
    Svelte,
    Tailwind,
    TypeScript,
  } from "../technologies";
  import TechnologyCard from "../TechnologyCard.svelte";

  const stacks: Technology[][] = [
    [
      { ...Rust, size: 80 },
      { ...Go, size: 100 },
      { ...Python, size: 80 },
    ],
    [TypeScript, Svelte, Tailwind],
  ];
</script>

<section id="stack">
  {#each stacks as stack, i}
    <div class="stackItems">
      {#each stack as tech}
        <TechnologyCard {tech} />
      {/each}
    </div>

    {#if i < stacks.length - 1}
      <div class="separator" />
    {/if}
  {/each}
</section>

<style lang="scss">
  #stack {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .stackItems {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  #stack,
  .stackItems {
    @media (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .separator {
    margin: 0 10px;
    height: 60px;
    border: 1px solid var(--color-bg-secondary);

    @media (max-width: 768px) {
      display: none;
    }
  }
</style>
