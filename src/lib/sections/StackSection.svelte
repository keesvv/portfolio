<script lang="ts">
  import type { Technology } from "../types";

  import Stack from "../Stack.svelte";

  import goImg from "../../assets/technologies/go.svg";
  import rustImg from "../../assets/technologies/rust.svg";
  import tsImg from "../../assets/technologies/typescript.svg";
  import svelteImg from "../../assets/technologies/svelte.svg";
  import vueImg from "../../assets/technologies/vue.svg";
  import tailwindImg from "../../assets/technologies/tailwind.svg";

  const stacks: Technology[][] = [
    [
      { name: "Go", img: goImg, size: 100 },
      { name: "Rust", img: rustImg, size: 80 },
    ],
    [
      { name: "TypeScript", img: tsImg },
      { name: "Svelte", img: svelteImg },
      { name: "Vue", img: vueImg },
      { name: "Tailwind", img: tailwindImg },
    ],
  ];
</script>

<section class="stack">
  {#each stacks as stack, i}
    <Stack techs={stack} />

    {#if i < stacks.length - 1}
      <div class="separator" />
    {/if}
  {/each}
</section>

<style lang="scss">
  .stack {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .separator {
    margin: 0 20px;
    height: 60px;
    border: 1px solid #e4e4e4;
  }
</style>
