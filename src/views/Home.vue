<template>
  <div class="home">
    <div class="featured-card">
      <router-link to="/movie/tt0409591">
        <img src="https://i.pinimg.com/originals/e1/7b/5f/e17b5fbdd01ab46763846e1bb0d97751.jpg" alt="naruto-foto">
        <div class="details">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ipsa iusto nisi deserunt veritatis ad cupiditate, enim tempora doloribus. 
          Tempore nostrum obcaecati a explicabo sed iusto non corporis perferendis. Quae, itaque.</p>
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
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=${env.apikey}&s=${this.search}`)
        .then(res=>{
          this.movies=res.data.Search
        })
      }
    }
  }
}
</script>

<style>
.featured-card a{
  width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(300px,500px));
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

.featured-card a,.details{
  text-decoration: none;
  color: white;
  padding: 20px;
  text-align: left;
}

.search-box{
  margin: 30px;
  animation: feature-card-animation;
  animation-duration: 1.2s;
}

.search-box input,button{
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
