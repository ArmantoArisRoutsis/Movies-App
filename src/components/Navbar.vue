<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

#nav {
  position: fixed;
  width: 100%;
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
</style>