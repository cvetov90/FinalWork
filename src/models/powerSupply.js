import { reactive } from "vue";

export const powerSupply = reactive({
  labels: {
    model: "Модель",
    power: "Мощность",
    formFactor: "Форм-фактор",
    connector_20_4_pin: "Разъем 20 + 4 pin",
    connector_4_pin_cpu: "Разъем питания процессора 4 pin",
    connector_8_pin_cpu: "Разъем питания процессора 8 pin",
    connector_4_4_pin_cpu: "Разъем питания процессора 4 + 4 pin",
    connector_6_pin_video: "Разъем питания видеокарты 6 pin",
    connector_6_2_pin_video: "Разъем питания видеокарты 6 + 2 pin",
    connector_15_pin_sata: "Разъем 15-pin SATA",
    connector_4_pin_molex: "Разъем 4-pin Molex",
    connector_4_pin_floppy: "Разъем 4 pin Floppy",
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
    return "Блок питания " + this.objectValues.model + " [" + this.objectValues.power + ", " + this.objectValues.connector_20_4_pin + " x 20 + 4 pin, " + this.objectValues.connector_4_4_pin_cpu + " x 4 + 4 pin CPU, " + this.objectValues.connector_4_pin_cpu + " x 4 pin CPU, " + this.objectValues.connector_8_pin_cpu + " x 8 pin CPU, " + this.objectValues.connector_6_pin_video + " x 6 pin Video, " + this.objectValues.connector_6_2_pin_video + " x 6 + 2 pin Video, " + this.objectValues.connector_15_pin_sata + " x SATA, " + this.objectValues.connector_4_pin_molex + " x molex" + "]"
  }
});
