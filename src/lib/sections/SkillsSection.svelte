<script lang="ts">
  import type { Skill } from "../types";

  import SkillCard from "../SkillCard.svelte";

  import terminalImg from "../../assets/icons/terminal.svg";
  import codeImg from "../../assets/icons/code.svg";

  const skills: Skill[] = [
    {
      caption: "I write software.",
      description: `
        My greatest passion is writing clean, concise and minimal
        software. I try to stick to the Unix philosophy as much as
        possible. I find operating systems and I/O to be very
        fascinating and wish to learn more about kernel
        development anytime soon.`,
      icon: [terminalImg, "Terminal icon"],
    },
    {
      caption: "I build full stack apps.",
      description: `
        I love working with single page web applications as well as
        monolithic backends and microservices. I've built large-scale
        SPAs in the past and learned more about this topic
        each time.`,
      icon: [codeImg, "Code icon"],
    },
  ];
</script>

<section id="skills">
  <div class="skillCards">
    {#each skills as skill}
      <SkillCard {skill} />
    {/each}
  </div>
</section>

<style lang="scss">
  .skillCards {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: 660px;
    gap: 80px;

    @media (max-width: 768px) {
      gap: 50px;
      padding: 0 5%;
    }
  }
</style>
