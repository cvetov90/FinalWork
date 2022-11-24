<template>
  <div class="col-3 configurator">
    <h3>Конфигуратор ПК</h3>
    <draggable class="list-group list-group-constructor container" :list="assembly" group="product"
      @change="checkComputerAssembly" itemKey="assemblyId">
      <template #item="{ element }">
        <ProductCardConfigurator :product-object="element"></ProductCardConfigurator>
      </template>
    </draggable>
    <ErrorsComponent></ErrorsComponent>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {assembly} from '@/models/assembly'
import ProductCardConfigurator from '@/components/ProductCardConfigurator.vue'
import {assemblyErrors} from '@/models/assemblyErrors'
import ErrorsComponent from '@/components/ErrorsComponent.vue'

export default {
  name: "СonfiguratorComponent",
  components: {
    draggable,
    ProductCardConfigurator,
    ErrorsComponent
},
  data() {
    return {
      assembly: assembly.get(),
    };
  },
  methods: {
    checkComputerAssembly: function (evt) {
      if (evt.moved) {
        // this.log(evt)
        return false
      }
      if(this.assembly.length == 0) {
        assemblyErrors.clear()
      }
      assembly.checkAssembly()
    },
  }
}
</script>

<style scoped>
.list-group {
  border: 1px solid black;
}

.list-group-constructor {
  min-height: 70vh;
}

.container,
.row {
  display: flex;
  flex-direction: column;
}

.col-3 {
  width: 50%;
}

/* .configurator {
  position: fixed;
  right: 0;
} */

.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
}
</style>