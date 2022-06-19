<script lang="ts">
  export let fprint: string;
  export let pubkeyUri: string;
</script>

<a href={pubkeyUri} class="fingerprint">
  <span>PGP fingerprint</span>
  <span>{fprint}</span>
</a>

<style lang="scss">
  .fingerprint {
    color: gray;
    display: inline-block;
    font-family: monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  span {
    display: block;
  }
</style>
