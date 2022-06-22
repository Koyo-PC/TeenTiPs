<template>
  <a class="article_card" :href="`/articles/${name}`">
    <img class="article_card_img" :alt="page.title" :src="`/images/${name}/thumbnail.webp`"/>
    <div class="article_card_content">
      <span class="name">{{ page.name }}</span>
      <span class="sub"><span>{{ page.subtitle }}</span></span>
    </div>
  </a>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleCard",
  props: ["name", "page"],
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
