<template>
  <div class="home">
    <div v-for="productType in Object.keys(data)" :key="productType">
      <div>
        <h1>{{productType}}</h1>
      </div>
      <div class="container">
        <ProductCard v-for="product in data[productType]" :key="product.model" :product="product"
          :product-type="productType"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import { DataStore } from '@/DataStore.js'

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

<style>
.container {
  display: flex;
  flex-direction: row;
}
</style>