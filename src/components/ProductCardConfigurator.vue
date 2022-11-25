
// 1) Переработать названия переменных и функций, дать понятные названия по фактическому назначению
// 8) В корневом компоненте App разработать структуру для вывода компонентов на страницу (блоки один над другим с возможностью сворачивания/разворачивания
нужных/ненужных). Добваить немного стилей и область для сборки. Добавить вывод информации о детали в карточке в таблицу.
// 9) Добавить ссылки на картинки в json. Добавить вывод картинок.
// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card-configurator">
        <!-- <div class="procuct-card-wrapper">
            <div class="product-card-image">
                <img :src="productObject.productImageSrc">
            </div>
        </div> -->
        <div class="product-card-configurator-info">
            <div class="product-card-configurator-info-title">
                {{ productObject.model }}
            </div>
            <div class="product-card-configurator-info-description" v-html="productShortDescription"></div>
            <div class="product-card-configurator-info-action">
                <div class="price">Цена: {{productObject.price}}</div>
                <div>
                    <ButtonActionRed @click="deleteProduct(productObject)" button-name="Удалить"></ButtonActionRed>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { productCard } from '@/models/productCard'
import { assembly } from '@/models/assembly'
import ButtonActionRed from './ButtonActionRed.vue'

export default {
    name: 'ProductCardConfigurator',
    data() {
        return {
            productShortDescription: ""
        }
    },
    components: {
        ButtonActionRed
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

        deleteProduct: function (element) {
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

<style scoped>

.product-card-configurator {
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #fe7200;
    display: flex;
    margin: 5px 0 10px;
}
.product-card-configurator-info {
    width: 100%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.product-card-configurator-info-title {
    height: 20%;
    align-self: flex-start;
    padding: 5px 10px;
    font-weight: bold;
}

.product-card-configurator-info-description {
    height: 60%;
    align-self: flex-end;
    text-align: left;
    padding: 5px 10px 0;
}

.product-card-configurator-info-action {
    height: 20%;
    width: 100%;
    align-self: flex-end;
    padding: 5px 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.price {
    font-weight: bold;
    align-self: flex-start;
    padding-left: 20px;
}
/* div {
    border: 1px solid black;
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
    border-radius: 30px;
    box-shadow: 5px 5px 5px gray;
} */
</style>