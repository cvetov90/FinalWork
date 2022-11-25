<template>
  <div class="configurator-wrapper">
    <div class="col-3">
      <div class="configurator-title">
        <h3>Конфигуратор ПК</h3>
        <button @click="assembly.clear()">Сбросить</button>
      </div>
      <div class="summary">Сумаарная информация</div>
      <div id="assembly-list">
        <div class="assembly-prompt" v-if="!assembly.get().length">Добавьте компоненты в сборку</div>
        <div class="errors">
          <ErrorsComponent></ErrorsComponent>
        </div>
        <div class="configurator">
          <draggable class="list-group list-group-constructor container" :list="assembly.get()" group="product"
            @change="checkComputerAssembly" itemKey="assemblyId">
            <template #item="{ element }">
              <ProductCardConfigurator :product-object="element"></ProductCardConfigurator>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { assembly } from '@/models/assembly'
import ProductCardConfigurator from '@/components/ProductCardConfigurator.vue'
import { assemblyErrors } from '@/models/assemblyErrors'
import ErrorsComponent from '@/components/ErrorsComponent.vue'
// import { assemblyErrors } from '@/models/assemblyErrors'

export default {
  name: "СonfiguratorComponent",
  components: {
    draggable,
    ProductCardConfigurator,
    ErrorsComponent
  },
  data() {
    return {
      assembly: assembly,
      errors: assemblyErrors,
    };
  },
  methods: {
    checkComputerAssembly: function (evt) {
      if (evt.moved) {
        // this.log(evt)
        return false
      }
      if (this.assembly.get().length == 0) {
        assemblyErrors.clear()
      }
      assembly.checkAssembly()
      
      let block = document.getElementById('assembly-list')
      if (this.errors.errorsArray.length) {
        block.scrollTop = 0
        console.log("err")
      }
      else {
        block.scrollTop = block.scrollHeight
        console.log("ok")
      }
    },
  },
  updated() {
    // let block = document.getElementById('assembly-list')
    // console.log(this.errors.errorsArray.length)
    // if (this.errors.errorsArray.length) {
    //   block.scrollTop = 0
    //   console.log("err")
    // }
    // else {
    //   block.scrollTop = block.scrollHeight
    //   console.log("ok")
    // }
  }
}
</script>

<style scoped>
.list-group {
  border: 1px solid #dfdfe1;
}

.list-group-constructor {
  min-height: 100%;
}

.container,
.row {
  display: flex;
  flex-direction: column;
}

.configurator-wrapper {
  height: 50%;
  /* height: 80%; */
  width: 40%;
  background: rgb(248, 237, 232);
  display: flex;
  position: fixed;
  right: 5%;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

}

.col-3 {
  height: 100%;
  width: 90%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  /* position: fixed; */
  /* right: 5%; */
  /* background: rgb(248, 237, 232); */
  /* overflow-y: auto; */
}

.configurator {
  min-height: 65%;
  border-bottom: 1px solid #dfdfe1;
  /* margin-bottom: 20px; */
  /* padding-bottom: 20px; */
  /* overflow-y: scroll; */
  /* position: fixed; */
  /* right: 0; */
}

.errors {
  /* max-height: 10%; */
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

.configurator-title,
.summary,
/* .list-group, */
/* .configurator */
.assembly-prompt {
  padding: 20px;
  border-bottom: 1px solid #dfdfe1;
}

#assembly-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>