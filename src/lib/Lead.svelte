<script lang="ts">
  import me from "../assets/me.jpg";
  import Typer from "./Typer.svelte";
  import TerminalInput from "./terminal/TerminalInput.svelte";
</script>

<div class="lead">
  <div class="left">
    <h1>
      <TerminalInput>
        <Typer input="Hi there!" />
      </TerminalInput>
    </h1>
    <h2>My name is Kees.</h2>
  </div>
  <div class="right">
    <img src={me} alt="Me" />
  </div>
</div>

<style lang="scss">
  .lead {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    background-color: #f5f5f5;
    padding: 160px 60px;

    @media (max-width: 768px) {
      padding: 80px 60px;
      text-align: center;
      flex-direction: column-reverse;
    }
  }

  h1 {
    font-size: 3.5em;

    @media (max-width: 768px) {
      font-size: 2.8em;
    }
  }

  h2 {
    font-size: 2em;
    font-weight: normal;

    @media (max-width: 768px) {
      font-size: 1.3em;
    }
  }

  img {
    width: 175px;
    border-radius: 100%;
  }
</style>
