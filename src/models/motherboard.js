// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const motherboard = reactive({
  labels: {
    model: "Модель",
    formFactor: "Форм-фактор",
    socket: "Сокет",
    chipset: "Чипсет",
    supportedCPUCore: "Совместимые ядра процессоров",
    numberRAMSlots: "Коилчество слотов памяти",
    supportedRAMFormFactor: "Форм-фактор поддурживаемой памяти",
    supportedTypeRAM: "Тип поддурживаемой памяти",
    numberMemoryChannels: "Количество каналов памяти",
    maxCapacityRAM: "Максимальный объем памяти",
    maxFrequencyRAM: "Максимальная частота памяти",
    connector_M2_number: "Количество разЪемов M.2",
    connector_M2_Type: "Разъемы M.2",
    connector_sata_number: "Количество портов SATA",
    supportedSataRAID: "Режим работы SATA RAID",
    supportNWMe: "Поддержка NVMe",
    "PCI-E_version": "Версия PCI Express",
    "PCI-E_x16_number": "Количество слотов PCI-E x16",
    "PCI-E_x1_number": "Количество слотов PCI-E x1",
    USBInterface: "Количество и тип USB на задней панели",
    VideoInterface: "Видеовыходы",
    numberRJ45Interface: "Количество сетевых портов (RJ-45)",
    mainPowerConnector: "Основной разъем питания",
    cpuPowerConnector: "Разъем питания процессора",
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
