<template>
  <div style="width: 80%;">
    <!-- <h2>【Girl in STEM】理系分野での女性の可能性を広げるために。宇宙飛行士・山崎直子さんと考える進路のエンパワメント</h2> -->
    <h2>{{ content.text }}</h2>
    <!-- <span>宇宙に興味がある女の子は多くても、キャリアや進路で選択する人はごく僅か。そのジェンダーギャップの要因はどこに？</span> -->
    <span>{{ content.subtitle }}</span>
    <p>{{ content.date }}</p>
  </div>
</template>

<style scoped>
div {
  /*width: 80%;*/
  margin: 5vh auto 0;
}

h2 {
  /*font-family: serif;*/
  /*color: blue;*/
  font-size: 40px;
  margin: 0;
}

span {
  font-size: 20px;
}

p {
  margin: 5px 0 0 10px;
  font-size: 14px;
}
</style>

<script>
export default {
  props: ["content"]
}
</script>
