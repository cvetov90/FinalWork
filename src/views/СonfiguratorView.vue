<template>
  <div class="row">

    <!-- <div class="col-3">
      <h3>Каталог деталей</h3>
      <div v-for="productType in Object.keys(data)" :key="productType">
        <div>{{ productTypeList.translate(productType) }}</div>
        <draggable class="list-group container" :list="data[productType]"
          :group="{ name: 'product', pull: 'clone', put: false }" @change="log" itemKey="id">
          <template #item="{ element }">
            <ProductCard :product-object="element"></ProductCard>
          </template>
        </draggable>
      </div>
    </div> -->
    <CatalogComponent></CatalogComponent>
    <ConfiguratorComponent></ConfiguratorComponent>
    <!-- <div class="col-3 configurator">
      <h3>Конфигуратор ПК</h3>
      <draggable class="list-group list-group-constructor container" :list="list2" group="product" @change="checkComputerAssembly"
        itemKey="id">
        <template #item="{ element }">
          <ProductCard :product-object="element"></ProductCard>
        </template>
      </draggable>
    </div> -->

  </div>
</template>
<script>
// import draggable from 'vuedraggable'
// import { DataStore } from '@/DataStore.js'
// import ProductCard from '@/components/ProductCard.vue'
// import { productTypeList } from '@/models/productTypeList'
import CatalogComponent from '@/components/CatalogComponent.vue'
import ConfiguratorComponent from '@/components/ConfiguratorComponent.vue';

export default {
  name: "СonfiguratorView",
  // display: "clone",
  // order: 2,
  components: {
    // draggable,
    // ProductCard,
    CatalogComponent,
    ConfiguratorComponent
  },
  // data() {
  //   return {
  //     list2: [],
  //     data: DataStore,
  //     productTypeList: productTypeList
  //   };
  // },
  // methods: {
  //   add: function () {
  //     this.list.push({ name: "Juan" });
  //   },
  //   replace: function () {
  //     this.list = [{ name: "Edgard" }];
  //   },
  //   clone: function (el) {
  //     return {
  //       name: el.name + " cloned"
  //     };
  //   },
  //   log: function (evt) {
  //     window.console.log(evt);
  //   },
    // searchProductType: function (element) {
    //   for (let key in this.data) {
    //     if (this.data[key].includes(element) == true)
    //       return key
    //   }
    // },
    // checkComputerAssembly: function (evt) {
      // Список проверок
      // 1) Проверка на повторение для матплат, процессоров (если однопроцессорная плата), блоков питания, корпусов
      // 2) Проверка на совместимость компонентов между собой + количество устройств на материнке, количество устройств на блоке питания)
      // + 3) Нужно значть тип каждого элемента для проведения проверок

      // !!!!!!!!!!!!!!!!!! Каждый раз должна выполняться проверка совместимости всех элементов сборки, а не только добавляемого
      // Сделать функцию, вызывающую функции отдельных проверок
  //     let productTypeAssemblyList = []
  //     this.list2.forEach(item => {
  //       productTypeAssemblyList.push(item.productType)
  //     })
  //     console.log(evt.added.element)
  //     console.log(productTypeAssemblyList)

  //     // Проверки на повторение компонентов, которые должны быть в единичном экземпляре
  //     if (evt.added.element.productType == 'motherboard' && productTypeAssemblyList.filter(item => item === 'motherboard').length > 1) {
  //       console.log("Сборка может содержать только одну материнскую плату. Выберите наиболее подходящую и удалите остальные")
  //       this.list2.splice(this.list2.indexOf(evt.added.element), 1)
  //     }
  //     if (evt.added.element.productType == 'computerCase' && productTypeAssemblyList.filter(item => item === 'computerCase').length > 1) {
  //       console.log("Сборка может содержать только один корпус. Выберите наиболее подходящий и удалите остальные")
  //       this.list2.splice(this.list2.indexOf(evt.added.element), 1)
  //     }
  //     if (evt.added.element.productType == 'powerSupply' && productTypeAssemblyList.filter(item => item === 'powerSupply').length > 1) {
  //       console.log("Сборка может содержать только один блок питания. Выберите наиболее подходящий и удалите остальные")
  //       this.list2.splice(this.list2.indexOf(evt.added.element), 1)
  //     }
  //     //Проверка на количество процессоров
  //     if (evt.added.element.productType == 'cpu' && productTypeAssemblyList.filter(item => item === 'cpu').length > 1) {
  //       let component = this.list2.find(item => item.productType == 'motherboard')
  //       if (component.supportedNumberCPU == 1) {
  //         console.log("Материнская плата поддерживает только 1 процессор")
  //         this.list2.splice(this.list2.indexOf(evt.added.element), 1)
  //       }
  //     }
  //     // Проверки совместимости

  //   }
  // }
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
</style>