<template>
  <div class="toc">
    <h2>目次</h2>
    <ul>
      <li v-for="data in content">
        <a :href="`#${data.id}`">{{ data.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Toc",
  props: ["content"]
}
</script>

<style scoped>

</style>
