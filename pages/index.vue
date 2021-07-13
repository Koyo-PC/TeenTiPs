<template>
  <div>
    <Tutorial/>
    <div v-on:click="change">kokowokurikku</div>
    <span>name: {{ json.name }}<br>content: {{ json.content }}</span>
    <Tutorial/>
    <span>{{ names.Koyo }}: {{ json.content }}<br>{{ names.SNB }}: {{ json.content }}</span>
    <Tutorial/>
  </div>
</template>

<script>
import axios from "axios";
// import json from "a.json";
export default {
  data() {
    return {
      names: {
        Koyo: "甲陽太郎",
        SNB: "園部"
      },
      json: {name: "", content: ""},
      // test1: json.name,
      // test2: json.content,
    }
  },
  methods: {
    change: function () {
      console.log("asa");
      this.test1 = "変更された!!";
      console.log(this.test1);
    }
  },
  created: function () {
    axios.get('a.json')
      .then(response => {
        const pageID = 2;
        let json = response.data;
        console.log(json);
        for (const jsonContent of json) {
          console.log(jsonContent);
          if(jsonContent.id === pageID){
            this.json = jsonContent.data;
            console.log(jsonContent);
          }
        }
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>
