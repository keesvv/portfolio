<script lang="ts">
  import type { Skill } from "./types";

  export let skill: Skill;
</script>

<div class="skillCard">
  <div class="left">
    <div class="icon">
      <img
        src={skill.icon}
        alt={skill.iconAlt}
        title={skill.iconAlt}
        width="35"
      />
    </div>
  </div>
  <div class="right">
    <h1>{skill.caption}</h1>
    <h2>{skill.description}</h2>
  </div>
</div>

<style lang="scss">
  .skillCard {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #b4ddff;
    border-radius: 100%;
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 1.8em;
  }

  h2 {
    font-size: 1.3em;
    font-weight: normal;
  }
</style>
