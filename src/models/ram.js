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
      this.objectValues[key] = items[key]
    }
  },

  getFullDescription() {
    let map = new Map();
    for(let key in this.labels) {
      map.set(this.labels[key], this.objectValues[key])
    }
    return map;
  },
  
  getShortDescription() {
    return "Оперативная память " + this.objectValues.model + " [" + this.objectValues.formFactor + ", " + this.objectValues.capacity + ", " + this.objectValues.typeRAM + ", " + this.objectValues.frequency + "]"
  }
});
