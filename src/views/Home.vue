<template>
  <div class="home">
     <h2 style="color:yellow;">Featured this week</h2>
    <div class="featured-card">
      <router-link to="/movie/tt3032476">
        <img src="https://alternativemovieposters.com/wp-content/uploads/2020/05/simoneferraro_saul.jpg" alt="naruto-foto">
        <div class="details">
          <h3>Better Call Saul</h3>
          <p>Introducing Jimmy McGill. You may know him better as Saul Goodman, Walter White's slippery, resourceful lawyer in Breaking Bad.
             When first we meet him it is a few years before he meets Walter White. He is a struggling lawyer in Albuquerque, New Mexico.
              He mostly defends small-time crooks and represents people in civil liability claims. His brother, Charles "Chuck" McGill, is a 
              senior partner at a prestigious Albuquerque law firm but hasn't left his house for several months due to a strange affliction. 
              Jimmy is supporting him through bringing him groceries and the like. Jimmy has a dark, pre-lawyer past, being a small-time 
              fraudster in Chicago before moving to Albuquerque to start over and work with at his brother's firm. We also meet Mike 
              Ehrmantraut, ex-cop now working as a toll booth attendant at the courthouse parking lot. We see how Jimmy and Mike's stories 
              converge and how Jimmy slowly becomes the Saul Goodman we know from Breaking Bad. </p>
        </div>
      </router-link>
    </div>
    <div class="search-box">
      <form @submit.prevent="searchMovie">
        <input type="text" placeholder="Search a movie title" v-model="search">
        <button>Search</button>
      </form>
    </div>
    <Movies v-if="movies" :movies="movies"/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import env from "../env"
import Movies from "../components/Movies"

export default {
  data(){
    return{
      search:"",
      movies:null
    }
  },
  name: 'Home',
  components: {Movies},
  methods:{
    searchMovie(){
      if(this.search!==""){
        console.log("hello")
        axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=${env.apikey}&s=${this.search}`)
        .then(res=>{
          res?this.movies=res.data.Search:null
        })
      }
    }
  }
}
</script>

<style>

.featured-card a{
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(400px, 1fr));
  background-color: rgba(2, 2, 2,0.7);
  animation: feature-card-animation;
  animation-duration: 1s;
}
@keyframes feature-card-animation{
  0%{
    transform: translateX(-200px);
  }
  75%{
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0px);
  }
}

@media only screen and (max-width: 680px) {
  .search-box form input, .search-box form button{
    margin: 0;
    width: 90%;
  }
  .featured-card a{
    grid-template-columns: repeat(auto-fill,minmax(300px, 1fr));
    width: 95%;
  }
}

.featured-card img{
  width: 100%;
  margin: 0 auto;
  margin-top: 35px;
}

.featured-card a,.details{
  text-decoration: none;
  color: white;
  padding: 20px;
  text-align: left;
  margin: 0 auto;
}

.search-box{
  margin: 30px;
  animation: feature-card-animation;
  animation-duration: 1.2s;
}

.search-box input, .search-box button{
  padding: 20px;
  border: rgb(144, 47, 255) 2px solid;
  background-color: rgba(0, 0, 0,0.8);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
}
.search-box input{
  width: 500px;
  color:white;
}
.search-box input::placeholder{
  color:rgb(151, 151, 151);
}
button{
  cursor: pointer;
}

</style>
