<template>
  <div>
    <Top/>
    <article>
      <Title :data="pageData.title || {}"/>
      <Profile :content="pageData.profile || {}"></Profile>
      <Toc :content="tocData"></Toc>
      <div v-html="content"></div>
    </article>
    <hr>
    <h1>関連する記事</h1>
    <div class="relative_articles">
      <ArticleCard v-for="page in pageData.relative" :pageName="page"></ArticleCard>
    </div>
  </div>
</template>

<script>
import {marked} from "marked";
import axios from "axios";

export default {
  data() {
    return {
      content: "loading...",
      tocData: [],
      pageData: {}
    }
  },
  async beforeMount() {
    this.pageData = eval((await axios.get(`/articles/${this.$route.params.name}.js`)).data)();

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
    marked.setOptions({breaks: true})
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

.relative_articles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
