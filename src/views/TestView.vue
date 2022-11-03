<template>
  <div class="row">

    <div class="col-3">
      <h3>Каталог деталей</h3>
      <div v-for="productType in Object.keys(data)" :key="productType">
        <div>{{ productTypeList.translate(productType) }}</div>
        <draggable class="list-group container" :list="data[productType]"
          :group="{ name: 'people', pull: 'clone', put: false }" @change="log" itemKey="model">
          <template #item="{ element }">
            <ProductCard :product-object="element" :product-type="productType"></ProductCard>
          </template>
        </draggable>
      </div>
    </div>

    <div class="col-3 configurator">
      <h3>Конфигуратор ПК</h3>
      <draggable class="list-group list-group-constructor container" :list="list2" group="people" @change="checkComputerAssembly"
        itemKey="model">
        <template #item="{ element }">
          <ProductCard :product-object="element" :product-type="searchProductType(element)"></ProductCard>
        </template>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" /> -->

    <!-- <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import { DataStore } from '@/DataStore.js'
import ProductCard from '@/components/ProductCard.vue'
import {productTypeList} from '@/models/productTypeList'

export default {
  name: "TestView",
  display: "clone",
  order: 2,
  components: {
    draggable,
    ProductCard,
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [],
      data: DataStore,
      productTypeList: productTypeList
    };
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
    searchProductType: function (element) {
      for (let key in this.data) {
        if (this.data[key].includes(element) == true)
          return key
      }
    },
    checkComputerAssembly: function(evt) {
      if(this.list2.includes(evt.added.element)){
        alert("Компонент уже присутствует в сборке")
      }
    }
    // productTypeTranslate: function (productType) {
    //   switch (productType) {
    //     case "motherboard":
    //       return "Материнские платы";
    //     case "cpu":
    //       return "Процессоры";
    //     case "ram":
    //       return "Оперативная память"
    //     case "powerSupply":
    //       return "Блоки питания"
    //     case "hdd":
    //       return "Жёсткие диски (hdd)"
    //     case "ssd":
    //       return "Твердотельные накопители (ssd)"
    //     case "computerCase":
    //       return "Корпуса"
    //   }
    // }
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
</style>

<!-- <template>
  <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false" item-key="id">
    <template #item="{ element }">
      <div>
        {{ element.name }} - {{ element.testKey }}
        <img :src="element.src">
      </div>
    </template>
  </draggable>

  <rawDisplayer :value="myArray" title="myArray" />

  <rawDisplayer class="col-3" :value="list2" title="List 2" />
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'TestView',
  data() {
    return {
      drag: false,
      myArray: [
        { name: "Jon", id: 1, testKey: "Тестовой значение", src: "https://c.dns-shop.ru/thumb/st1/fit/500/500/2c248571878532213684f4121779be9e/6853d3037b362b91ef6084eb43da5ddfd6d0f9078b1510603b6db4170def796a.jpg.webp" },
        { name: "Alice", id: 2, testKey: "Тестовой значение", src: "https://c.dns-shop.ru/thumb/st1/fit/500/500/58e5e7cf3810738ee7099c4856db0fc0/2ea6a987906a2592d71d836af5ccf90b1a3f09fa69db96e3b45a249e6d74bebe.jpg.webp" }
      ]
    }
  },
  components: {
    draggable,
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
}
</style> -->