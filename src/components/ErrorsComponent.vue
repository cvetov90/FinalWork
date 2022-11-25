<template>
  <div v-if="errors.showFlag" class="column">
    <div class="errors-title">Ошибки и предупреждения</div>
    <!-- <div><button @click="changeShowFlag">Показать</button></div> -->
    <div v-for="error in errors.errorsArray" :key="error">
      <div>{{ error.errorType }} : {{error.errorMessage}}</div>
      <br>
    </div>
  </div>
</template>

<script>
import { assemblyErrors } from '@/models/assemblyErrors'
export default {
  name: "ErrorsComponent",
  data() {
    return {
      errors: assemblyErrors,
      // showFlag: false
    };
  },
  created() {
    // let block = document.getElementById('configurator')
    // block.scrollTop = 0
  }
  // methods: {
  //   checkErrors() {
  //     if (assemblyErrors.errorsArray.length) {
  //       this.showFlag = !this.showFlag
  //     }
  //   }
  // },
  // updated() {
  //   this.checkErrors
  // }
}
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
  border-bottom: 1px solid #dfdfe1;
  padding: 20px;
  /* min-height: 10%; */
  /* overflow-y: scroll; */
}

.errors-title {
  padding-bottom: 10px;
}
</style>