<template>
  <div class="profile">
    <h2>{{ content.title }}</h2>
    <p v-html="content.content">
    </p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["content"],
}
</script>

<style scoped>

</style>
