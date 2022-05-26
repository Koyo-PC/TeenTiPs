<template>
	<div>
		<Top />
		<Title />
		
	</div>
</template>

<script>
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

<style>
	html, body {
		width: 100%;
		height: 100%;
		margin: unset;
	}
</style>
