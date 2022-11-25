<template>
  <div class="configurator-wrapper">
    <div class="col-3">
      <div class="configurator-title">
        <div><h3>Конфигуратор ПК</h3></div>
        <div><button @click="assembly.clear()">Сбросить</button></div>
      </div>
      <div class="summary">
        <div>Стоимость конфигурации:</div>
        <div>{{assembly.calculateAssemblyPrice()}}</div>
      </div>
      <div id="assembly-list">
        <div class="assembly-prompt" v-if="!assembly.get().length">
          <div>Добавьте компоненты в сборку</div>
          <div>Для этого нажмите кнопку "Добавить" в карточке товара или перетащите карточку в область под этим сообщенем</div>
        </div>
        <div class="errors">
          <ErrorsComponent></ErrorsComponent>
        </div>
        <div class="configurator">
          <draggable class="list-group list-group-constructor container" :list="assembly.get()" group="product"
             itemKey="assemblyId">
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
    checkComputerAssembly: function () {
      // console.log('work')
      // if (evt.moved) {
      //   return false
      // }
      // if (this.assembly.get().length == 0) {
      //   assemblyErrors.clear()
      // }
      // assembly.checkAssembly()

      // let block = document.getElementById('assembly-list')
      // if (this.errors.errorsArray.length) {
      //   block.scrollTop = 0
      //   console.log("err")
      // }
      // else {
      //   block.scrollTop = block.scrollHeight
      //   console.log("ok")
      // }
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
    // assembly.scrollConfigurator()
    let block = document.getElementById('assembly-list')
    if (this.errors.errorsArray.length) {
      block.scrollTop = 0
    }
    else {
      block.scrollTop = block.scrollHeight
    }
  }
}
</script>

<style scoped>
.list-group {
  border: 1px solid #dfdfe1;
  background: rgb(245, 224, 214);;
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
  padding-bottom: 20px;

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
.summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.configurator-title {
  padding-bottom: 0 !important;
}

.configurator-title,
.summary,
/* .list-group, */
/* .configurator */
.assembly-prompt {
  padding: 15px;
  border-bottom: 1px solid #dfdfe1;
}

.assembly-prompt {
  font-weight: bold;
  color: #fe7200;
}

.assembly-prompt>:nth-child(1) {
  text-transform: uppercase;
  padding-bottom: 7px;
}

#assembly-list {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>