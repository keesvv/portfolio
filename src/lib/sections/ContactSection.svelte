<script>
  import Fingerprint from "../Fingerprint.svelte";
  import Button from "../Button.svelte";
</script>

<section id="contact">
  <h1>Interested?</h1>
  <h2>Shoot me an email.</h2>
  <a href="mailto:contactme@keesvv.nl">
    <Button>Contact me</Button>
  </a>
  <div class="fingerprint">
    <Fingerprint
      fprint="131E 12C7 087E 5767 43CB 6C26 EAF3 F4D4 EE63 05A9"
      pubkeyUri="https://github.com/keesvv.gpg"
    />
  </div>
</section>

<style lang="scss">
  #contact {
    text-align: center;
  }

  a {
    display: inline-block;
    margin: 25px 0;
    text-decoration: none;
  }
</style>
