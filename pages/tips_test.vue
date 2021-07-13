<template>
  <div>
    <div v-for="data in jsonData">
      <span class="name">{{ data.name }}</span>
      <span class="content">{{ data.content }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "tips_test.vue",
  data() {
    return {
      jsonData: [
        {
          "name": "",
          "content": ""
        }
      ]
    }
  },
  created: function () {
    axios.get('b.json')
      .then(response => {
        let json = response.data;
        this.jsonData = json;
      })
      .catch(err => {
        console.error(err)
      })
  }
}
</script>
