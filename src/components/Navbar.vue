<template>
  <div class="nav" :class="$store.state.darkTheme&&'dark-nav'">
    <h1>Movie<span :class="$store.state.darkTheme&&'dark'">Base</span></h1>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="to-watch-box">
      <router-link to="/watchlist">
        <h2 style="color:white;">{{$store.state.toWatch.length?$store.state.toWatch.length:0}} <span class="iconify" data-icon="mdi:movie-roll" data-inline="false"></span></h2>
      </router-link>
    </div>
    <button @click="$store.commit('setTheme')">theme</button>
  </div>
</template>

<script>
export default {
  mounted(){
    let data = localStorage.getItem('watchList')
    data&&this.$store.dispatch('getData',data)
  }

}
</script>

<style>

.nav {
  position: fixed;
  width: 100%;
  display: flex;
  left: 0;
  top: 0;
  padding: 30px;
  background-color: rgba(32, 150, 101, 0.95);
  z-index: 5;
  transition: 0.7s ease-out;
}

.dark-nav{
   background-color: rgba(18, 11, 31, 0.95);
}

.nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #fffb15;
}
.to-watch-box{
  align-self: flex-end;
}

.nav button{
  right: 0px;
}

.nav h1 span{
  color: #f5dc01;
  transition: 0.5s ease-out;
}

.nav h1 span.dark{
  color: #EC5A5C;
  animation: base-animation 3s infinite ;
}

@keyframes base-animation{
  0%{
    text-shadow: 0px 0px 2px #EC5A5C;
  }
  15%{
    text-shadow: 0px 0px 5px #EC5A5C;
  }
  30%{
    text-shadow: 0px 0px 10px #EC5A5C;
  }
  45%{
    text-shadow: 0px 0px 15px #EC5A5C;
  }
  60%{
    text-shadow: 0px 0px 20px #EC5A5C;
  }
  75%{
    text-shadow: 0px 0px 15px #EC5A5C;
  }
  90%{
    text-shadow: 0px 0px 10px #EC5A5C;
  }
  100%{
    text-shadow: 0px 0px 5px #EC5A5C;
  }
}
</style>