<script lang="ts">
  import TechnologyCard from "./TechnologyCard.svelte";

  export let technologies: [string, string, number?][];
</script>

<div class="stack">
  {#each technologies as [name, img, imgWidth]}
    <TechnologyCard {name} {img} {imgWidth} />
  {/each}
</div>

<style lang="scss">
  .stack {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
