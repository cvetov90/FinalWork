import { reactive } from "vue";

export const productTypeList = reactive({
  labels: {
        motherboard: "Материнские платы",
        cpu: "Процессоры",
        ram: "Оперативная память",
        powerSupply: "Блоки питания",
        hdd: "Жёсткие диски (hdd)",
        ssd: "Твердотельные накопители (ssd)",
        computerCase: "Корпуса"
  },

  translate(productType) {
    return this.labels[productType]
  }
});
