<script lang="ts">
  import type { Project } from "./types";
  import arrowRightImg from "../assets/icons/arrow-right.svg";

  export let project: Project;
</script>

<a target="_blank" href={project.url} class="projectCard">
  <div class="topSection">
    {#if project.logo}
      <div class="left">
        <div class="logoContainer">
          <img
            class="logo"
            src={project.logo[0]}
            alt={project.logo[1]}
          />
        </div>
      </div>
    {/if}
    <div class="right">
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
    </div>
  </div>
  <div class="bottomSection">
    <div class="technologies">
      {#each project.technologies as technology}
        <div class="technology">
          <img
            src={technology.img}
            alt={technology.name}
            width={technology.size ?? 24}
          />
        </div>
      {/each}
    </div>
    <img class="arrow" src={arrowRightImg} alt="Arrow right" />
  </div>
</a>

<style lang="scss">
  .projectCard,
  .topSection,
  .bottomSection,
  .technologies {
    display: flex;
  }

  .projectCard {
    color: inherit;
    text-decoration: none;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    min-height: 150px;
    max-width: 400px;
    padding: 20px;
    background-color: var(--color-bg-secondary);
    border-radius: 10px;
  }

  .topSection {
    gap: 15px;
  }

  .bottomSection {
    align-items: center;
    justify-content: space-between;
  }

  .technologies {
    gap: 5px;

    .technology {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .logoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 100%;
    width: 60px;
    height: 60px;

    .logo {
      width: 40px;
      height: 40px;
    }
  }

  h1 {
    font-size: 1.3em;

    @media (max-width: 768px) {
      font-size: 1.1em;
    }
  }

  h2 {
    font-size: 0.9em;
    line-height: 1.3em;
  }

  .arrow {
    @media (prefers-color-scheme: dark) {
      filter: invert(100%);
    }
  }
</style>
