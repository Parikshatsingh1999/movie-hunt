<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="movie">
    <h1>{{ movie?.Title }}</h1>
    <img :src="movie?.Poster" alt="Movie Poster" width="200" />
    <p><strong>IMDB Rating:</strong> {{ movie?.imdbRating }}/10</p>
    <p><strong>Released:</strong> {{ movie?.Released }}</p>
    <p><strong>Director:</strong> {{ movie?.Director }}</p>
    <p><strong>Writer:</strong> {{ movie?.Writer }}</p>
    <p><strong>Plot:</strong> {{ movie?.Plot }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const movie = ref(null);
const error = ref(null);
const loading = ref(true);

const fetchMovieDetails = async () => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${route.params.id}&apikey=a14247f`
    ).then((res) => res.json());
    movie.value = response;
    loading.value = false;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    error.value = "Error fetching movie details";
  }
};

onMounted(fetchMovieDetails);
</script>
