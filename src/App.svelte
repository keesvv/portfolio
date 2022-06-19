<script lang="ts">
  import Lead from "./lib/Lead.svelte";
  import Navbar from "./lib/Navbar.svelte";

  import StackSection from "./lib/sections/StackSection.svelte";
  import SkillsSection from "./lib/sections/SkillsSection.svelte";
  import ContactSection from "./lib/sections/ContactSection.svelte";
</script>

<Navbar />
<Lead />
<div class="sections">
  <StackSection />
  <SkillsSection />
  <ContactSection />
</div>

<style lang="scss">
  .sections {
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding: 50px 60px;
  }
</style>
