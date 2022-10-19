<template>
  <div class="home">
    <!-- <ProductCard :product="data.cpu[0]"></ProductCard> -->
    <div v-for="product in data.motherboard" :key="product.model">
      <ProductCard :product="product"></ProductCard>
    </div>
<!-- сократить запись, сделать цикл в цикле и передавать тип оборудования -->
    <div v-for="product in data.cpu" :key="product.model">
      <ProductCard :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import {DataStore} from '@/DataStore.js'

export default {
  name: 'HomeView',
  data() {
    return {
      data: DataStore
    }
  },
  components: {
    ProductCard
  }
}
</script>
