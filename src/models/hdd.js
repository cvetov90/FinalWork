// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const hdd = reactive({
  labels: {
    model: "Модель",
    formFactor: "Форм-фактор",
    capacity: "Объём HDD",
    interface: "Интерфейс",
    rotationSpeed: "Скорость вращения шпинделя",
    cacheMemory: "Объем кэш-памяти",
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
