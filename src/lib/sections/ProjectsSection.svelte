<script lang="ts">
  import projectsImg from "../../assets/icons/projects.svg";
</script>

<section id="projects">
  <h1>Projects</h1>
  <h2>I'll list them here ASAP.</h2>
  <img src={projectsImg} alt="Projects icon" />
</section>

<style lang="scss">
  #projects {
    text-align: center;
  }

  img {
    margin-top: 15px;
    width: 24px;

    @media (prefers-color-scheme: dark) {
      filter: invert(100%);
    }
  }
</style>
