<template>
  <ul>
    <li v-for="d in data">
      <a :href="`#${d.id}`">{{ d.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Toc",
  props: ["data"]
}
</script>

<style scoped>

</style>
