<template>
  <nav>
    <a href="/">
      <img src="/logo.png" alt="トップページへ">
    </a>
    <button class="nav_menu_button" @click="menuOpen()">
      <fa :icon="['fas', 'bars']"/>
    </button>
    <div :class="menuOpening ? ['nav_menu','opening'] : ['nav_menu']">
      <button class="nav_menu_button" @click="menuClose()">
        <fa :icon="['fas', 'xmark']"/>
      </button>
      <ul>
        <li><a href="/">トップページ</a></li>
        <li><a href="/about">★ TeenTiPsとは?</a></li>
        <li><span>★ 記事一覧</span></li>
        <li>
          <ul>
            <li v-for="article in articles"><a :href="`/articles/${article.sys_name}`">{{ article.name }}</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div :class="menuOpening ? ['nav_menu_bg','opening'] : ['nav_menu_bg']" @click="menuClose()"></div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      menuOpening: false,
      articles: [],
    }
  },
  async beforeMount() {
    this.articles = await Promise.all((await axios.get(`/data/pages.json`)).data.map(async name => eval((await axios.get(`/articles/${name}.js`)).data)()));
  },
  methods: {
    menuOpen() {
      this.menuOpening = true;
    }
    ,
    menuClose() {
      this.menuOpening = false;
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 12vh;
  position: relative;
  background-color: rgb(221, 238, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

img {
  height: 7vh;
  object-fit: contain;
}

.nav_menu_button {
  width: 10vh;
  height: 10vh;
  position: absolute;
  top: 1vh;
  left: 1vh;
  font-size: 4vh;
  background-color: transparent;
  border: none;
}

.nav_menu {
  padding: 5vh 8vh;
  width: auto;
  height: auto;
  position: fixed;
  top: 0;
  right: 100%;
  bottom: 0;
  left: -400px;
  z-index: 99999;
  backdrop-filter: blur(0);
  transition-duration: .5s;
  overflow-x: scroll;
}

.nav_menu.opening {
  background-color: #eeec;
  right: calc(100% - 400px);
  left: 0;
  backdrop-filter: blur(5px);
}

.nav_menu > ul > li {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 40px;
}

.nav_menu > ul > li > * {
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.nav_menu > ul > li > a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #666666;
  background-color: transparent;
  transition-duration: .1s;
  padding: 20px;
}

.nav_menu > ul > li > a:hover {
  background-color: #aaa8;
}

.nav_menu > ul > li > ul {
  list-style: none;
  padding: 0 0 0 50px;
}

.nav_menu > ul > li > ul > li {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;
}

.nav_menu > ul > li > ul > li > * {
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
}

.nav_menu > ul > li > ul > li > a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #666666;
  background-color: transparent;
  transition-duration: .1s;
  padding: 20px;
}

.nav_menu > ul > li > ul > li > a:hover {
  background-color: #aaa8;
}

.nav_menu_bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #6668;
  z-index: -10;
  opacity: 0;
  transition-duration: .5s;
}

.nav_menu_bg.opening {
  opacity: 100%;
  z-index: 9999;
}

</style>
