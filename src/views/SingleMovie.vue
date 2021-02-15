<template>
  <div v-if="movie">
    <h1>{{movie.Title}}</h1>
    <img :src="movie.Poster" alt="">
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
    axios.get(`http://www.omdbapi.com/?apikey=${env.apikey}&i=${this.$route.params.id}&plot=full`)
    .then(res=>{
      this.movie=res.data
    })
  }

}
</script>

<style>

</style>