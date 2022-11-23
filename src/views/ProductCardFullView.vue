<template>
    <div>
        <div class="content">
            <div class="button-back"><a href="#" @click="goBack">Назад</a></div>
            <div>
                <ProductCardFullDescription :productObject="productCard.productCard"></ProductCardFullDescription>
            </div>
        </div>
    </div>
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
  
<style scoped>
.content {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.button-back {
    align-self: flex-end;
    padding: 0 25px;
}
</style>