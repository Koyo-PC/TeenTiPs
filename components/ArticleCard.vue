<template>
  <a class="article_card" :href="`/articles/${pageName}`">
    <img class="article_card_img" :alt="title" :src="thumbnail"/>
    <div class="article_card_content">
      <div class="sub">{{ subtitle }}</div>
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
      subtitle: "",
      name: ""
    }
  },
  async beforeMount() {
    console.log(this.pageName)
    const pageData = eval((await axios.get(`/articles/${this.pageName}.js`)).data)();
    this.thumbnail = pageData.thumbnail;
    this.title = pageData.title.text;
    this.subtitle = pageData.title.subtitle;
    this.name = pageData.name;
  }
}
</script>

<style scoped>
.article_card {
  display: block;
  width: 40%;
  /*height: 150px;*/
  margin: 8% auto 10%;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  position: relative;
  background-color: #eee;
}

.article_card_img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: calc(16 / 12);
  object-fit: cover;
}

.article_card_content {
  padding: 10px;
}

.sub {
  /*background-color: green;*/
  font-size: 15px;
}
</style>
