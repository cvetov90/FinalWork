import { reactive } from "vue";

export const assemblyErrors = reactive({
  error: {
    errorType: "",
    errorMessage: ""
  },

  errorsSet: new Set(),

  errorsArray: [],

  add(errorType, errorMessage) {
    this.error.errorType = errorType
    this.error.errorMessage = errorMessage
    this.errorsSet.add(JSON.stringify(this.error))
  },

  setToArray() {
    this.errorsArray = []
    this.errorsSet.forEach(item => this.errorsArray.push(JSON.parse(item)))
  },
  
  clear() {
    this.errorsSet.clear()
  }
});
