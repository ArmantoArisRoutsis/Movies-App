<template>
  <div class="movies-wrapper">
        <div class="movie-container" v-for="movie in movies" :key="movie">
            <router-link :to="`/movie/${movie.imdbID}`" >
                <article>
                    <div class="movie-image">
                        <img :src="movie.Poster" alt="">
                    </div>
                    <div class="movie-info">
                        <h1>{{movie.Title}}</h1>
                        <p>{{movie.Year}} | {{movie.Type}}</p>
                    </div>
                </article>
            </router-link>
        </div>
  </div>  
</template>

<script>
export default {
props:['movies']
}
</script>

<style>
.movies-wrapper{
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 95%;
    margin: 0 auto;
}
.movie-container{
    animation: card-animation;
    animation-duration: 3s;
}
@keyframes card-animation{
    0%{
        transform: translateY(200px);
    }
    100%{
        transform: translateY(0px);
    }
}
.movie-container a{
    text-decoration: none;
    color: white;
}

.movie-container img{
    height: 300px;
    object-fit: cover;
}

.movie-container article{
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: left;
    margin-bottom: 20px;
    background: linear-gradient(to bottom,rgba(0, 0, 0, 0.8),rgba(174, 0, 255,0),rgba(174, 0, 255,0));
    max-width: 400px;
}
</style>