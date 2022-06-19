<template>
  <div class="bcpic">
    <Loading :loaded="loaded"></Loading>
    <Top/>
    <article>
      <Title :content="pageData.title || {}"/>
      <Profile :content="pageData"></Profile>
      <Toc :content="tocData"></Toc>
      <div v-html="content"></div>
    </article>
    <hr>
    <h2>Related Articles</h2>
    <div class="relative_articles">
      <ArticleCard v-for="page in pageData.relative" :pageName="page"></ArticleCard>
    </div>

    <Footer />
  </div>
</template>

<script>
import {marked} from "marked";
import axios from "axios";

export default {
  head() {
    // console.log(this.pageData.title.text);
    return {
      title: `${this.pageData.title?.text} - TeenTiPs`,
      meta: [
        {hid: 'description', name: 'description', content: this.pageData.title?.subtitle},
      ]
    }
  },
  data() {
    return {
      content: "loading...",
      tocData: [],
      pageData: {},
      loaded: false
    }
  },
  async beforeMount() {
    this.pageData = eval((await axios.get(`/articles/${this.$route.params.name}.js`)).data)();

    const mdContent = (await axios.get(`/articles/${this.$route.params.name}.md`)).data;

    const tocData = [];
    const renderer = new marked.Renderer();
    renderer.heading = function (text, level, raw, slugger) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      if (level === 3) {
        tocData.push({text, id});
      }
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }
    renderer.paragraph = function (text) {
      if (text.startsWith("──")) return `<p class="quest">${text}</p>\n`;
      else return `<p>${text}</p>\n`;
    }
    marked.setOptions({breaks: true})
    this.content = marked.parse(mdContent, {renderer: renderer});
    this.tocData = tocData;
    this.loaded = true;
  },
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
    right: 3px;
    bottom: 3px;
    z-index: -1;
  }

  article {
    margin: 80px auto 0;
    width: 85vw;
  }

img {
  width: 100%;
  object-fit: cover;
}

h3, .quest, p {
  display: block;
  width: 100%;
  margin: 10px auto;
}

h3 {
  font-size: 20px;
}

.quest {
  font-size: 15px;
  font-weight: 700;
}

p {
  margin: 30px auto;
  font-size: 14px;
  line-height: 32px;
}

blockquote {
  margin: 0;
}

.relative_articles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

h2 {
  display: block;
  margin: 0 auto;
  width: 90%;
}
</style>
