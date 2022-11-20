<template>
<div>    {{                     $route.params.id                     }} </div>
    <div>{{                     $route.params                     }}</div>
    <div>{{productCard.productCard}}</div>
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
};
</script>
  
<style>

</style>