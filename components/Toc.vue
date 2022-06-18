<template>
  <div class="toc">
    <ol>
      <li v-for="data in content">
        <a :href="`#${data.id}`">{{ data.text }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Toc",
  props: ["content"]
}
</script>

<style scoped>
  ol {
    display: block;
    width: 75%;
    margin: 80px auto;
    /*background-color: gray;*/
    list-style-type: dash;
  }
  ol > li {
    color: blue;
  }
  ol > li > a {
    text-decoration: none;
    font-size: 15px;
    line-height: 30px;
    color: black;
    padding-left: 10px;
  }
</style>
