<template>
  <div v-if="errors.showFlag" class="column">
    <div class="errors-title">Ошибки и предупреждения</div>
    <!-- <div><button @click="changeShowFlag">Показать</button></div> -->
    <div v-for="error in errors.errorsArray" :key="error">
      <div :class="{'is-warning': isWarning(error.errorType)}">{{ error.errorType }} : {{error.errorMessage}}</div>
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
  methods: {
    isWarning(errorType) {
      if(errorType == "Предупреждение") {
        return true
      }
      else {
        return false
      }
    }
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
  font-weight: normal !important;
  color: red;
  border-bottom: 1px solid #dfdfe1;
  padding: 20px;
  /* min-height: 10%; */
  /* overflow-y: scroll; */
}

.errors-title {
  padding-bottom: 10px;
  font-weight: bold;
}

.is-warning {
  color: rgb(153, 151, 51) !important;
}
</style>