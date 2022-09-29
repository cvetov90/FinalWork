// 0) Загрузить проеккт на github
// 1) Переработать названия переменных и функций, дать понятные названия по фактическому назначению
// 2) Разобраться со значением, возвращаемым функцией motherboard.getMap. Либо возваращать объект и работать с ним, либо
// разобраться почему map возвращается внутри объекта
// 3) Разобратся почему первое значение в методе createProductCard возвращается null
// 4) Доработать функцию createProductCard для вывода пар "клчю" - "значение" через двоеточие
// 5) Попытаться сократить объем кода в motherboard.js. Постараться создать структуру объекта и присвоить начальные значения
// в цикле по ключам из labels. Тоже самое касается функций set и getMap, в которых устанавливается соответствие и в строках меняется 
только ключ, это можно сделать в цикле.
// 6) В json и функциях, обрабатывающих его убрать знак "-" для удобства и однообразия обращений к свойствам объектов ??????77 Или не стоит и 
лучше будет оставить массивы, т.к. с ними удобнее работать при сравнении, чем со строками.
// 7) Вывести карточки всех объектов материнских плат в цикле, решить какой метод будет главным и будет вызывать другие методы
// 8) В корневом компоненте App разработать структуру для вывода компонентов на страницу (блоки один над другим с возможностью сворачивания/разворачивания
нужных/ненужных). Добваить немного стилей и область для сборки. Добавить вывод информации о детали в карточке в таблицу.
// 9) Добавить ссылки на картинки в json. Добавить вывод картинок.

<template>
    <div>
        <div>Image</div>
        <div>Title</div>
        <div>{{json}}</div>
        <button @click="getJSON">Получить значения из JSON</button>
        <div>{{tmp}}</div>
        <button @click="tmpString">Получить описание на русском</button>
        <div v-html="productCard"></div>
        <button @click="creaeteProductCard">Сформировать карточку товара</button>
    </div>
</template>

<script>
import { motherboard } from '@/motherboard'

export default {
    name: 'ProductCard',
    data() {
        return {
            json: {},
            tmp: "",
            productCard: null
        }
    },
    methods: {
        getJSON: function () {
            fetch('http://localhost:8080/pc_details.json')
                .then(response => response.json())
                .then(response => this.json = response)
                .catch(error => alert("Произошла ошибка при попытке загрузить JSON: \n" + error.name + " \n" + error.message))
        },
        tmpString: function () {
            // this.tmp = "Чипсет : " + this.json.motherboard[0].chipset
            // console.log(this.json.motherboard[0])
            motherboard.set(this.json.motherboard[0])
            this.tmp = motherboard.getMap()
        },
        creaeteProductCard: function () {
            //Функция преобразования Map в человеческий вид для вывода
            for (let item of this.tmp) {
                this.productCard += item + "<br>"        
            }
        }
    }
}
</script>

<style>
div {
    border: 1px solid black;
}
</style>