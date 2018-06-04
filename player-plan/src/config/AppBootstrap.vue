<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// ===
// Imports
// ===
import * as firebase from 'firebase';

// ===
// Component
// ===
export default {
  name: 'AppBase',
  beforeCreate(){
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyDXarGm0pjMo00yQCl4j_rN7nt8wdZwv9Q",
      authDomain: "player-plan.firebaseapp.com",
      databaseURL: "https://player-plan.firebaseio.com",
      projectId: "player-plan",
      storageBucket: "player-plan.appspot.com",
      messagingSenderId: "736469608710"
    };

    firebase.initializeApp(config);
  }
};
</script>

<style lang="scss">
  @import '../../node_modules/bootstrap/scss/bootstrap.scss';

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header span {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 16px;
  }
</style>
