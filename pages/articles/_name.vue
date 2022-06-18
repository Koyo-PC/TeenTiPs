<template>
  <div>
    <Top/>
    <Title :data="titleData"/>
    <Profile :content="profileData"></Profile>
    <Toc :content="tocData"></Toc>
    <div v-html="content"></div>
  </div>
</template>

<script>
import {marked} from "marked";
import axios from "axios";
import Profile from "../../components/Profile";

export default {
  components: {Profile},
  data() {
    return {
      titleData: {},
      content: "",
      tocData: [],
      profileData: {}
    }
  },
  async mounted() {
    const pageData = eval((await axios.get(`/articles/${this.$route.params.name}.js`)).data)();
    console.log(pageData)
    this.titleData = pageData.title;
    this.profileData = pageData.profile;

    const mdContent = (await axios.get(`/articles/${this.$route.params.name}.md`)).data;

    const tocData = [];
    const renderer = new marked.Renderer();
    renderer.heading = function (text, level, raw, slugger) {
      const id = this.options.headerPrefix + slugger.slug(raw);

      if (level === 2) {
        tocData.push({text, id});
      }
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }
    marked.setOptions({ breaks: true })
    this.content = marked.parse(mdContent, {renderer: renderer});
    this.tocData = tocData;
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
