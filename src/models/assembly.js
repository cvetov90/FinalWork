import { reactive } from "vue";

export const assembly = reactive({
  assembly: [],

  add(element) {
    this.assembly.push(element)
  },

  get() {
    return this.assembly
  },
  
  delete(element) {
    this.assembly.splice(this.assembly.indexOf(element), 1)
  }
});
