<template>
    <div class="watch-container">
        <div v-for="movie in $store.state.toWatch" :key="movie">
        <article class="watch-card">
            <img :src="movie.Poster" alt="">
            <h1>{{movie.Title}}</h1>
        </article>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.watch-card{
    width: 500px;
    border: 3px black solid;
    margin: 0 auto;
    margin-top: 20px;
}

.watch-card img{
  width: 300px;
  height: 300px;
  object-fit: cover;
}

.watch-container{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(510px,1fr));
}
</style>