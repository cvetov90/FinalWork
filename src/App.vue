<template>
  <nav>
    <router-link to="/">Главная</router-link> |
    <router-link to="/config">Конфигуратор ПК</router-link> |
    <router-link to="/test">Тест</router-link> |
    <router-link to="/about">О разработчике</router-link>
  </nav>
  <router-view/>
</template>
<script>
import {DataStore} from '@/DataStore.js'

  export default {
    name: "App",
    setup() {
      fetch('http://localhost:8080/pc_details.json')
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                  // DataStore.motherboards = data.motherboard
                  // console.log(DataStore.motherboards)
                  for(let key in data) {
                    // console.log(data[key])
                    DataStore[key] = data[key]
                    for(let productObject in DataStore[key]) {
                      DataStore[key][productObject].productType = key
                    }
                  }
                  console.log(DataStore)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
