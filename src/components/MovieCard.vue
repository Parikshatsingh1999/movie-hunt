<template>
  <div class="movie-card" v-if="movie">
    <RouterLink :to="`/movie/${movie.imdbID}`">
      <img :src="movie.Poster" alt="Movie Poster" width="100" />
      <h3>{{ movie.Title }} ({{ movie.Year }})</h3>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  movie: Object,
});
</script>

<style scoped>
.movie-card {
  flex: 30% 0 0;
  margin: 2% 0;
}
@media screen and (max-width: 767px) {
  .movie-card {
    flex: 80% 0 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .movie-card {
    flex: 40% 0 0;
  }
}
</style>
