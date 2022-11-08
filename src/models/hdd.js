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
      this.objectValues[key] = items[key]
    }
  },

  getgetFullDescription() {
    let map = new Map();
    for(let key in this.labels) {
      map.set(this.labels[key], this.objectValues[key])
    }
    return map;
  },

  getShortDescription() {
    return "Жёсткий диск " + this.objectValues.model + " [" + this.objectValues.capacity + ", " + this.objectValues.interface + ", " + this.objectValues.rotationSpeed + ", " + "кэш-память - " + this.objectValues.cacheMemory + "]"
  }
});
