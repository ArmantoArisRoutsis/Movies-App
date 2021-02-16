<template>
  <div id="nav">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="to-watch-box">
      <router-link to="/watchlist">
      <h2 style="color:white;">{{$store.state.toWatch.length}} <span class="iconify" data-icon="mdi:movie-roll" data-inline="false"></span></h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    let data = localStorage.getItem('watchList')
    this.$store.dispatch('getData',data)
  }

}
</script>

<style>

#nav {
  position: fixed;
  width: 100%;
  display: inline;
  left: 0;
  top: 0;
  padding: 30px;
  background-color: rgba(32, 150, 101, 0.95);
  z-index: 5;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fffb15;
}
.to-watch-box{
  align-self: flex-end;
}
</style>