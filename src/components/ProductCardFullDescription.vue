// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card">
        <div>
            <img :src="productObject.productImageSrc">
        </div>
        <div>
            <h3>{{productObject.model}}</h3>
        </div>
        <div v-html="productFullDescription"></div>
        <!-- <ButtonDelete @click="deleteProduct(productObject)"></ButtonDelete> -->
    </div>
</template>

<script>
import { productCard } from '@/models/productCard'
// import { assembly } from '@/models/assembly'
// import ButtonDelete from './ButtonDelete.vue'

export default {
    name: 'ProductCardFullDescription',
    data() {
        return {
            productCard: productCard,
            productFullDescription: ""
        }
    },
    // components: {
    //     ButtonDelete
    // },
    props: {
        productObject: Object,
        // productType: String
    },
    methods: {
        creaeteDescription: function () {
        import(`@/models/${this.productObject.productType}`)
            .then(obj => {
                console.log(obj)
                console.log(obj[this.productObject.productType])
                obj[this.productObject.productType].set(this.productObject)
                this.productShortDescription = obj[this.productObject.productType].getShortDescription()
            //!!!!!!!!!!!!!!!!!!!!!!!!! Не удалять ! Функция будет использоваться на странице продукта!!!!!!!!!!!!!!!!!!!!
            //     obj[this.productType].getMap().forEach((value, key) => {
            //                this.productFullDescription += `${key}: ${value} <br>`
            //            })
            })

            // .catch(err => alert(err))
        },



    //     deleteProduct: function(element) {
    //         assembly.delete(element)
    //     }
    },
    created() {
        // this.creaeteDescription()
        // productCard.getShortDescription()
        productCard.getFullDescription(this.productObject)
        .then(item => {this.productFullDescription = item})
    },
}
</script>

<style scoped>
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