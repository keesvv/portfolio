<script lang="ts">
  import TechnologyCard from "./TechnologyCard.svelte";
  import type { Technology } from "./types";

  export let techs: Technology[];
</script>

<div class="stack">
  {#each techs as tech}
    <TechnologyCard {tech} />
  {/each}
</div>

<style lang="scss">
  .stack {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
