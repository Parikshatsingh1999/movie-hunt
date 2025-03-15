<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <article class="info">
      <h1>Movie Hunt</h1>
      <p>The end of of your hunt</p>
    </article>
    <RouterView />
  </main>
</template>

<style scoped>
.info {
  margin-bottom: 4%;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
