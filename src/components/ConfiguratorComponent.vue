<template>
  <div class="column">
    <div>Ошибки и предупреждения</div>
    <div v-for="error in errors" :key="error">
      <div>{{ error.errorType }} : {{error.errorMessage}}</div>
    </div>
  </div>
  <div class="col-3 configurator">
    <h3>Конфигуратор ПК</h3>
    <draggable class="list-group list-group-constructor container" :list="assembly" group="product"
      @change="checkComputerAssembly" itemKey="assemblyId">
      <template #item="{ element }">
        <ProductCardConfigurator :product-object="element"></ProductCardConfigurator>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {assembly} from '@/models/assembly'
// import { DataStore } from '@/DataStore.js'
import ProductCardConfigurator from '@/components/ProductCardConfigurator.vue'
import {assemblyErrors} from '@/models/assemblyErrors'
// import { productTypeList } from '@/models/productTypeList'
// import { productTypeList } from '@/models/productTypeList';

export default {
  name: "СonfiguratorComponent",
  display: "clone",
  order: 2,
  components: {
    draggable,
    ProductCardConfigurator,
  },
  data() {
    return {
      // list2: [],
      assembly: assembly.get(),
      errors: assemblyErrors.get()
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
      if (evt.moved) {
        this.log(evt)
        return false
      }

      if(this.assembly.length == 0) {
        assemblyErrors.clear()
      }

      assembly.checkAssembly(evt)
    }
  }
}
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