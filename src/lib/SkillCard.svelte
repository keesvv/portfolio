<script lang="ts">
  import type { Skill } from "./types";

  export let skill: Skill;
</script>

<div class="skillCard">
  <div class="left">
    <div class="icon">
      <img src={skill.icon[0]} alt={skill.icon[1]} width="35" />
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

    @media (max-width: 768px) {
      gap: 20px;
      flex-direction: column;
      text-align: center;
    }
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: #b4ddff;
    border-radius: 100%;

    @media (prefers-color-scheme: dark) {
      background-color: #71bfff;
    }
  }
</style>
