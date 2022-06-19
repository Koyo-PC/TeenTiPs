<template>
  <img class="bc" src="/logo.png" alt="">
</template>

<script>
export default {
  name: "BackLogo"
}
</script>

<style scoped>
.bc {
  position: fixed;
  z-index: -1;
  top: 50%;
  transform: translate(0, -55%);
  filter: blur(.75vw) opacity(20%);
  width: 100%;
  object-fit: cover;
}
</style>
