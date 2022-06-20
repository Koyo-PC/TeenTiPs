<template>
  <div class="container">
    <Loading :loaded="loaded"></Loading>
    <Top></Top>
    <div class="must_read">
      <h2 class="must_read_title">MUST READ</h2>
      <div class="must_read_text"><span>今私たちが<br>10代のあなたたちに<br>伝えたい事</span></div>
      <a class="article_box" v-for="article in articles" :href="`/articles/${article.sys_name}`"
         :style="{backgroundColor: article.color}">
          <img class="article_box_photo" :src="`/images/${article.sys_name}/thumbnail.webp`" :alt="article.title.text">
      </a>
    </div>
    <Footer style="margin: 0;"></Footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer";

export default {
  components: {Footer},
  data() {
    return {
      articles: [],
      loaded: false
    }
  },
  async beforeMount() {
    this.articles = await Promise.all((await axios.get(`/data/pages.json`)).data.map(async name => eval((await axios.get(`/articles/${name}.js`)).data)()));
    this.loaded = true;
  },
}
</script>

<style scoped>
.container {
  background-color: rgba(255, 255, 255, .85);
  background-blend-mode: lighten;
}

.must_read {
}

.must_read_title {
  font-size: 8vmin;
  font-weight: 900;
  color: rgb(255, 157, 148);
  background-color: rgb(255, 255, 255);
  text-align: center;
}

.must_read_text {
  display: flex;
  width: 100%;
  height: 50vmin;
  position: relative;
  font-size: 6vmin;
  font-weight: 900;
  letter-spacing: 1vmin;
  color: white;
  background-color: rgb(255, 157, 148);
  text-align: center;
  justify-content: center;
  align-items: center;
}

.must_read_text:after {
  /*content: url('data:image/svg+xml;charset=utf8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M100%200%20L0%2050%20L100%20100%20Z%22%20style%3D%22fill%3Agreen%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E');*/
  --arrow-size: 50px;
  content: "";
  width: var(--arrow-size);
  height: var(--arrow-size);
  border-color: rgb(255, 157, 148) transparent transparent;
  border-width: calc(var(--arrow-size) / 2);
  border-style: solid;
  position: absolute;
  bottom: calc(-1 * var(--arrow-size));
}

.article_box {
  display: flex;
  /*min-height: 200px;*/
  padding: 0;
  text-decoration: none;
  color: #666;
  position: relative;
}
.article_box:after {
  content: "TAP HERE >>";
  position: absolute;
  bottom: 5%;
  right: 20px;
  font-weight: 700;
  font-size: 2vw;
  text-shadow: #fff 0 0 .5vw;
}

.article_box_photo {
  position: relative;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
}

.article_box_content_subtitle:before, .article_box_content_subtitle:after {
  content: "〜";
}
</style>
