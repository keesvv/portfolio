<script lang="ts">
  import type { Skill, Technology } from "./lib/types";

  import Lead from "./lib/Lead.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import Stack from "./lib/Stack.svelte";
  import SkillCard from "./lib/SkillCard.svelte";

  import goImg from "./assets/technologies/go.svg";
  import rustImg from "./assets/technologies/rust.svg";
  import tsImg from "./assets/technologies/typescript.svg";
  import svelteImg from "./assets/technologies/svelte.svg";
  import vueImg from "./assets/technologies/vue.svg";
  import tailwindImg from "./assets/technologies/tailwind.svg";

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

  const skills: Skill[] = [
    {
      caption: "I write software.",
      description: `
        My greatest passion is writing clean, concise and minimal
        software. I try to stick to the Unix philosophy as much as
        possible. I find operating systems and I/O to be very
        fascinating and wish to learn more about kernel
        development anytime soon.`,
      icon: "",
      iconAlt: "Terminal icon",
    },
    {
      caption: "I build full stack apps.",
      description: `
        I love working with single page web applications as well as
        monolithic backends and microservices. I've built large-scale
        SPAs in the past and learned more about this topic
        each time.`,
      icon: "",
      iconAlt: "Code icon",
    },
  ];
</script>

<Navbar />
<Lead />
<section class="stack">
  {#each stacks as stack, i}
    <Stack techs={stack} />

    {#if i < stacks.length - 1}
      <div class="separator" />
    {/if}
  {/each}
</section>
<section class="skills">
  <div class="skillCards">
    {#each skills as skill}
      <SkillCard {skill} />
    {/each}
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 60px;
  }

  .stack .separator {
    margin: 0 20px;
    height: 60px;
    border: 1px solid #e4e4e4;
  }

  .skills .skillCards {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 80px;
  }
</style>
