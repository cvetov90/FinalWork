
// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card">
        <div>
            <img :src="productObject.productImageSrc">
        </div>
        <div>
            <h3>{{ productObject.model }}</h3>
        </div>
        <div v-html="productShortDescription"></div>
        <ButtonAdd @click="addProduct(productObject)"></ButtonAdd>
        <RouterLink @click="productCard.productCard = productObject"
            :to="{ name: 'CatalogProductCard', params: { id: productObject.id } }">Подробнее</RouterLink>
    </div>
</template>

<script>
import { productCard } from '@/models/productCard'
import { assembly } from '@/models/assembly'
import ButtonAdd from '@/components/ButtonAdd.vue'
export default {
    name: 'ProductCardCatalog',
    data() {
        return {
            productShortDescription: "",
            productCard: productCard
        }
    },
    components: {
        ButtonAdd
    },
    props: {
        productObject: Object,
    },
    methods: {
        addProduct: function (element) {
            assembly.add(element)
        }
    },
    created() {
        productCard.getShortDescription(this.productObject)
            .then(item => { this.productShortDescription = item })
    }
}
</script>

<style>
div {
    /* border: 1px solid black; */
    overflow: scroll;
}

img {
    width: 200px;
}

.product-card {
    width: 30%;
    height: 400px;
    border: 1px solid black;
    margin: 15px;
    /* border-radius: 30px; */
    /* box-shadow: 5px 5px 5px gray; */
}
</style>