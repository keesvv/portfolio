<script lang="ts">
  import type { Project } from "../types";
  import { Go, NestJS, TypeScript, Vue } from "../technologies";
  import ProjectCard from "../ProjectCard.svelte";
  import Button from "../Button.svelte";

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
        As one of my first Go projects, Bolt is a chat protocol
        with client and server reference implementations. It has
        support for PGP signing.`,
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
  <div class="links">
    <a href="https://github.com/keesvv?tab=repositories">
      <Button>View more on GitHub</Button>
    </a>
    <Button disabled>Archive browser (WIP)</Button>
  </div>
</section>

<style lang="scss">
  #projects {
    text-align: center;
  }

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: initial;
    margin-top: 20px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;

    a {
      text-decoration: none;
    }
  }
</style>
