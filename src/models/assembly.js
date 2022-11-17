import { reactive } from "vue";
import { assemblyErrors } from "./assemblyErrors";

export const assembly = reactive({
  assembly: [],
  assemblyMotherboards() {return this.assembly.filter(item => item.productType == 'motherboard')},
  assemblyPowerSupply() {return this.assembly.filter(item => item.productType == 'powerSupply')},
  assemblyComputerCases() {return this.assembly.filter(item => item.productType == 'computerCase')},
  assemblyCpu() {return this.assembly.filter(item => item.productType == 'cpu')},
  assemblyRam() {return this.assembly.filter(item => item.productType == 'ram')},
  assemblyHdd() {return this.assembly.filter(item => item.productType == 'hdd')},
  assemblySsd() {return this.assembly.filter(item => item.productType == 'ssd')},
  ModalManualSelectArray: [],
  ModalManualSelectMessage: "",
  ModalManualSelectShowFlag: false,
  // resultSelect: {},
//   assemblyCpuLast: {},
//   assemblyMotherboardLast: {},
//   assemblyPowerSupplyLast: {},
//   assemblyComputerCaseLast: {},

  add(element) {
    this.assembly.push(element)
    assemblyErrors.clear()
    this.checkAssembly()
},

  get() {
    return this.assembly
  },
  
  delete(element) {
    this.assembly.splice(this.assembly.indexOf(element), 1)
    assemblyErrors.clear()
    this.checkAssembly()
},

  checkAssembly() {
      // !!! Проводить валидацию через фабричный метод.
      // !!! В ситуации, когда нежно выбрат какой компонент оставить в сборке, вывести модальное окно с запросом какой компонент оставить
      // !!! Написать функцию вывода ошибок и стили
      // Добавить кнопку удаления компонентов из сборки

      // Список проверок:
      // + 1) Количество материнских плат в сборке не должно превышать 1. 
      //      Реакция: вывести ошибку и подсветить все маатеринские платы
      // + 2) Количество процессоров в сборке не должно превышать допустимое для материнской платы
      //      Реакция: а) если мат плата есть в сборке, то вывести ошибку и подсветить все процессоры в сборке
      //                б) если мат платы нет в сборке, то просто добавить второй процессор к сборке
      // + 3) Количество блоков питания в сборке не должно превышать 1.
      //      Реакция: вывести ошибку и подсветить все блоки питания в сборке
      // + 4) Количество корпусов в сборке не должно превышать 1.
      //      Реакция: вывести ошибку и подсветить все корпуса в сборке
      // +/- 5) Сокет материской платы и процессора должны совмадать.
      //      Рекация: вывести ошибку, подсветить мат плату и процессор
      // +/- 6) Ядро процессора должно быть совместимо с мат платой.
      //      Реакция: вывести ошибку, подсветить мат плату и процессор
      // + 7) Тип и форм-фактор ОЗУ должен поддерживаться мат платой.
      //      Реакция: вывести ошибку, подсветить мат плату и ОЗУ
      // + 8) Количество добавленных модулей ОЗУ не должно превышать количество слотов на мат плате
      //      Реакция: вывести ошибку, подсветить мат плату и модули ОЗУ
      // + 9) Количество каналов памяти процессора должно быть больше либо равно чем на мат плате
      //       Рекация: вывести предупреждение, подсветит мат плату и процессор
      // + 10) Количество памяти поддерживаемой процессором должно быть больше либо равно поддерживаемому мат платой (чтобы сравнивать, нужно преобразовать строки в числа)
      //        Реакция: вывести предупреждение, подсветить мат плату и процессор
      // + 11) Количество добавленной в сбору ОЗУ должно быть меньше либо равно поддурживаемому мат платой
      //        Реакция: вывести предупреждение, подсветить ОЗУ и мат плату
      // +   Тоже самое для процессора
      // + 12) Частота памяти поддурживаемой процессором должна быть больше либо равна поддерживаемому мат платой
      //        Реакция: вывести предупреждение, подсветить ОЗУ и мат плату
      // ? 13) Частота ОЗУ в сборке должна быть меньше либо равна частоте поддерживаемой мат платой
      //        Реакция: если меньше, то вывести предупреждение, подсветить ОЗУ и мат плату
      // + 14) Количество устройств SATA в сборке должно быть меньше либо равно количеству SATA портов на мат плате
      //        Рекация: вывести ошибку, подсветить мат плату и SATA устройства
      // + 15) Количество устройств SATA в сборке должно быть меньше либо равно количеству SATA портов на блоке питания
      //        Реакция: вывести ошибку, подсветить мат блок питания и SATA устройства
      // + 16) Основной раъем питания мат платы должен быть на блоке питания
      //        Рекация: вывести ошибку, подсветить блок питания и мат плату
      // + 17) Разъем питания процессора должен быть на блоке питания
      //        Реакция: вывести ошибку, подсветить мат плату и блок питания
      // ! Добавить проверки разъемов питания компонентов и блока питания для каждлого компонента

      // 0) Проверка совместимости cpu и ram

      // Object.keys(DataStore).forEach(Type => {
      //   `${Type}` = this.assembly.filter(item => item.productType == `${Type}`)
      //   console.log(Type)
      // })


    //   let setAssemblyCpuLast = () => { if (evt.added.element.productType == 'cpu') { return evt.added.element } else return this.assemblyCpuLast }
    //   this.assemblyCpuLast = setAssemblyCpuLast()
    //   let setAssemblyMotherboardLast = () => { if (evt.added.element.productType == 'motherboard') { return evt.added.element } else return this.assemblyMotherboardLast }
    //   this.assemblyMotherboardLast = setAssemblyMotherboardLast()
    //   let setAssemblyPowerSupplyLast = () => { if (evt.added.element.productType == 'powerSupply') { return evt.added.element } else return this.assemblyPowerSupplyLast }
    //   this.assemblyPowerSupplyLast = setAssemblyPowerSupplyLast()
    //   let setAssemblyComputerCaseLast = () => { if (evt.added.element.productType == 'computerCase') { return evt.added.element } else return this.assemblyComputerCaseLast }
    //   this.assemblyComputerCaseLast = setAssemblyComputerCaseLast()

      if (this.assemblyMotherboards().length > 1) {
        this.ModalManualSelectArray = this.assemblyMotherboards()
        this.ModalManualSelectMessage = "Сборка может содержать только одну материнскую плату"
        this.ModalManualSelectShowFlag = true
        // assemblyErrors.add("error", "Сборка может содержать только одну материнскую плату")
        // console.log("Сборка может содержать только одну материнскую плату")

        // // this.assembly.push(this.assemblyMotherboardLast)
        // alert("Здесь должна быть модалка с выбором")

      }
      else if (this.assemblyMotherboards().length == 1) {
        if (this.assemblyCpu().length == 1) {
          if (this.assemblyMotherboards()[0].socket != this.assemblyCpu()[0].socket) {
            console.log("Сокет мат. платы и процессора должны совадать")
          }
          if (!(this.assemblyMotherboards()[0].supportedCPUCore.includes(this.assemblyCpu()[0].cpuCore))) {
            console.log("Материнская плата не поддерживает ядро процессора")
          }
          if (this.assemblyCpu()[0].numberMemoryChannels < this.assemblyMotherboards()[0].numberMemoryChannels) {
            console.log("Количество каналов оперативной памяти, поддерживаемых процессором, меньше, чем количество каналов оперативной памяти на материнской плате")
          }
          if (!(parseInt(this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/)) >= parseInt(this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/)))) {
            console.log("Объем оперативной памяти, поддерживаемой процессором, меньше, чем поддурживаемый материнской платой")
          }
          if (!(parseInt(this.assemblyCpu()[0].maxFrequencyRAM.match(/\d+/)) >= parseInt(this.assemblyMotherboards()[0].maxFrequencyRAM.match(/\d+/)))) {
            console.log("Максимальная частота оператиыной памяти, поддерживаемая процессором, меньше чем поддерживаемая материнской платой")
          }
        }
        else if (this.assemblyCpu().length > 1) {
          if (this.assemblyMotherboards().filter(item => item.supportedNumberCPU > 1).length == 0) {
            this.ModalManualSelectArray = this.assemblyCpu()
            this.ModalManualSelectMessage = "Материнская плата поддурживает только один процессор"
            this.ModalManualSelectShowFlag = true
            // this.assemblyCpu().forEach(item => { this.assembly.splice(this.assembly.indexOf(item), 1) })
            // // this.assembly.push(this.assemblyCpuLast)
            // alert("Здесь должна быть модалка с выбором")
            // console.log('Материнская плата поддурживает только один процессор')
            // this.checkAssembly()
          }
        }

        if (this.assemblyRam().length >= 1) {
          let ramCapasitySum = 0
          this.assemblyRam().forEach(item => {
            if (!(this.assemblyMotherboards()[0].supportedTypeRAM.includes(item.typeRAM))) {
              console.log(`Тип оперативной памяти (${item.typeRAM}) модуля памяти ${item.model} не поддерживается материнской платой`)
            }
            if (this.assemblyMotherboards()[0].supportedRAMFormFactor != item.formFactor) {
              console.log(`Форм-фактор (${item.formFactor}) модуля оперативной памяти ${item.model} не поддерживается материнской платой`)
            }
            ramCapasitySum += parseInt(item.capacity.match(/\d+/))
          })
          if (ramCapasitySum > parseInt(this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/))) {
            console.log("Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый материнской платой")
          }
          if ((this.assemblyCpu().length == 1) && (ramCapasitySum > parseInt(this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/)))) {
            console.log("Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый процессором")
          }
        }
        if (this.assemblyRam().length > this.assemblyMotherboards()[0].numberRAMSlots) {
          console.log("В сборке больше модулей оперативной памяти, чем слотов на материнской плате. Удалите чать модулей памяти")
        }

        if (this.assemblyPowerSupply().length == 1) {
          if (this.assemblyMotherboards()[0].mainPowerConnector == "24-pin") {
            if (!(this.assemblyPowerSupply()[0].connector_20_4_pin > 0)) {
              console.log(`Блок питаня ${this.assemblyPowerSupply()[0].model} не имеет разъёма 20+4 pin для обеспечения питания материнской платы`)
            }
          }
          if (this.assemblyMotherboards()[0].cpuPowerConnector == "4-pin") {
            if (!((this.assemblyPowerSupply()[0].connector_4_pin_cpu > 0) || (this.assemblyPowerSupply()[0].connector_4_4_pin_cpu > 0))) {
              console.log(`Блок питаня ${this.assemblyPowerSupply()[0].model} не имеет разъёма 4-pin для подключения питания процессора на материнской плате`)
            }
          }
          if (this.assemblyMotherboards()[0].cpuPowerConnector == "8-pin") {
            if (!((this.assemblyPowerSupply()[0].connector_8_pin_cpu > 0) || (this.assemblyPowerSupply()[0].connector_4_4_pin_cpu > 0))) {
              console.log(`Блок питаня ${this.assemblyPowerSupply()[0].model} не имеет разъёма 8-pin для подключения питания процессора на материнской плате`)
            }
          }
        }

        if ((this.assemblyHdd().filter(item => item.interface == "SATA III").length + this.assemblySsd().filter(item => item.interface == "SATA III").length) > this.assemblyMotherboards()[0].connector_sata_number) {
          console.log("Количество устройств с интерфейсом SATA в сборке больше, чем поддурживается материнской платой")
        }
      }

      if (this.assemblyPowerSupply().length > 1) {
        console.log(this.assemblyPowerSupply())
        this.ModalManualSelectArray = this.assemblyPowerSupply()
        this.ModalManualSelectMessage = "Сборка может содержать только один блок питания"
        this.ModalManualSelectShowFlag = true
        // this.assemblyPowerSupply().forEach(item => this.assembly.splice(this.assembly.indexOf(item), 1))
        // // this.assembly.push(this.assemblyPowerSupplyLast)
        // alert("Здесь должна быть модалка с выбором")
        // console.log("Сборка может содержать только один блок питания")
        // this.checkAssembly()
      }
      else if (this.assemblyPowerSupply().length == 1) {
        if ((this.assemblyHdd().filter(item => item.interface == "SATA III").length + this.assemblySsd().filter(item => item.interface == "SATA III").length) > this.assemblyPowerSupply()[0].connector_15_pin_sata) {
          console.log("Количество устройств с интерфейсом SATA в сборке больше, чем можно подключить к блоку питания")
        }
      }

      if (this.assemblyComputerCases().length > 1) {
        console.log(this.assemblyComputerCases())
        this.ModalManualSelectArray = this.assemblyComputerCases()
        this.ModalManualSelectMessage = "Сборка может содержить только один корпус"
        this.ModalManualSelectShowFlag = true
        // this.assemblyComputerCases().forEach(item => this.assembly.splice(this.assembly.indexOf(item), 1))
        // // console.log(this.assemblyComputerCaseLast)
        // // this.assembly.push(this.assemblyComputerCaseLast)
        // alert("Здесь должна быть модалка с выбором")
        // console.log("Сборка может содержить только один корпус")
        // this.checkAssembly()
      }


      // Неправильно выбирается модель данных для опаисания
      if ((this.assemblyCpu().length > 0) && (this.assemblyRam().length > 0)) {
        this.assemblyCpu().forEach(cpu => {
          this.assemblyRam().forEach(ram => {
            if (!(cpu.supportedTypeRAM.includes(ram.typeRAM))) {
              assemblyErrors.add("error", `Процессор ${cpu.model} не поддерживает тип ${ram.typeRAM} модуля оперативной памяти ${ram.model}`)
              console.log(`Процессор ${cpu.model} не поддерживает тип ${ram.typeRAM} модуля оперативной памяти ${ram.model}`)
            }
          })
        })
      }
  }
});
