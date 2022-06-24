<script lang="ts">
  import type { Project } from "../types";
  import { Go, NestJS, TypeScript, Vue } from "../technologies";
  import ProjectCard from "../ProjectCard.svelte";

  import tribecampImg from "../../assets/projects/tribecamp.svg";
  import boltImg from "../../assets/projects/bolt.svg";

  const projects: Project[] = [
    {
      name: "Tribecamp",
      description: `
        What was formerly known as a social network for
        International Baccalaureate students eventually
        became a Dutch LVS (student tracking system) and
        my greatest project yet.`,
      url: "https://github.com/tribecamp",
      technologies: [TypeScript, NestJS, Vue],
      logo: [tribecampImg, "Tribecamp"],
    },
    {
      name: "Bolt",
      description: `
        A fast, lightweight, and secure chat protocol, client
        and server, written in Go.`,
      url: "https://github.com/boltchat",
      technologies: [{ ...Go, size: 35 }],
      logo: [boltImg, "Bolt"],
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
    gap: 10px;
    text-align: initial;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>
