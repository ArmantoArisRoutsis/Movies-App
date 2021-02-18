<template>
  <div class="nav" :class="$store.state.darkTheme&&'dark-nav'">
    <router-link to="/">
      <h1>Movie<span :class="$store.state.darkTheme&&'dark'">Base</span></h1>
    </router-link>
    <div class="to-watch-box">
      <router-link to="/watchlist">
        <h2 style="color:white;">{{$store.state.toWatch.length?$store.state.toWatch.length:0}} <span class="iconify" data-icon="mdi:movie-roll" data-inline="false"></span></h2>
      </router-link>
    </div>
    <div class="theme">
      <h4>Light</h4>
        <div @click="$store.commit('setTheme')" class="roll">
          <button :style="$store.state.darkTheme&&'top:13px;'" class="theme-btn">{{$store.state.darkTheme?".":"."}}</button>
        </div>
      <h4>Dark</h4>
    </div>
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
  position: fixed;
  padding: 5px;
  border: blueviolet 2px solid;
  background-color: rgb(61, 24, 95);
  border-radius: 3px;
  right: 20px;
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
  animation: base-animation 5s infinite ;
}

@keyframes base-animation{
  0%{
    text-shadow: 0px 0px 5px #EC5A5C;
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

.theme{
  position: absolute;
  top: 12px;
  right: 100px;
}
.theme-btn{
    position: absolute;
    background: white;
    width: 100%;
    top: 0px;
    border: none;
    border-radius: 10px;
    transition: 0.7s ease-out;
  }

.theme .roll{
  height: 30px;
  width: 12px;
  background:none;
  border: white 1px solid;
  border-radius: 10px;
  cursor: pointer;
}

.roll{
  position: relative;
  margin: 5px 0px 5px 25px;
}
</style>