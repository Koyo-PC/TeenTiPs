<template>
  <div class="profile">
    <h2>{{ title }}</h2>
    <img alt="" :src="head"/>
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
      head: ""
    }
  },
  watch: {
    content(value) {
      console.log(value)
      this.title = value.title;
      this.text = value.content.replaceAll("\n", "<br>");
      this.head = value.head;
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
