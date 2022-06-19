<script lang="ts">
  import Lead from "./lib/Lead.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Stack from "./lib/Stack.svelte";

  import goImg from "./assets/technologies/go.svg";
  import rustImg from "./assets/technologies/rust.svg";
  import tsImg from "./assets/technologies/typescript.svg";
  import svelteImg from "./assets/technologies/svelte.svg";
  import vueImg from "./assets/technologies/vue.svg";
  import tailwindImg from "./assets/technologies/tailwind.svg";
</script>

<Navbar />
<Lead />
<section class="stack">
  <Stack
    techs={[
      { name: "Go", img: goImg, size: 100 },
      { name: "Rust", img: rustImg, size: 80 },
    ]}
  />
  <div class="separator" />
  <Stack
    techs={[
      { name: "TypeScript", img: tsImg },
      { name: "Svelte", img: svelteImg },
      { name: "Vue", img: vueImg },
      { name: "Tailwind", img: tailwindImg },
    ]}
  />
</section>

<style lang="scss">
  .stack {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 60px;

    .separator {
      margin: 0 20px;
      height: 60px;
      border: 1px solid #e4e4e4;
    }
  }
</style>
