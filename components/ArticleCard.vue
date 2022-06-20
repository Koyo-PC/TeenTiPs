<template>
  <a class="article_card" :href="`/articles/${pageName}`">
    <img class="article_card_img" :alt="title" :src="`/images/${sys_name}/thumbnail.webp`"/>
    <div class="article_card_content">
      <span class="name">{{ name }}</span>
      <span class="sub"><span>{{ subtitle }}</span></span>
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
      title: "",
      subtitle: "",
      name: "",
      sys_name: ""
    }
  },
  async beforeMount() {
    console.log(this.pageName)
    const pageData = eval((await axios.get(`/articles/${this.pageName}.js`)).data)();
    this.title = pageData.title.text;
    this.subtitle = pageData.title.subtitle;
    this.name = pageData.name;
    this.sys_name = pageData.sys_name;
  }
}
</script>

<style scoped>
.article_card {
  display: block;
  width: 40%;
  /*height: 150px;*/
  margin: 4% auto 10%;
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
  object-fit: cover;
}

.article_card_content {
  padding: 10px;
  text-align: center;
}

.name {
  display: block;
  width: 100%;
  font-size: 20px;
  text-align: center;
}

.sub {
  display: inline-flex;
  margin: 0 auto;
  font-size: 12px;
  justify-content: space-around;
  align-items: center;
  flex-grow: 0;
}

.sub:before, .sub:after {
  content: "──";
  flex-grow: 0;
}
</style>
