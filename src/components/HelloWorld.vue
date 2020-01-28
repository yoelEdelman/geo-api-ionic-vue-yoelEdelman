<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">
      <router-link :to="{ path: 'about'}">About</router-link>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: "home",
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
