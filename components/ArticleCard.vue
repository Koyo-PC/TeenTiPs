<template>
  <a class="article_card" :href="`/articles/${pageName}`">
    <img class="article_card_img" :alt="title" :src="thumbnail"/>
    <div class="article_card_content">
      {{ subtitle }}
    </div>
  </a>
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
  display: block;
  width: 40%;
  height: 150px;
  margin: 8% auto 10%;
}

.article_card_img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: calc(16 / 9);
  background-color: aqua;
  object-fit: cover;
}

.article_card_content {
  padding: 10px;
}
</style>
