<template>
<div>    {{                     $route.params.id                     }} </div>
    <div>{{                     $route.params                     }}</div>
    <div>{{productCard.productCard}}</div>
    <button @click="goBack">Назад</button>
    <ProductCardFullDescription :productObject="productCard.productCard"></ProductCardFullDescription>

</template>
<script>
import { productCard } from '@/models/productCard';
import ProductCardFullDescription from '@/components/ProductCardFullDescription.vue';

export default {
    name: "ProductCardFullView",
    components: {
        ProductCardFullDescription
    },
    data() {
        return {
            productCard: productCard
        }
    },
    methods: {
        goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
    }
};
</script>
  
<style>

</style>