<script lang="ts">
  import me from "../assets/me.jpg";
</script>

<div class="lead">
  <div class="left">
    <h1>Hi there!</h1>
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
    align-items: center;
    background-color: #f5f5f5;
    padding: 160px 60px;
  }

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-size: 3.5em;
  }

  h2 {
    font-size: 2em;
    font-weight: normal;
  }

  img {
    width: 175px;
    border-radius: 100%;
  }
</style>
