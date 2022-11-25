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
            <div class="price">Цена: {{productObject.price}}</div>
        </div>
    </div>
</template>

<script>
import { productCard } from '@/models/productCard'

export default {
    name: 'ProductCardModalManualSelect',
    data() {
        return {
            productShortDescription: ""
        }
    },
    props: {
        productObject: Object,
    },
    methods: {
        creaeteDescription: function () {
            import(`@/models/${this.productObject.productType}`)
                .then(obj => {
                    obj[this.productObject.productType].set(this.productObject)
                    this.productShortDescription = obj[this.productObject.productType].getShortDescription()
                })
        },
    },
    created() {
        // this.creaeteDescription()
        productCard.getShortDescription(this.productObject)
            .then(item => { this.productShortDescription = item })
    }
}
</script>

<style scoped>
/* div {
    border: 1px solid black;
    overflow: scroll;
} */

/* img {
    width: 60%;
    padding: 10px;
} */

/* .product-card { */
/* overflow: unset; */
/* display: flex; */
/* align-items: center; */
/* justify-content: center; */
/* display: grid;
    grid-template-areas:
        "a b"
        "a c";
    grid-gap: 10px;
    grid-template-columns: 30% / 70%;
    align-items: center; */
/* width: 90%; */
/* height: 230px; */
/* border: 1px solid black; */
/* margin: 15px; */
/* border-radius: 30px; */
/* box-shadow: 5px 5px 5px gray; */
/* } */

/* .product-image { */
/* width: 30%%; */
/* align-self: center; */
/* justify-self: center; */
/* grid-area: a; */
/* } */

/* .product-description {
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;;
    align-items: center;
    justify-content: flex-start;
    grid-area: b;
} */

.product-card-info-description {
    height: 40%;
}

.price {
    height: 20%;
}
</style>