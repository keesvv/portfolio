<script lang="ts">
  import type { Technology } from "./types";

  export let tech: Technology;
</script>

<div class="technologyCard">
  <img
    src={tech.img}
    title={tech.name}
    alt={tech.name}
    width={tech.size || 64}
  />
</div>

<style lang="scss">
  .technologyCard {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
</style>
