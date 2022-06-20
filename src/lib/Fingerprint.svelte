<script lang="ts">
  export let fprint: string;
  export let pubkeyUri: string;
</script>

<a href={pubkeyUri} class="fingerprint">
  <span>PGP fingerprint</span>
  <span>{fprint}</span>
</a>

<style lang="scss">
  a {
    color: gray;
    display: inline-block;
    font-family: "Fira Mono", monospace;
    text-decoration: none;
  }

  span {
    display: block;
  }
</style>
