<template>
  <div class="column">
  <div>Ошибки</div>
  <div v-for="error in errors" :key="error">
    {{error}}
  </div>
  </div>
  <div class="col-3 configurator">
    <h3>Конфигуратор ПК</h3>
    <draggable 
    class="list-group list-group-constructor container" 
    :list="list2" 
    group="product"
    @change="checkComputerAssembly" 
    itemKey="id"
    >
      <template #item="{ element }">
        <ProductCard :product-object="element"></ProductCard>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import { DataStore } from '@/DataStore.js'
import ProductCard from '@/components/ProductCard.vue'
// import { productTypeList } from '@/models/productTypeList'

export default {
  name: "СonfiguratorComponent",
  display: "clone",
  order: 2,
  components: {
    draggable,
    ProductCard,
  },
  data() {
    return {
      list2: [],
      errors: []
      // data: DataStore,
      // productTypeList: productTypeList
    };
  },
  methods: {
    // add: function () {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function () {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function (el) {
    //   return {
    //     name: el.name + " cloned"
    //   };
    // },
    log: function (evt) {
      window.console.log(evt);
    },
    // searchProductType: function (element) {
    //   for (let key in this.data) {
    //     if (this.data[key].includes(element) == true)
    //       return key
    //   }
    // },
    checkComputerAssembly: function (evt) {
      // !!!!!!!!!!!! Написать дерево условий
      
      // Список проверок
      // 1) Проверка на повторение для матплат, процессоров (если однопроцессорная плата), блоков питания, корпусов
      // 2) Проверка на совместимость компонентов между собой + количество устройств на материнке, количество устройств на блоке питания)
      // + 3) Нужно значть тип каждого элемента для проведения проверок
      // -----------------------------------------------------
      // Добавить кнопку удаления компонентов из сборки
      // Проверки
      // 0) Проверка совместимости cpu и ram
      if(this.list2.find(item => item.productType == 'cpu') && (this.list2.filter(item => item.productType == 'ram').length > 0)){
        // 
      }
      // 1) Количество материнских плат в сборке не должно превышать 1. 
      //      Реакция: вывести ошибку и подсветить все маатеринские платы
      if(this.list2.filter(item => item.productType == 'motherboard').length > 1) {
        this.list2.filter(item => item.productType == 'motherboard').forEach(item => this.list2.splice(this.list2.indexOf(item), 1))
        this.list2.push(evt.added.element)
        console.log("Сборка может содержать только одну материнскую плату")
      }
      // 2) Количество процессоров в сборке не должно превышать допустимое для материнской платы
      //      Реакция: а) если мат плата есть в сборке, то вывести ошибку и подсветить все процессоры в сборке
      //                б) если мат платы нет в сборке, то просто добавить второй процессор к сборке
      if((this.list2.filter(item => item.productType == 'motherboard').length >= 1) && (this.list2.filter(item => item.productType == 'cpu').length >= 1)) {

      if(this.list2.filter(item => item.productType == 'cpu').length > 1) {
        if(this.list2.filter(item => item.productType == 'motherboard').filter(item => item.supportedNumberCPU > 1).length == 0) {
          console.log('Материнская плата поддурживает только один процессор')
        }
      }

      // if п 5
    }
      // 3) Количество блоков питания в сборке не должно превышать 1.
      //      Реакция: вывести ошибку и подсветить все блоки питания в сборке
      if(this.list2.filter(item => item.productType == 'powerSupply').length > 1) {
        console.log("Сборка может содержать только один блок питания")
      }
      // 4) Количество корпусов в сборке не должно превышать 1.
      //      Реакция: вывести ошибку и подсветить все корпуса в сборке
      if(this.list2.filter(item => item.productType == 'computerCase').length > 1) {
        console.log("Сборка может содержить только один корпус")
      }
      // 5) Сокет материской платы и процессора должны совмадать.
      //      Рекация: вывести ошибку, подсветить мат плату и процессор

            // см. п 2 

      // 6) Ядро процессора должно быть совместимо с мат платой.
      //      Реакция: вывести ошибку, подсветить мат плату и процессор
      // 7) Тип и форм-фактор ОЗУ должен поддерживаться мат платой.
      //      Реакция: вывести ошибку, подсветить мат плату и ОЗУ
      // 8) Количество добавленных модулей ОЗУ не должно превышать количество слотов на мат плате
      //      Реакция: вывести ошибку, подсветить мат плату и модули ОЗУ
      // ? 9) Количество каналов памяти процессора должно быть больше либо равно чем на мат плате
      //       Рекация: вывести предупреждение, подсветит мат плату и процессор
      // 10) Количество памяти поддерживаемой процессором должно быть больше либо равно поддерживаемому мат платой
      //        Реакция: вывести предупреждение, подсветить мат плату и процессор
      // 11) Количество добавленной в сбору ОЗУ должно быть меньше либо равно поддурживаемому мат платой
      //        Реакция: вывести предупреждение, подсветить ОЗУ и мат плату
      // 12) Частота памяти поддурживаемой процессором должна быть больше либо равна поддерживаемому мат платой
      //        Реакция: вывести предупреждение, подсветить ОЗУ и мат плату
      // ? 13) Частота ОЗУ в сборке должна быть меньше либо равна частоте поддерживаемой мат платой
      //        Реакция: если меньше, то вывести предупреждение, подсветить ОЗУ и мат плату
      // 14) Количество устройств SATA в сборке должно быть меньше либо равно количеству SATA портов на мат плате
      //        Рекация: вывести ошибку, подсветить мат плату и SATA устройства
      // 15) Количество устройств SATA в сборке должно быть меньше либо равно количеству SATA портов на блоке питания
      //        Реакция: вывести ошибку, подсветить мат блок питания и SATA устройства
      // 16) Основной раъем питания мат платы должен быть на блоке питания
      //        Рекация: вывести ошибку, подсветить блок питания и мат плату
      // 17) Разъем питания процессора должен быть на блоке питания
      //        Реакция: вывести ошибку, подсветить мат плату и блок питания
      // ! Добавить проверки разъемов питания компонентов и блока питания для каждлого компонента
      //--------------------------------------------------------

      // !!!!!!!!!!!!!!!!!! Каждый раз должна выполняться проверка совместимости всех элементов сборки, а не только добавляемого
      // Сделать функцию, вызывающую функции отдельных проверок
      // this.errors = []
      // let productTypeAssemblyList = []
      // this.list2.forEach(item => {
      //   productTypeAssemblyList.push(item.productType)
      // })

      // console.log(evt.added.element)
      // console.log(productTypeAssemblyList)



      // Проверки на повторение компонентов, которые должны быть в единичном экземпляре
      // if (
      // evt.added.element.productType == 'motherboard'
      // && 
      // productTypeAssemblyList.filter(item => item === 'motherboard').length > 1
      // ) {
      //   this.errors.push("Сборка может содержать только одну материнскую плату. Выберите наиболее подходящую и удалите остальные")
      //   this.list2.splice(this.list2.indexOf(evt.added.element), 1)
      // }
      // if (evt.added.element.productType == 'computerCase' && productTypeAssemblyList.filter(item => item === 'computerCase').length > 1) {
      //   console.log("Сборка может содержать только один корпус. Выберите наиболее подходящий и удалите остальные")
      //   this.list2.splice(this.list2.indexOf(evt.added.element), 1)
      // }
      // if (evt.added.element.productType == 'powerSupply' && productTypeAssemblyList.filter(item => item === 'powerSupply').length > 1) {
      //   console.log("Сборка может содержать только один блок питания. Выберите наиболее подходящий и удалите остальные")
      //   this.list2.splice(this.list2.indexOf(evt.added.element), 1)
      // }
      //Проверка на количество процессоров
      // if (evt.added.element.productType == 'cpu' && productTypeAssemblyList.filter(item => item === 'cpu').length > 1) {
      //   let component = this.list2.find(item => item.productType == 'motherboard')
      //   if (component.supportedNumberCPU == 1) {
      //     console.log("Материнская плата поддерживает только 1 процессор")
      //     this.list2.splice(this.list2.indexOf(evt.added.element), 1)
      //   }
      // }


      // Проверки совместимости

    }
  }
};
</script>

<style>
.list-group {
  border: 1px solid black;
}

.list-group-constructor {
  min-height: 70vh;
}

.container,
.row {
  display: flex;
  flex-direction: row;
}

.col-3 {
  width: 50%;
}

.configurator {
  position: fixed;
  right: 0;
}
.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
}
</style>