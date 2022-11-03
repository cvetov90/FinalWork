// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const ssd = reactive({
  labels: {
    model: "Модель",
    formFactor: "Форм-фактор",
    capacity: "Объём HDD",
    interface: "Интерфейс",
    NWMe: "NWMe",
    tbw: "Максимальный ресурс записи (TBW)",
    dwpd: "DWPD",
    maxSpeedRead: "Максимальная скорость последовательного чтения",
    maxSpeedWrite: "Максимальная скорость последовательной записи ",
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

  getFullDescription() {
    let map = new Map();
    for(let key in this.labels) {
      map.set(this.labels[key], this.objectValues[key])
      // translateDescription[this.labels[key]] = this.objectValues[key]
    }
    return map;
  },

  getShortDescription() {
    return "SSD накопитель " + this.objectValues.model + " [" + this.objectValues.capacity + ", " + this.objectValues.formFactor + "\"" + ", чтение - " + this.objectValues.maxSpeedRead + ", запись - " + this.objectValues.maxSpeedWrite + "]"
  }
});
