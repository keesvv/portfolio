<script lang="ts">
  import type { Project } from "../types";
  import ProjectCard from "../ProjectCard.svelte";

  import tsImg from "../../assets/technologies/typescript.svg";
  import nestImg from "../../assets/technologies/nestjs.svg";
  import vueImg from "../../assets/technologies/vue.svg";

  import tribecampImg from "../../assets/projects/tribecamp.svg";

  const projects: Project[] = [
    {
      name: "Tribecamp",
      description: `
        What was formerly known as a social network for
        International Baccalaureate students eventually
        became a Dutch LVS (student tracking system) and
        my greatest project yet.`,
      url: "https://github.com/tribecamp",
      technologies: [
        { name: "TypeScript", img: tsImg },
        { name: "NestJS", img: nestImg },
        { name: "Vue", img: vueImg },
      ],
      logo: [tribecampImg, "Tribecamp"],
    },
  ];
</script>

<section id="projects">
  <h1>Projects</h1>
  <h2>Featured projects of mine.</h2>
  <div class="projects">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<style lang="scss">
  #projects {
    text-align: center;
  }

  .projects {
    display: flex;
    justify-content: center;
    text-align: initial;
    margin-top: 20px;
  }
</style>
