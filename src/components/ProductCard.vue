// + //0) Загрузить проеккт на github
// 1) Переработать названия переменных и функций, дать понятные названия по фактическому назначению
// + //2) Разобраться со значением, возвращаемым функцией motherboard.getMap. Либо возваращать объект и работать с ним, либо
// + //разобраться почему map возвращается внутри объекта
// + //3) Разобратся почему первое значение в методе createProductCard возвращается null
// + //4) Доработать функцию createProductCard для вывода пар "клчю" - "значение" через двоеточие
// + //5) Попытаться сократить объем кода в motherboard.js. Постараться создать структуру объекта и присвоить начальные значения
// + //в цикле по ключам из labels. Тоже самое касается функций set и getMap, в которых устанавливается соответствие и в строках меняется 
// + //только ключ, это можно сделать в цикле.
// + //6) В json и функциях, обрабатывающих его убрать знак "-" для удобства и однообразия обращений к свойствам объектов ??????77 Или не стоит и 
// + //лучше будет оставить массивы, т.к. с ними удобнее работать при сравнении, чем со строками.
// 7) Вывести карточки всех объектов материнских плат в цикле, решить какой метод будет главным и будет вызывать другие методы
// 8) В корневом компоненте App разработать структуру для вывода компонентов на страницу (блоки один над другим с возможностью сворачивания/разворачивания
нужных/ненужных). Добваить немного стилей и область для сборки. Добавить вывод информации о детали в карточке в таблицу.
// 9) Добавить ссылки на картинки в json. Добавить вывод картинок.

// Закоментировать промежуточные шаги
// Добавить props productType и через него передавать тип выводимого оборудования, соответствующим образом переработать скрипт
// Вынести получение json в отдельный файл js, чтобы предоствратить многократное скачивание
// Цену собрать из двух свойств "Цена" и "Валюта", рассмативать их как отдельные объекты

<template>
    <div class="product-card">
        <div>
            <img :src="productImageSrc">
        </div>
        <div>
            <h3>{{productTitle}}</h3>
        </div>
        <div v-html="productFullDescription"></div>
    </div>
</template>

<script>
// import { motherboard } from '@/models/motherboard'
// import { cpu } from '@/models/cpu'

export default {
    name: 'ProductCard',
    data() {
        return {
            productImageSrc: this.productObject.productImageSrc,
            productTitle: this.productObject.model,
            productFullDescription: "",
            productShortDescription: ""
        }
    },
    props: {
        productObject: Object,
        productType: String
    },
    methods: {
        // Сдалать краткое описание через productShortDescription и выводить его в конфигураторе, а полное описание на странице товара
        creaeteDescription: function () {
            // this.productShortDescription += this.product.

        import(`@/models/${this.productType}`)
            .then(obj => {
                obj[this.productType].set(this.productObject)
                obj[this.productType].getMap().forEach((value, key) => {
                           this.productFullDescription += `${key}: ${value} <br>`
                       })
            })
            .catch(err => alert(err))
        }
    },
    created() {
        this.creaeteDescription()
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