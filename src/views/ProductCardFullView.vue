<template>
    <div>
        <div class="content">
            <div class="button-back"><ButtonActionWhite @click="goBack" button-name="Назад"></ButtonActionWhite></div>
                <ProductCardFullDescription :productObject="productCard.productCard"></ProductCardFullDescription>
        </div>
    </div>
</template>
<script>
import { productCard } from '@/models/productCard';
import ProductCardFullDescription from '@/components/ProductCardFullDescription.vue';
import ButtonActionWhite from '@/components/ButtonActionWhite.vue';

export default {
    name: "ProductCardFullView",
    components: {
        ProductCardFullDescription,
        ButtonActionWhite
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
    width: 90%;
    /* overflow-y: scroll; */
}

.button-back {
    align-self: flex-end;
    padding: 0 25px;
}
</style>