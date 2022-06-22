<script lang="ts">
  import githubImg from "../assets/icons/github.svg";
</script>

<nav class="navbar">
  <ul class="left">
    <li><a href="#/">Home</a></li>
    <li><a href="#projects">Projects</a></li>
  </ul>
  <ul class="right">
    <li><a href="#contact">Contact</a></li>
    <li>
      <a href="https://github.com/keesvv">
        <img src={githubImg} alt="GitHub" />
      </a>
    </li>
  </ul>
</nav>

<style lang="scss">
  .navbar,
  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
      gap: 10px;
    }
  }

  .navbar {
    padding: 45px 50px;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 30px 25px;
      justify-content: initial;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    padding: 10px;
  }

  img {
    margin-bottom: -5px;

    @media (prefers-color-scheme: dark) {
      filter: invert(100%);
    }
  }
</style>
