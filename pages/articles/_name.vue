<template>
  <div>
    <Top/>
    <Title :data="titleData"/>
    <Toc :data="tocList"></Toc>
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
      content: "",
      tocList: []
    }
  },
  async mounted() {
    const jsonData = (await axios.get(`/articles/${this.$route.params.name}.json`)).data;
    this.titleData = jsonData.title;

    const mdContent = (await axios.get(`/articles/${this.$route.params.name}.md`)).data;

    const tocList = [];
    const renderer = new marked.Renderer();
    renderer.heading = function (text, level, raw, slugger) {
      const id = this.options.headerPrefix + slugger.slug(raw);

      if (level === 2) {
        tocList.push({text, id});
      }
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }
    this.content = marked.parse(mdContent, {renderer: renderer});
    this.tocList = tocList;
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
