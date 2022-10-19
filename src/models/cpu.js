// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const cpu = reactive({
  labels: {
    model: "Модель",
    socket: "Сокет",
    numberCores: "Количество ядер",
    numberThreads: "Число потоков",
    l2CacheVolume: "Объем кэша L2",
    l3CacheVolume: "Объем кэша L3",
    baseFrequency: "Базовая частота процессора",
    maxFrequency: "Максимальная частота процессора",
    supportedTypeRAM: "Тип поддурживаемой памяти",
    maxCapacityRAM: "Максимальный объем памяти",
    maxFrequencyRAM: "Максимальная частота памяти",
    numberMemoryChannels: "Количество каналов памяти",
    supportECC: "Поддержка режима ECC",
    integratedGraphicsCore: "Интегрированное графическое ядро",
    cpuCore: "Ядро",
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
