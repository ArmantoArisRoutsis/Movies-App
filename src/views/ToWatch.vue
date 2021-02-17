<template>
    <div class="watch-container">
        <div v-for="movie in $store.state.toWatch" :key="movie">
        <article class="watch-card">
            <img :src="movie.Poster==='N/A'?'https://ih1.redbubble.net/image.195569260.8857/fposter,small,wall_texture,product,750x1000.u3.jpg':movie.Poster" alt="">
            <div class="details"> 
                <h1>{{movie.Title}}</h1>
                <h3>{{movie.Type}} | {{movie.Year}}</h3>
                <button class="remove-btn" @click="$store.commit('addToList',movie)">Remove Movie</button>
                <router-link :to="`/movie/${movie.imdbID}`"><button class="details-btn">View Details</button></router-link>
            </div>
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
    border-radius:4px;
    color: white;
    margin: 0 auto;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.8);
    transition: 0.5s;
    animation: watch-card-animation;
    animation-duration: 1s;
}

@keyframes watch-card-animation{
    0%{
        opacity: 0;
        width: 300px;  
    }70%{
        opacity: 0.7;
        width: 550px;  
    }100%{
        opacity: 1;
        width: 500px; 
    }
}
.remove-btn, .details-btn{
    width:200px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 4px;
    border: none;
    transition: 0.5s;
}

.details-btn{
    background-color: rgb(97, 104, 170);
}
.details-btn:hover{
    background-color: rgb(41, 57, 88);
}
.remove-btn{
    background-color: rgb(194, 62, 95);
}
.remove-btn:hover{
    background-color: rgb(221, 0, 55);
}

.watch-card .details{
    background-color: rgba(0, 0, 0, 0.9);
    transition: 0.5s;
}
.watch-card .details:hover{
    background-color: rgba(0, 0, 0, 0.97);
}

.watch-card:hover{
    width: 550px;
    box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.8);
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