// import { map } from 'core-js/core/array'
import { reactive } from "vue";

export const motherboard = reactive({
  labels: {
    model: "Модель",
    formFactor: "Форм-фактор",
    socket: "Сокет",
    chipset: "Чипсет",
    supportedCPUCore: ["Совместимые ядра процессоров"],
    numberRAMSlots: "Коилчество слотов памяти",
    supportedRAMFormFactor: "Форм-фактор поддурживаемой памяти",
    supportedTypeRAM: ["Тип поддурживаемой памяти"],
    numberMemoryChannels: "Количество каналов памяти",
    maxCapacityRAM: "Максимальный объем памяти",
    maxFrequencyRAM: "Максимальная частота памяти",
    connector_M2_number: "Количество разЪемов M.2",
    connector_M2_Type: "Разъемы M.2",
    connector_sata_number: "Количество портов SATA",
    supportedSataRAID: ["1", "5", "10"],
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

  objectValues: {
    model: null,
    formFactor: null,
    socket: null,
    chipset: null,
    supportedCPUCore: null,
    numberRAMSlots: null,
    supportedRAMFormFactor: null,
    supportedTypeRAM: null,
    numberMemoryChannels: null,
    maxCapacityRAM: null,
    maxFrequencyRAM: null,
    connector_M2_number: null,
    connector_M2_Type: null,
    connector_sata_number: null,
    supportedSataRAID: null,
    supportNWMe: null,
    "PCI-E_version": null,
    "PCI-E_x16_number": null,
    "PCI-E_x1_number": null,
    USBInterface: null,
    VideoInterface: null,
    numberRJ45Interface: null,
    mainPowerConnector: null,
    cpuPowerConnector: null,
    price: null,
  },

  set(items) {
    this.objectValues.model = items.model;
    this.objectValues.formFactor = items.formFactor;
    this.objectValues.socket = items.socket;
    this.objectValues.chipset = items.chipset;
    this.objectValues.supportedCPUCore = items.supportedCPUCore;
    this.objectValues.numberRAMSlots = items.numberRAMSlots
    this.objectValues.supportedRAMFormFactor = items.supportedRAMFormFactor
    this.objectValues.supportedTypeRAM = items.supportedTypeRAM
    this.objectValues.numberMemoryChannels = items.numberMemoryChannels
    this.objectValues.maxCapacityRAM = items.maxCapacityRAM
    this.objectValues.maxFrequencyRAM = items.maxFrequencyRAM
    this.objectValues.connector_M2_number = items.connector_M2_number
    this.objectValues.connector_M2_Type = items.connector_M2_Type
    this.objectValues.connector_sata_number = items.connector_sata_number
    this.objectValues.supportedSataRAID = items.supportedSataRAID
    this.objectValues.supportNWMe = items.supportNWMe
    this.objectValues["PCI-E_version"] = items["PCI-E_version"]
    this.objectValues["PCI-E_x16_number"] = items["PCI-E_x16_number"]
    this.objectValues["PCI-E_x1_number"] = items["PCI-E_x1_number"]
    this.objectValues.USBInterface = items.USBInterface
    this.objectValues.VideoInterface = items.VideoInterface
    this.objectValues.numberRJ45Interface = items.numberRJ45Interface
    this.objectValues.mainPowerConnector = items.mainPowerConnector
    this.objectValues.cpuPowerConnector = items.cpuPowerConnector
    this.objectValues.price = items.price
  },

  getMap() {
    let map = new Map();
    map
      .set(this.labels.model, this.objectValues.model)
      .set(this.labels.formFactor, this.objectValues.formFactor)
      .set(this.labels.socket, this.objectValues.socket)
      .set(this.labels.chipset, this.objectValues.chipset)
      .set(this.labels.supportedCPUCore, this.objectValues.supportedCPUCore)
      .set(this.labels.numberRAMSlots, this.objectValues.numberRAMSlots)
      .set(this.labels.supportedRAMFormFactor, this.objectValues.supportedRAMFormFactor)
      .set(this.labels.supportedTypeRAM, this.objectValues.supportedTypeRAM)
      .set(this.labels.numberMemoryChannels, this.objectValues.numberMemoryChannels)
      .set(this.labels.maxCapacityRAM, this.objectValues.maxCapacityRAM)
      .set(this.labels.maxFrequencyRAM, this.objectValues.maxFrequencyRAM)
      .set(this.labels.connector_M2_number, this.objectValues.connector_M2_number)
      .set(this.labels.connector_M2_Type, this.objectValues.connector_M2_Type)
      .set(this.labels.connector_sata_number, this.objectValues.connector_sata_number)
      .set(this.labels.supportedSataRAID, this.objectValues.supportedSataRAID)
      .set(this.labels.supportNWMe, this.objectValues.supportNWMe)
      .set(this.labels["PCI-E_version"], this.objectValues["PCI-E_version"])
      .set(this.labels["PCI-E_x16_number"], this.objectValues["PCI-E_x16_number"])
      .set(this.labels["PCI-E_x1_number"], this.objectValues["PCI-E_x1_number"])
      .set(this.labels.USBInterface, this.objectValues.USBInterface)
      .set(this.labels.VideoInterface, this.objectValues.VideoInterface)
      .set(this.labels.numberRJ45Interface, this.objectValues.numberRJ45Interface)
      .set(this.labels.mainPowerConnector, this.objectValues.mainPowerConnector)
      .set(this.labels.cpuPowerConnector, this.objectValues.cpuPowerConnector)
      .set(this.labels.price, this.objectValues.price);

    return map;
  },
});
