<template>
  <!-- ************************************************************** -->
  <!-- Delete the three lines indicated below to work around the bug: -->
  <!-- ************************************************************** -->

  <div id="app">

    <!-- 1. delete this line -->
    <nav-bar/>

    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

// 2. delete this line
import NavBar from '@/components/NavBar'

export default {
  components: {
    // 3. delete this line
    NavBar,
  },
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
