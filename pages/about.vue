<template>
  <div>
    <BackLogo></BackLogo>
    <Loading :loaded="loaded"></Loading>
    <Top></Top>
    <div class="container">
      <h1>このサイトについて</h1>
      <h2>TeenTiPsとは?</h2>
      <p>多くの高校生(Teen世代)の『可能性』の幅を広げるため、全国の高校の生徒会長で運営するWeb記事媒体</p>
      <h2>運営メンバー</h2>
      <ul class="members">
        <li v-for="member in members"><img :src="`/images/members/${member.sys_name}.webp`">{{ member.name }}</li>
      </ul>
      <h2>Webページ制作</h2>
      <ul class="members">
        <li v-for="programmer in programmers"><img :src="`/images/members/${programmer.sys_name}.webp`">{{ programmer.name }}</li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>

export default {
  data() {
    return {
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
      ],
      programmers: [
        {name: "南出　孝明", sys_name: "minamide"},
        {name: "川添　晴翔", sys_name: "kawazoi"},
      ],
      loaded: false
    }
  },
  mounted() {
    this.loaded = true;
  },
}
</script>

<style scoped>
.container {
  margin: 20px 5%;
  width: 90%;
}

.members {
  list-style: none;
}

.members > li {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
}

.members > li > img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

</style>
