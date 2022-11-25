import { reactive } from "vue";

export const assemblyErrors = reactive({
  error: {
    errorType: "",
    errorMessage: ""
  },

  errorsSet: new Set(),

  errorsArray: [],
  
  showFlag: false,

  add(errorType, errorMessage) {
    this.error.errorType = errorType
    this.error.errorMessage = errorMessage
    this.errorsSet.add(JSON.stringify(this.error))
    this.showFlag = true
  },

  setToArray() {
    this.errorsArray = []
    this.errorsSet.forEach(item => this.errorsArray.push(JSON.parse(item)))
  },
  
  clear() {
    this.errorsSet.clear()
    this.errorsArray = []
    this.showFlag = false
  }
});
