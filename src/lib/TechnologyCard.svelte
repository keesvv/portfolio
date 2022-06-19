<script lang="ts">
  export let name: string;
  export let img: string;
  export let imgWidth = 64;
</script>

<div class="technologyCard">
  <img src={img} title={name} alt={name} width={imgWidth} />
</div>

<style lang="scss">
  .technologyCard {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }
</style>
