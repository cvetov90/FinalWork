<template>
  <header-component></header-component>
  <router-view class="router-view"/>
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

  },
  // created() {
  //   window.addEventListener('scroll', this.minimizedHeader)
  // },
  // methods: {
  //   minimizedHeader() {
  //     alert("работает")
  //   }
  // }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 16px;
  position: relative;
  /* left: 0; */
  /* top: 0; */
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #151528;
  ;
}

a:hover {
  color: #fe7200;
}

nav a.router-link-exact-active {
  color: #fe7200;
}

.router-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 100%; */
  /* height: 50vh; */
  padding: 30px 0;
  width: 100%;
}
</style>
