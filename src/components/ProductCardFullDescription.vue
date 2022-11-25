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
            <!-- <div class="product-card-info-description" v-html="productFullDescription"></div> -->
            <div class="product-card-info-description">
            <table>
                <!-- <div v-for="property in productFullDescription" :key="property" class="product-card-info-description"> -->
                    <tr v-for="property in productFullDescription" :key="property">
                        <td class="table-td-property">
                            {{ property[0] }}
                        </td>
                        <td>
                            {{ property[1] }}
                        </td>
                    </tr>
            </table>
            </div>
        </div>
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
            .then(item => { this.productFullDescription = item })
    },
}
</script>

<style scoped>
.product-card {
    width: 100%;
    height: 100%;
    /* border-bottom: 1px solid #fe7200; */
    display: flex;
    border: none;
    /* overflow-y: scroll; */
    /* margin: 5px 0; */
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
    padding: auto;
}

.product-card-info-title {
    height: auto;
    align-self: flex-start;
    padding: auto;
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


/* .table {
    width: 70vh;
} */
.table-td-property {
    /* width: 120%; */
font-weight: bold;
padding-right: 20px;
}
/* 
.product-card-info-action>a,
.product-card-info-action>button {
padding: 10px;
} */
</style>