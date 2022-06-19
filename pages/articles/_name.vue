<template>
  <div>

    <img class="bc" src="/logo.png" alt="">

    <Loading :loaded="loaded"></Loading>
    <Top/>
    <article>
      <Title :content="pageData.title || {}"/>
      <Profile :content="pageData"></Profile>
      <Toc :content="tocData"></Toc>
      <div v-html="content"></div>
    </article>
    <hr>
    <h2 style="color: rgb(255, 157, 148);">Other Articles</h2>
    <div class="other_articles">
      <ArticleCard v-for="page in articles" v-if="page !== pageData.sys_name" :pageName="page"></ArticleCard>
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
    const pageInfo = {
      name: `${this.pageData.title?.text} - TeenTiPs`,
      description: this.pageData.title?.subtitle
    }
    return {
      title: pageInfo.name,
      meta: [
        {hid: 'og:title', property: 'og:title', content: pageInfo.name},
        {hid: 'description', name: 'description', content: pageInfo.description},
      ]
    }
  },
  data() {
    return {
      content: "loading...",
      tocData: [],
      pageData: {},
      articles: {},
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
    this.articles = (await axios.get(`/data/pages.json`)).data;
    this.loaded = true;
  },
}
</script>

<style>

.bc {
  position: fixed;
  z-index: -1;
  top: 50%;
  transform: translate(0, -55%);
  filter: blur(.75vw) opacity(20%);
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

.other_articles {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
}

h2 {
  display: block;
  margin: 0 auto;
  width: 90%;
  /*color: rgb(255, 157, 148);*/
}
</style>
