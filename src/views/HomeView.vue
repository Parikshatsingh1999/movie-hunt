<script setup>
import { ref, onMounted } from "vue";
import MovieCard from "@/components/MovieCard.vue";

let searchText = "";
const movies = ref([]); // State to store API response
const loading = ref(true);
const error = ref(null);

// Function to fetch data
const fetchMovies = async () => {
  loading.value = true;
  try {
    error.value = null;
    movies.value = [];
    const response = await fetch(
      `http://www.omdbapi.com/?s=${searchText || "fast"}&type&apikey=a14247f`
    ).then((res) => res.json());
    if (response.Error) error.value = response.Error;
    else if (response.Search.length) movies.value = response.Search;
    else if (response.Search && !response.Search.length) error.value = "No movies found";
  } catch (err) {
    error.value = "Failed to fetch movies";
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchMovies);

const inputFilledChange = () => {
  let changeTimeout = null;
  return (e) => {
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(() => {
      searchText = e.target.value;
      fetchMovies();
    }, 500);
  };
};
</script>

<template>
  <div>
    <div>
      <input
        placeholder="search movie"
        aria-label="search movie"
        id="search"
        value=""
        :onInput="inputFilledChange()"
      />
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <section v-else class="movie-listing">
      <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
    </section>
  </div>
</template>

<style>
.movie-listing {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
#search {
  margin-bottom: 2%;
}
</style>
