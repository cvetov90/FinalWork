<template>
  <div class="col-3">
    <div>
      <h3>Конфигуратор ПК</h3>
    </div>
    <div class="summary">Сумаарная информация</div>
    <div class="errors">
      <ErrorsComponent></ErrorsComponent>
    </div>
    <div v-if="!assembly.length">Добавьте компоненты в сборку</div>
    <div class="configurator">
      <draggable class="list-group list-group-constructor container" :list="assembly" group="product"
        @change="checkComputerAssembly" itemKey="assemblyId">
        <template #item="{ element }">
          <ProductCardConfigurator :product-object="element"></ProductCardConfigurator>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { assembly } from '@/models/assembly'
import ProductCardConfigurator from '@/components/ProductCardConfigurator.vue'
import { assemblyErrors } from '@/models/assemblyErrors'
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
      if (this.assembly.length == 0) {
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
  min-height: 90%;
}

.container,
.row {
  display: flex;
  flex-direction: column;
}

.col-3 {
  height: 80%;
  width: 40%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 5%  ;
  background: rgb(248, 237, 232);
  overflow-y: auto;
}

.configurator {
  min-height: 90%;
  /* overflow-y: scroll; */
  /* position: fixed; */
  /* right: 0; */
}

.errors {
  /* min-height: 10%; */
  /* overflow-y: scroll; */
}

.summary {
  min-height: 5%;
}

.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
}
</style>