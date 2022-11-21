
// 1) Переработать названия переменных и функций, дать понятные названия по фактическому назначению
// 8) В корневом компоненте App разработать структуру для вывода компонентов на страницу (блоки один над другим с возможностью сворачивания/разворачивания
нужных/ненужных). Добваить немного стилей и область для сборки. Добавить вывод информации о детали в карточке в таблицу.
// 9) Добавить ссылки на картинки в json. Добавить вывод картинок.
// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card">
        <div>
            <img :src="productObject.productImageSrc">
        </div>
        <div>
            <h3>{{productObject.model}}</h3>
        </div>
        <div v-html="productShortDescription"></div>
        <ButtonDelete @click="deleteProduct(productObject)"></ButtonDelete>
    </div>
</template>

<script>
import { productCard } from '@/models/productCard'
import { assembly } from '@/models/assembly'
import ButtonDelete from './ButtonDelete.vue'

export default {
    name: 'ProductCardConfigurator',
    data() {
        return {
            productShortDescription: ""
        }
    },
    components: {
        ButtonDelete
    },
    props: {
        productObject: Object,
        // productType: String
    },
    methods: {
        creaeteDescription: function () {
        import(`@/models/${this.productObject.productType}`)
            .then(obj => {
                obj[this.productObject.productType].set(this.productObject)
                this.productShortDescription = obj[this.productObject.productType].getShortDescription()
            //!!!!!!!!!!!!!!!!!!!!!!!!! Не удалять ! Функция будет использоваться на странице продукта!!!!!!!!!!!!!!!!!!!!
            //     obj[this.productType].getMap().forEach((value, key) => {
            //                this.productFullDescription += `${key}: ${value} <br>`
            //            })
            })

            // .catch(err => alert(err))
        },

        deleteProduct: function(element) {
            assembly.delete(element)
        }
    },
    created() {
        // this.creaeteDescription()
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