<template>
  <div>
    <Top/>
    <Title :data="titleData"/>
    <div v-html="content"></div>
  </div>
</template>

<script>
import {marked} from "marked";
import axios from "axios";

export default {
  data() {
    return {
      titleData: {},
      content: ""
    }
  },
  async mounted() {
    const jsonData = (await axios.get(`/articles/${this.$route.params.name}.json`)).data;
    this.titleData = jsonData.title;
    const mdContent = (await axios.get(`/articles/${this.$route.params.name}.md`)).data;
    const htmlContent = marked.parse(mdContent)
    this.content = htmlContent;
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: unset;
}
</style>
