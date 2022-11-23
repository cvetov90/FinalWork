<template>
  <header-component></header-component>
  <router-view />
  <footer-component></footer-component>
</template>
<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import { DataStore } from '@/DataStore.js'

export default {
  name: "App",
  components: {
    FooterComponent,
    HeaderComponent
  },
  setup() {
    fetch('http://localhost:8080/pc_details.json')
      .then(response => response.json())
      .then(data => {
        for (let key in data) {
          DataStore[key] = data[key]
          for (let productObject in DataStore[key]) {
            DataStore[key][productObject].productType = key
          }
        }
      })
      .catch(error => alert("Произошла ошибка при попытке загрузить JSON: \n" + error.name + " \n" + error.message))

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* font-size: 24px; */
  position: relative;
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: #151528;
  ;
}

a:hover,
a:focus,
a:active {
  color: #fe7200;
}
</style>
