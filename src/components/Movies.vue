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
                        <button @click.prevent="$store.commit('addToList',movie)">{{checkIfExists(movie)}} Watchlist</button>
                        <button @click.prevent="thislod"></button>
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
      // console.log(this.state.toWatch.includes(movie))
      // if(!this.state.toWatch.includes(movie)){ 
      //   this.state.toWatch.push(movie)
      // }
      this.$store.state.toWatch.forEach(each => {
        if(each.imdbID===movie.imdbID){
          counter++
        }
      });
      if(counter===0){
        return "Add to"
      }
      else{
          return "Remove from"
      }
      
    },
    thislod(){
        var lastname = localStorage.getItem("watchList");
        console.log(lastname)
        console.log(this.$store.state.toWatch)
    }
},
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