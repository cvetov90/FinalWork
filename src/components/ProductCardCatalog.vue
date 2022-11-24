
// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card">
        <div class="procuct-card-wrapper">
            <div class="product-card-image">
                <img :src="productObject.productImageSrc">
            </div>
        </div>
        <div class="product-card-info">
            <div class="product-card-info-title">
                <h3>{{ productObject.model }}</h3>
            </div>
            <div class="product-card-info-description" v-html="productShortDescription"></div>
            <div class="product-card-info-action">
                <div>
                    <ButtonAdd @click="addProduct(productObject)"></ButtonAdd>
                </div>
                <div>
                    <RouterLink @click="productCard.productCard = productObject"
                        :to="{ name: 'CatalogProductCard', params: { id: productObject.id } }">Подробнее</RouterLink>
                </div>
            </div>
        </div>
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
/* div {
    border: 1px solid black;
    overflow: scroll;
} */
/* 
img {
    width: 200px;
} */

.product-card {
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #fe7200;
    display: flex;
    margin: 5px 0;
    /* margin: 15px; */
    /* border-radius: 30px; */
    /* box-shadow: 5px 5px 5px gray; */
}

.procuct-card-wrapper {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card-image {
    height: 80%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
}

.product-card-image>img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.product-card-info {
    width: 70%;
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
}

.product-card-info-title {
    height: 20%;
    align-self: flex-start;
    padding: 10px;
}

.product-card-info-description {
    height: 60%;
    align-self: flex-start;
    text-align: left;
    padding: 10px;
}

.product-card-info-action {
    height: 20%;
    align-self: flex-end;
    padding: 10px;
    display: flex;
}

.product-card-info-action>div {
    padding: 10px;
}

/* 
.product-card-info-action>a,
.product-card-info-action>button {
padding: 10px;
} */
</style>