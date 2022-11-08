import { reactive } from "vue";

export const computerCase = reactive({
  labels: {
    model: "Модель",
    formFactor: "Форм-фактор",
    supportedFormFactorMotherboards: "Форм-фактор совместимых материнских плат",
    supportedFormFactorPowerSupply: "Форм-фактор совместимых блоков питания",
    numberCompartments2_5: "Количество отсеков 2.5\"",
    numberCompartments3_5_in: "Число внутренних отсеков 3.5\"",
    nmumberCopartments3_5_out: "Число внешних отсеков 3.5\"",
    numberCompartments5_25: "Число отсеков 5.25\"",
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
    return "Корпус " + this.objectValues.model + " [" + this.objectValues.formFactor + ", " + this.objectValues.supportedFormFactorMotherboards + "]"
  }
});
