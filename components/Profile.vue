<template>
  <div class="profile">
    <h2>{{ title }}</h2>
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
      text: ""
    }
  },
  watch: {
    content(value) {
      console.log(value)
      this.title = value.title;
      this.text = value.content.replaceAll("\n", "<br>");
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
</style>
