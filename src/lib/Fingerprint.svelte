<script lang="ts">
  export let fprint: string;
  export let pubkeyUri: string;
</script>

<a href={pubkeyUri} class="fingerprint">
  <span>PGP fingerprint</span>
  <span class="fprint">{fprint}</span>
</a>

<style lang="scss">
  a {
    color: gray;
    display: inline-block;
    text-decoration: none;

    @media (prefers-color-scheme: dark) {
      color: #9b9b9b;
    }
  }

  span {
    display: block;
  }

  .fprint {
    font-family: "Fira Mono", monospace;
    font-size: 0.8em;
  }
</style>
