<template>
  <div class="movies-wrapper">
        <div class="movie-container" v-for="movie in movies" :key="movie">
            <router-link :to="`/movie/${movie.imdbID}`" >
                <article>
                    <div class="movie-image">
                        <img :src="movie.Poster==='N/A'?'https://ih1.redbubble.net/image.195569260.8857/fposter,small,wall_texture,product,750x1000.u3.jpg':movie.Poster" alt="">
                    </div>
                    <div class="movie-info">
                        <h1>{{movie.Title}}</h1>
                        <p>{{movie.Year}} | {{movie.Type}}</p>
                        <button :style="`background-color:${checkIf(movie)}; transition:  0.3s ease-out;`" @click.prevent="$store.commit('addToList',movie)">{{checkIfExists(movie)}} Watchlist</button>
                    </div>
                </article>
            </router-link>
        </div>
  </div>  
</template>

<script>
export default {
    props:['movies'],
    methods: {
        checkIfExists(movie){
            let counter = 0;
            this.$store.state.toWatch.forEach(each => {
                each.imdbID===movie.imdbID&&counter++ });
            return counter===0? "Add to":"Remove from"; 
        },
        checkIf(movie){
            let counter = 0;
            this.$store.state.toWatch.forEach(each => {
                each.imdbID===movie.imdbID&&counter++ });
            if(this.$store.state.darkTheme){
                return counter===0? "#341C3D":"#DC8624"; 
            }
            return counter===0? "#24C4B5":"#E15759"; 
        }
    }       
}
</script>

<style>
.movies-wrapper{
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(410px,1fr));
    width: 95%;
    margin: 0 auto;
}
.movie-container{
    margin: 0 auto;
    animation: card-animation;
    animation-duration: 1.5s;
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
    max-width: 210px;
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
.movie-info{
    position: relative;
}
.movie-info button{
    position: absolute;
    bottom: 3px;
    width: 100%;
    font-size: 20px;
    padding: 5px 30px;
    border: none;
}
</style>