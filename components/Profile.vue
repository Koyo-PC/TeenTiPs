<template>
  <div class="profile">
    <h2>{{ name }}さんのプロフィール</h2>
    <img alt="" :src="photo"/>
    <p v-html="text">
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["content"],
  data() {
    return {
      title: "",
      text: "",
      photo: ""
    }
  },
  watch: {
    content(value) {
      console.log(value)
      this.name = value.name;
      this.text = value.profile.content.replaceAll("\n", "<br>");
      this.photo = value.profile.photo;
    }
  }
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
  img {
    max-width: 100%;
    max-height: 500px;
  }
</style>
