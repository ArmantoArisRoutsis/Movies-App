<template>
  <div class="single-movie-container" v-if="movie">
    <div class="image-container">
      <h1>{{movie.Title}}</h1>
      <h5>{{movie.Type}} | {{movie.Year.length===5?`${movie.Year}present`:movie.Year}}</h5>
      <img :src="movie.Poster" alt="">
    </div>
    <div class="details-container">
      <h2>Plot</h2>
      <p>{{movie.Plot}}</p>
      <div>
        <br>
        <h3>IMDB Rating: {{movie.Ratings[0].Value}}</h3>
        <h3>Rated {{movie.Rated}}</h3>
        <br>
        <h4>{{movie.Genre}}</h4>
        <h4>{{movie.Type==="movie"?`Runtime: ${movie.Runtime}`:`Average episode runtime: ${movie.Runtime}`}}</h4>
        <h4>Seasons: {{movie.totalSeasons}}</h4>
        <br>
        <p>Actors: {{movie.Actors}}</p>
        <p>Awards: {{movie.Awards}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import env from "../env"

export default {
  data(){
    return{
      movie:null
    }
  },mounted(){
    console.log("hello")
    axios.get(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${this.$route.params.id}&plot=full`)
    .then(res=>{
      this.movie=res.data
    })
  }

}
</script>

<style>
.single-movie-container{
  background-position-y: -0px;
  background-color: rgba(0, 0, 0,0.8);
  padding: 20px;
  max-width: 1200px;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  margin: 0 auto;
}
 
.single-movie-container .image-container img{
  backdrop-filter: blur(5px);
  backdrop-filter: url(https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg) blur(4px) saturate(150%);
}

.single-movie-container .details-container{
  text-align: left;
  padding: 20px;
}

</style>