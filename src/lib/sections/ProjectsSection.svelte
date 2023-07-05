<script lang="ts">
  import type { Project, Technology } from "../types";
  import { Go, NestJS, TypeScript, Vue } from "../technologies";
  import ProjectCard from "../ProjectCard.svelte";
  import Button from "../Button.svelte";

  import tribecampImg from "../../assets/projects/tribecamp.svg";
  import boltImg from "../../assets/projects/bolt.svg";

  const GoResized: Technology = { ...Go, size: 35 };

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
      technologies: [GoResized],
      logo: [boltImg, "Bolt"],
    },
    {
      name: "webnix",
      description: `
        My attempt at mimicking the behaviour of *nix-like
        operating systems in the browser. It (partially) embodies
        I/O, filesystems, user management and a couple of programs.`,
      url: "https://github.com/keesvv/webnix",
      technologies: [TypeScript],
    },
    {
      name: "svm",
      description: `
        A much needed service manager CLI for the runit service management
        scheme.`,
      url: "https://github.com/keesvv/svm",
      technologies: [GoResized],
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
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://github.com/keesvv?tab=repositories"
    >
      <Button>View more on GitHub</Button>
    </a>
  </div>
</section>

<style lang="scss">
  #projects {
    text-align: center;
  }

  .projects {
    max-width: 1000px;
    margin: 20px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    text-align: initial;

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
