// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const ram = reactive({
  labels: {
    model: "Модель",
    typeRAM: "Тип памяти",
    capacity: "Объём модуля памяти",
    formFactor: "Форм-фактор",
    frequency: "Тактовая частота",
    ECC: "ECC память",
    price: "Цена",
  },
  objectValues: {},

  set(items) {
    for(let key in this.labels) {
      // this.objectValues[key] = null
      this.objectValues[key] = items[key]
    }
    // console.log(this.objectValues)
  },

  getMap() {
    let map = new Map();
    for(let key in this.labels) {
      map.set(this.labels[key], this.objectValues[key])
      // translateDescription[this.labels[key]] = this.objectValues[key]
    }
    return map;
  },
});
