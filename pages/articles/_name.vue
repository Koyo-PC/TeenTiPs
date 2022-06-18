<template>
  <div class="bcpic">
    <Top/>
    <article>
      <Title :data="pageData.title || {}"/>
      <Profile :content="pageData.profile || {}"></Profile>
      <Toc :content="tocData"></Toc>
      <div v-html="content"></div>
    </article>
    <hr>
    <!-- <h1>関連する記事</h1>
    <div class="relative_articles">
      <ArticleCard v-for="page in pageData.relative" :pageName="page"></ArticleCard>
    </div> -->
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
  .bcpic {
    background-image: url(/logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: rgba(255, 255, 255, .85);
    background-blend-mode: lighten;
    position: relative;
    z-index: 0;
  }
  .bcpic:before {
    content: "";
    background-color: rgba(255, 255, 255, .85);
    background-blend-mode: lighten;
    background: inherit;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  h2, .quest, p {
    display: block;
    width: 90%;
    margin: 10px auto;
  }
  h2 {
    font-size: 23px;
  }
  .quest {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    margin: 30px auto;
    font-size: 15px;
    line-height: 35px;
  }
  blockquote {
    margin: 0;
  }

.relative_articles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
