import { reactive } from "vue";
import { assemblyErrors } from "./assemblyErrors";

export const assembly = reactive({
  assembly: [],
  // assemblyPrice: 0,
  assemblyMotherboards() {
    return this.assembly.filter((item) => item.productType == "motherboard");
  },
  assemblyPowerSupply() {
    return this.assembly.filter((item) => item.productType == "powerSupply");
  },
  assemblyComputerCases() {
    return this.assembly.filter((item) => item.productType == "computerCase");
  },
  assemblyCpu() {
    return this.assembly.filter((item) => item.productType == "cpu");
  },
  assemblyRam() {
    return this.assembly.filter((item) => item.productType == "ram");
  },
  assemblyHdd() {
    return this.assembly.filter((item) => item.productType == "hdd");
  },
  assemblySsd() {
    return this.assembly.filter((item) => item.productType == "ssd");
  },
  ModalManualSelectArray: [],
  ModalManualSelectMessage: "",
  ModalManualSelectShowFlag: false,

  add(element) {
    this.assembly.push(element);
    assemblyErrors.clear();
    this.checkAssembly();
  },

  get() {
    return this.assembly;
  },

  delete(element) {
    this.assembly.splice(this.assembly.indexOf(element), 1);
    assemblyErrors.clear();
    this.checkAssembly();
  },

  clear() {
    this.assembly = [];
    this.assemblyPrice = 0
    assemblyErrors.clear();
  },

  // scrollConfigurator() {
  //   let block = document.getElementById('assembly-list')
  //   if (assemblyErrors.errorsArray.length) {
  //     block.scrollTop = 0
  //   }
  //   else {
  //     block.scrollTop = block.scrollHeight
  //   }
  // },

  calculateAssemblyPrice() {
    let assemblyPrice = 0
    this.assembly.forEach(item => assemblyPrice += Number(item.price.match(/\d+/)))
    return assemblyPrice + " рублей"
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

    if (this.assemblyMotherboards().length > 1) {
      this.ModalManualSelectArray = this.assemblyMotherboards();
      this.ModalManualSelectMessage =
        "В компьютере может быть установлена только одна материнская плата. Выберите наиболее подходящую плату из саиска:";
      this.ModalManualSelectShowFlag = true;
    } else if (this.assemblyMotherboards().length == 1) {
      if (this.assemblyCpu().length == 1) {
        if (
          this.assemblyMotherboards()[0].socket != this.assemblyCpu()[0].socket
        ) {
          assemblyErrors.add(
            "Ошибка",
            `Сокет материнской платы и процессора должны совпадать. Сокет материнской платы ${
              this.assemblyMotherboards()[0].model
            }: 
            ${this.assemblyMotherboards()[0].socket}. Сокет процессора ${
              this.assemblyCpu()[0].model
            }: ${this.assemblyCpu()[0].socket}. Выберите материнскую
            плату и процессор с одинаковым сокетом.`
          );
        }
        if (
          !this.assemblyMotherboards()[0].supportedCPUCore.includes(
            this.assemblyCpu()[0].cpuCore
          )
        ) {
          assemblyErrors.add(
            "Ошибка",
            `Материнская плата не поддерживает ядро процессора. Ядра, поддерживаемые материнской платой ${
              this.assemblyMotherboards()[0].model
            }: 
            ${
              this.assemblyMotherboards()[0].supportedCPUCore
            }. Ядро процессора ${this.assemblyCpu()[0].model}: ${
              this.assemblyCpu()[0].cpuCore
            }. Выберите процессор с ядром, 
            поддерживаемым материнской платой, или замените материнскую плату на плату, поддерживающую ядро процессора ${
              this.assemblyCpu()[0].cpuCore
            }`
          );
        }
        if (
          this.assemblyCpu()[0].numberMemoryChannels <
          this.assemblyMotherboards()[0].numberMemoryChannels
        ) {
          assemblyErrors.add(
            "Предупреждение",
            `Количество каналов оперативной памяти, поддерживаемых процессором, меньше, чем количество каналов оперативной памяти на материнской плате. 
            Процессор ${this.assemblyCpu()[0].model} поддерживает ${
              this.assemblyCpu()[0].numberMemoryChannels
            } канала памяти. На материнской плате ${
              this.assemblyMotherboards()[0].model
            } 
            реализовано ${
              this.assemblyMotherboards()[0].numberMemoryChannels
            } каналов памяти. Рекаомендуется установить процессор с поддержкой не менее ${
              this.assemblyMotherboards()[0].numberMemoryChannels
            } 
            каналов памяти`
          );
        }
        if (
          !(
            parseInt(this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/)) >=
            parseInt(this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/))
          )
        ) {
          assemblyErrors.add(
            "Предупреждение",
            `Объем оперативной памяти, поддерживаемой процессором, меньше, чем поддурживаемый материнской платой. Процессор ${
              this.assemblyCpu()[0].model
            } 
            поддерживает ${parseInt(
              this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/)
            )} ГБ. Материнская плата ${
              this.assemblyMotherboards()[0].model
            } поддерживает 
            ${parseInt(
              this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/)
            )} ГБ. Рекомендуется установить процессор с поддержкой не менее ${parseInt(
              this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/)
            )}
             ГБ оперативной памяти.`
          );
        }
        if (
          !(
            parseInt(this.assemblyCpu()[0].maxFrequencyRAM.match(/\d+/)) >=
            parseInt(
              this.assemblyMotherboards()[0].maxFrequencyRAM.match(/\d+/)
            )
          )
        ) {
          assemblyErrors.add(
            "Предупреждение",
            `Максимальная частота оператиыной памяти, поддерживаемая процессором, меньше чем поддерживаемая материнской платой. Процессор ${
              this.assemblyCpu()[0].model
            } 
            поддерживает память с частотой до ${parseInt(
              this.assemblyCpu()[0].maxFrequencyRAM.match(/\d+/)
            )} МГц. Материнская плата ${this.assemblyMotherboards()[0].model} 
            поддерживает память с частотой до ${parseInt(
              this.assemblyMotherboards()[0].maxFrequencyRAM.match(/\d+/)
            )} МГц. Рекомендуется установить процессор, поддерживающий 
            оперативную память с частотой до ${parseInt(
              this.assemblyMotherboards()[0].maxFrequencyRAM.match(/\d+/)
            )} МГц`
          );
        }
      } else if (this.assemblyCpu().length > 1) {
        if (
          this.assemblyMotherboards().filter(
            (item) => item.supportedNumberCPU > 1
          ).length == 0
        ) {
          this.ModalManualSelectArray = this.assemblyCpu();
          this.ModalManualSelectMessage = `Материнская плата ${
            this.assemblyMotherboards()[0].model
          } поддурживает только один процессор. Выберите процессор из списка:`;
          this.ModalManualSelectShowFlag = true;
        }
      }

      if (this.assemblyRam().length >= 1) {
        let ramCapasitySum = 0;
        this.assemblyRam().forEach((item) => {
          if (
            !this.assemblyMotherboards()[0].supportedTypeRAM.includes(
              item.typeRAM
            )
          ) {
            assemblyErrors.add(
              "Ошибка",
              `Тип оперативной памяти не поддерживается материнской платой. Материнская плата ${
                this.assemblyMotherboards()[0].model
              } 
              поддерживает оперативную память ${
                this.assemblyMotherboards()[0].supportedTypeRAM
              }. Тип оперативной памяти модуля памяти ${item.model}:  ${
                item.typeRAM
              }.
              Замените указаный модуль оперативной памяти.`
            );
          }
          if (
            this.assemblyMotherboards()[0].supportedRAMFormFactor !=
            item.formFactor
          ) {
            assemblyErrors.add(
              "Ошибка",
              `Форм-фактор оперативной памяти не поддерживается материнской платой. Материнская плата ${
                this.assemblyMotherboards()[0].model
              } 
              поддерживает оперативную память с форм-фактором ${
                this.assemblyMotherboards()[0].supportedRAMFormFactor
              }. Форм-фактор модуля оперативной памяти ${item.model}: ${
                item.formFactor
              }
              Замените указаный модуль оперативной памяти.`
            );
          }
          ramCapasitySum += parseInt(item.capacity.match(/\d+/));
        });
        if (
          ramCapasitySum >
          parseInt(this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/))
        ) {
          assemblyErrors.add(
            "Ошибка",
            `Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый материнской платой. Установлено ${ramCapasitySum} ГБ оперативной памяти.
            Материнская плата ${
              this.assemblyMotherboards()[0].model
            } поддерживает ${parseInt(
              this.assemblyMotherboards()[0].maxCapacityRAM.match(/\d+/)
            )} ГБ оперативной памяти.
            Уменьшите количество модулей оперативной памяти в сборке.`
          );
        }
        if (
          this.assemblyCpu().length == 1 &&
          ramCapasitySum >
            parseInt(this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/))
        ) {
          assemblyErrors.add(
            "Ошибка",
            `Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый процессором. Установлено ${ramCapasitySum} ГБ оперативной памяти.
            Процессор ${this.assemblyCpu()[0].model} поддерживает ${parseInt(
              this.assemblyCpu()[0].maxCapacityRAM.match(/\d+/)
            )} ГБ оперативной памяти. Уменьшите количество модулей оперативной памяти в сборке.`
          );
        }
      }
      if (
        this.assemblyRam().length >
        this.assemblyMotherboards()[0].numberRAMSlots
      ) {
        assemblyErrors.add(
          "Ошибка",
          `В сборке больше модулей оперативной памяти, чем слотов на материнской плате. Установлено ${
            this.assemblyRam().length
          } модулей
          оперативной памяти. На материнской плате ${
            this.assemblyMotherboards()[0].model
          } имеется ${
            this.assemblyMotherboards()[0].numberRAMSlots
          } слотов для установки
          оперативной памяти. Уменьшите количество модулей оперативной памяти в сборке.`
        );
      }

      if (this.assemblyPowerSupply().length == 1) {
        if (this.assemblyMotherboards()[0].mainPowerConnector == "24-pin") {
          if (!(this.assemblyPowerSupply()[0].connector_20_4_pin > 0)) {
            assemblyErrors.add(
              "Ошибка",
              `Блок питаня ${
                this.assemblyPowerSupply()[0].model
              } не имеет разъёма 20+4 pin для обеспечения питания материнской платы`
            );
          }
        }
        if (this.assemblyMotherboards()[0].cpuPowerConnector == "4-pin") {
          if (
            !(
              this.assemblyPowerSupply()[0].connector_4_pin_cpu > 0 ||
              this.assemblyPowerSupply()[0].connector_4_4_pin_cpu > 0
            )
          ) {
            assemblyErrors.add(
              "Ошибка",
              `Блок питаня ${
                this.assemblyPowerSupply()[0].model
              } не имеет разъёма 4-pin для подключения питания процессора на материнской плате`
            );
          }
        }
        if (this.assemblyMotherboards()[0].cpuPowerConnector == "8-pin") {
          if (
            !(
              this.assemblyPowerSupply()[0].connector_8_pin_cpu > 0 ||
              this.assemblyPowerSupply()[0].connector_4_4_pin_cpu > 0
            )
          ) {
            assemblyErrors.add(
              "Ошибка",
              `Блок питаня ${
                this.assemblyPowerSupply()[0].model
              } не имеет разъёма 8-pin для подключения питания процессора на материнской плате`
            );
          }
        }
      }

      if (
        this.assemblyHdd().filter((item) => item.interface == "SATA III")
          .length +
          this.assemblySsd().filter((item) => item.interface == "SATA III")
            .length >
        this.assemblyMotherboards()[0].connector_sata_number
      ) {
        assemblyErrors.add(
          "Ошибка",
          `Количество устройств с интерфейсом SATA в сборке больше, чем поддерживается материнской платой. Установлено ${
            this.assemblyHdd().filter((item) => item.interface == "SATA III")
              .length +
            this.assemblySsd().filter((item) => item.interface == "SATA III")
              .length
          }
          устройств с интерфейсом SATA. Материнская плата ${
            this.assemblyMotherboards()[0].model
          } поддерживает подключение до ${
            this.assemblyMotherboards()[0].connector_sata_number
          } устройств с интерфейсом SATA.
          Удалите часть устройств с интерфейсом SATA из сборки.`
        );
      }
    }

    if (this.assemblyPowerSupply().length > 1) {
      this.ModalManualSelectArray = this.assemblyPowerSupply();
      this.ModalManualSelectMessage =
        "В компьютере может быть установлен только одна блок питания. Выберите наиболее подходящий блок питания из списка:";
      this.ModalManualSelectShowFlag = true;
    } else if (this.assemblyPowerSupply().length == 1) {
      if (
        this.assemblyHdd().filter((item) => item.interface == "SATA III")
          .length +
          this.assemblySsd().filter((item) => item.interface == "SATA III")
            .length >
        this.assemblyPowerSupply()[0].connector_15_pin_sata
      ) {
        assemblyErrors.add(
          "Ошибка",
          `Количество устройств с интерфейсом SATA в сборке больше, чем можно подключить к блоку питания. Установлено ${
            this.assemblyHdd().filter((item) => item.interface == "SATA III")
              .length +
            this.assemblySsd().filter((item) => item.interface == "SATA III")
              .length
          }
          устройств с интерфейсом SATA. Блок питания ${
            this.assemblyPowerSupply()[0].model
          } поддерживает подключение до ${
            this.assemblyPowerSupply()[0].connector_15_pin_sata
          } устройств с интерфейсом SATA.
          Удалите часть устройств с интерфейсом SATA из сборки.`
        );
      }
    }

    if (this.assemblyComputerCases().length > 1) {
      this.ModalManualSelectArray = this.assemblyComputerCases();
      this.ModalManualSelectMessage =
        "Сборка может содержать только один корпус. Выберите наиболее подходящий корпус из саиска:";
      this.ModalManualSelectShowFlag = true;
    }

    if (this.assemblyCpu().length > 0 && this.assemblyRam().length > 0) {
      this.assemblyCpu().forEach((cpu) => {
        this.assemblyRam().forEach((ram) => {
          if (!cpu.supportedTypeRAM.includes(ram.typeRAM)) {
            assemblyErrors.add(
              "Ошибка",
              `Процессор не поддерживает тип оперативной памяти. Процессор ${cpu.model} поддерживает оперативную память 
              ${cpu.supportedTypeRAM}. Тип модуля оперативной памяти ${ram.model}: ${ram.typeRAM}. Замените указаный модуль памяти.`
            );
          }
        });
      });
    }

    assemblyErrors.setToArray();
  },
});
