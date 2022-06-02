<template>
	<div>
		<Top />
		<Title :data="titleData" />
    <div v-for=" textData in contentsData">
      <h1 v-if="textData.h1 != undefined">{{textData.h1}}</h1>
      <img v-if="textData.img != undefined" :src="textData.img" />
      <div v-if="textData.remark != undefined">{{textData.remark}}</div>
    </div>

	</div>
</template>

<script>
import axios from "axios";

export default {
  name: "tips_test.vue",
  data() {
    return {
      titleData: {},
      contentsData: {}
    }
  }
  ,
  created: function () {
    axios.get('b.json')
      .then(response => {
        let json = response.data;
        this.titleData = json.title;
        this.contentsData = json.contents;
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>

<style>
	html, body {
		width: 100%;
		height: 100%;
		margin: unset;
	}
</style>
