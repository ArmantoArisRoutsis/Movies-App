<template>
    <div v-if="$store.state.toWatch.length===0">
        <h3  :style="!$store.state.darkTheme?'color:#fff':'color:#ffa200'">Nothing to watch</h3>
        <img class="empty-image" src="Assets/empty.png" alt="">
    </div>
    <h3  :style="!$store.state.darkTheme?'color:#ffff00':'color:#ffa200'" v-else>My Watchlist</h3>
    <div class="watch-container">
        <div v-for="movie in $store.state.toWatch" :key="movie">
        <article class="watch-card">
            <img :src="movie.Poster==='N/A'?'https://ih1.redbubble.net/image.195569260.8857/fposter,small,wall_texture,product,750x1000.u3.jpg':movie.Poster" alt="">
            <div class="details"> 
                <h1>{{movie.Title}}</h1>
                <h3>{{movie.Type}} | {{movie.Year.length===5?`${movie.Year}present`:movie.Year}}</h3>
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

.empty-image{
    max-width: 500px;
    width: 80%;
    animation: empty-img-animation;
    animation-duration: 1s;
}
@keyframes empty-img-animation{
    0%{
        opacity: 0;
        width: 0%;
    }70%{
        max-width: 600px;
        width: 95%;
    }
    100%{
        max-width: 500px;
        width: 80%;
    }
}

.details-btn{
    background-color: rgb(97, 104, 170);
}
.details-btn:hover{
    background-color: rgb(0, 110, 253);
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
@media only screen and (max-width: 623px) {
    .watch-container{
        display: block;
        width: 100%;
    }
    .watch-card{
        display: inline-block;
        width: 300px;
        margin-bottom: 1rem;
    }
    .watch-card:hover{
        width: 300px;
    }
    
    .watch-card button{
        width: 100%;
    }

    @keyframes watch-card-animation{
    0%{
        opacity: 0;
        transform: translateX(-200px); 
    }70%{
        opacity: 0.7;
        transform: translateX(20px);  
    }100%{
        opacity: 1;
        transform: translateX(0px);  
    }
}
    
}
</style>