<template>
  <div class="profile">
    <h2>{{ content.title }}</h2>
    <p v-html="content.content">
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["content"],
}
</script>

<style scoped>
  h2, p {
    display: block;
    width: 90vw;
    margin: 10px auto;
  }
  h2 {
    font-size: 23px;
  }
  p {
    margin: 30px auto;
    font-size: 15px;
    line-height: 35px;
  }
</style>
