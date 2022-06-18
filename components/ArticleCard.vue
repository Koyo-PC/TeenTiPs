<template>
  <div class="article_card">
    <img class="article_card_img" :alt="title" :src="thumbnail"/>
    <div class="article_card_content">
      {{ subtitle }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleCard",
  props: ["pageName"],
  data() {
    return {
      thumbnail: "",
      title: "",
      subtitle: ""
    }
  },
  async beforeMount() {
    console.log(this.pageName)
    const pageData = eval((await axios.get(`/articles/${this.pageName}.js`)).data)();
    this.thumbnail = pageData.thumbnail;
    this.title = pageData.title.text;
    this.subtitle = pageData.title.sub;
  }
}
</script>

<style scoped>
.article_card {
  width: 200px;
  height: 200px;
  margin: 20px calc((100% - 200px * 3) / 6);
  background-color: rebeccapurple;
}

.article_card_img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: calc(16 / 9);
  background-color: aqua;
}

.article_card_content {
  padding: 10px;
}
</style>
