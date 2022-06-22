<template>
  <div class="profile">
    <h2>{{ content.name }}さんのプロフィール</h2>
    <img alt="" :src="content.photo"/>
    <p v-html="content.profile">
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["content"]
}
</script>

<style scoped>
  h2, p {
    display: block;
    width: 100%;
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
  img {
    max-width: 100%;
    max-height: 800px;
  }
</style>
