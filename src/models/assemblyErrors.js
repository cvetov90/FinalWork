import { reactive } from "vue";

export const assemblyErrors = reactive({
  error: {
    errorType: "",
    errorMessage: ""
  },

  errors: new Set(),

  add(errorType, errorMessage) {
    if(errorType == "error") {
    this.error.errorType = "Ошибка"
    }
    else if(errorType == "warning") {
      this.error.errorType = "Предупреждение"
    }
    this.error.errorMessage = errorMessage
    this.errors.add(Object.assign({}, this.error))
  },

  get() {
    return this.errors
  },
  
  clear() {
    this.errors.clear()
  }
});
