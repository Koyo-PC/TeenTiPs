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
      <h1>このサイトについて</h1>
      <h2>TeenTiPsとは?</h2>
      <p>多くの高校生(Teen世代)の『可能性』の幅を広げるため、全国の高校の生徒会長で運営するWeb記事媒体</p>
      <h2>運営メンバー</h2>
      <ul>
        <li v-for="member in members"><img :src="`/images/members/${member.sys_name}.webp`">{{ member.name }}</li>
      </ul>
      <h2>Webページ制作</h2>
      <ul>
        <li>南出　孝明</li>
        <li>川添　晴翔</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpening: false,
      members: [
        {name: "近藤　亘", sys_name: "kondo_wataru"},
        {name: "清水　崇源", sys_name: "shimizu"},
        {name: "東　　倫子", sys_name: "higashi"},
        {name: "城野　光喜", sys_name: "sirono"},
        {name: "髙島　咲弥花", sys_name: "takashima"},
        {name: "播磨　正樹", sys_name: "harima"},
        {name: "中村　礼", sys_name: "nakamura"},
        {name: "田畑　聡大", sys_name: "tabata"},
        {name: "増山　由紀子", sys_name: "masuyama"},
        {name: "近藤　亮介", sys_name: "kondo_ryousuke"},
        {name: "大山　颯斗", sys_name: "ooyama"},
        {name: "湯徳　翼", sys_name: "yutoku"},
        {name: "岡田　琉依", sys_name: "okada"},
        {name: "田口　壱星", sys_name: "taguti"},
        {name: "猪口　昴太", sys_name: "inokuti"}
      ]
    }
  }
  ,
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
  background-color: mediumblue;
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
  padding: 5vh 12vh;
  width: auto;
  height: auto;
  position: fixed;
  top: -100%;
  right: 0;
  bottom: 100%;
  left: 0;
  z-index: 99999;
  backdrop-filter: blur(0);
  transition-duration: 1s;
  overflow-x: scroll;
}

.nav_menu.opening {
  background-color: #eeec;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
}

.nav_menu > ul > li {
  display: flex;
  align-items: center;
}

.nav_menu > ul > li > img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
</style>
