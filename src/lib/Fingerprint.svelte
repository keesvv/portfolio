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
  }

  span {
    display: block;
  }

  .fprint {
    font-family: "Fira Mono", monospace;
    font-size: 0.8em;
  }
</style>
