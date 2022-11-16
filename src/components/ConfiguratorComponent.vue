<template>
  <div class="column">
    <div>Ошибки и предупреждения</div>
    <div v-for="error in errors" :key="error">
      <div>{{ error.errorType }} : {{error.errorMessage}}</div>
    </div>
  </div>
  <div class="col-3 configurator">
    <h3>Конфигуратор ПК</h3>
    <draggable class="list-group list-group-constructor container" :list="assembly" group="product"
      @change="checkComputerAssembly" itemKey="assemblyId">
      <template #item="{ element }">
        <ProductCardConfigurator :product-object="element"></ProductCardConfigurator>
      </template>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import {assembly} from '@/models/assembly'
// import { DataStore } from '@/DataStore.js'
import ProductCardConfigurator from '@/components/ProductCardConfigurator.vue'
import {assemblyErrors} from '@/models/assemblyErrors'
// import { productTypeList } from '@/models/productTypeList'
// import { productTypeList } from '@/models/productTypeList';

export default {
  name: "СonfiguratorComponent",
  display: "clone",
  order: 2,
  components: {
    draggable,
    ProductCardConfigurator,
  },
  data() {
    return {
      // list2: [],
      assembly: assembly.get(),
      assemblyCpuLast: {},
      assemblyMotherboardLast: {},
      assemblyPowerSupplyLast: {},
      assemblyComputerCaseLast: {},
      errors: assemblyErrors.get()
      // data: DataStore,
      // productTypeList: productTypeList
    };
  },
  methods: {
    // add: function () {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function () {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function (el) {
    //   return {
    //     name: el.name + " cloned"
    //   };
    // },
    log: function (evt) {
      window.console.log(evt);
    },
    // searchProductType: function (element) {
    //   for (let key in this.data) {
    //     if (this.data[key].includes(element) == true)
    //       return key
    //   }
    // },
    checkComputerAssembly: function (evt) {
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
      if (evt.moved) {
        this.log(evt)
        return false
      }

      if(this.assembly.length == 0) {
        assemblyErrors.clear()
      }

      let assemblyMotherboards = this.assembly.filter(item => item.productType == 'motherboard')
      let assemblyPowerSupply = this.assembly.filter(item => item.productType == 'powerSupply')
      let assemblyComputerCases = this.assembly.filter(item => item.productType == 'computerCase')
      let assemblyCpu = this.assembly.filter(item => item.productType == 'cpu')
      let assemblyRam = this.assembly.filter(item => item.productType == 'ram')
      let assemblyHdd = this.assembly.filter(item => item.productType == 'hdd')
      let assemblySsd = this.assembly.filter(item => item.productType == 'ssd')

      let setAssemblyCpuLast = () => { if (evt.added.element.productType == 'cpu') { return evt.added.element } else return this.assemblyCpuLast }
      this.assemblyCpuLast = setAssemblyCpuLast()
      let setAssemblyMotherboardLast = () => { if (evt.added.element.productType == 'motherboard') { return evt.added.element } else return this.assemblyMotherboardLast }
      this.assemblyMotherboardLast = setAssemblyMotherboardLast()
      let setAssemblyPowerSupplyLast = () => { if (evt.added.element.productType == 'powerSupply') { return evt.added.element } else return this.assemblyPowerSupplyLast }
      this.assemblyPowerSupplyLast = setAssemblyPowerSupplyLast()
      let setAssemblyComputerCaseLast = () => { if (evt.added.element.productType == 'computerCase') { return evt.added.element } else return this.assemblyComputerCaseLast }
      this.assemblyComputerCaseLast = setAssemblyComputerCaseLast()

      if (assemblyMotherboards.length > 1) {
        assemblyMotherboards.forEach(item => this.assembly.splice(this.assembly.indexOf(item), 1))
        this.assembly.push(this.assemblyMotherboardLast)
        assemblyErrors.add("error", "Сборка может содержать только одну материнскую плату")
        console.log("Сборка может содержать только одну материнскую плату")
        this.checkComputerAssembly(evt)
      }
      else if (assemblyMotherboards.length == 1) {
        if (assemblyCpu.length == 1) {
          if (assemblyMotherboards[0].socket != assemblyCpu[0].socket) {
            console.log("Сокет мат. платы и процессора должны совадать")
          }
          if (!(assemblyMotherboards[0].supportedCPUCore.includes(assemblyCpu[0].cpuCore))) {
            console.log("Материнская плата не поддерживает ядро процессора")
          }
          if (assemblyCpu[0].numberMemoryChannels < assemblyMotherboards[0].numberMemoryChannels) {
            console.log("Количество каналов оперативной памяти, поддерживаемых процессором, меньше, чем количество каналов оперативной памяти на материнской плате")
          }
          if (!(parseInt(assemblyCpu[0].maxCapacityRAM.match(/\d+/)) >= parseInt(assemblyMotherboards[0].maxCapacityRAM.match(/\d+/)))) {
            console.log("Объем оперативной памяти, поддерживаемой процессором, меньше, чем поддурживаемый материнской платой")
          }
          if (!(parseInt(assemblyCpu[0].maxFrequencyRAM.match(/\d+/)) >= parseInt(assemblyMotherboards[0].maxFrequencyRAM.match(/\d+/)))) {
            console.log("Максимальная частота оператиыной памяти, поддерживаемая процессором, меньше чем поддерживаемая материнской платой")
          }
        }
        else if (assemblyCpu.length > 1) {
          if (assemblyMotherboards.filter(item => item.supportedNumberCPU > 1).length == 0) {
            assemblyCpu.forEach(item => { this.assembly.splice(this.assembly.indexOf(item), 1) })
            this.assembly.push(this.assemblyCpuLast)
            console.log('Материнская плата поддурживает только один процессор')
            this.checkComputerAssembly(evt)
          }
        }

        if (assemblyRam.length >= 1) {
          let ramCapasitySum = 0
          assemblyRam.forEach(item => {
            if (!(assemblyMotherboards[0].supportedTypeRAM.includes(item.typeRAM))) {
              console.log(`Тип оперативной памяти (${item.typeRAM}) модуля памяти ${item.model} не поддерживается материнской платой`)
            }
            if (assemblyMotherboards[0].supportedRAMFormFactor != item.formFactor) {
              console.log(`Форм-фактор (${item.formFactor}) модуля оперативной памяти ${item.model} не поддерживается материнской платой`)
            }
            ramCapasitySum += parseInt(item.capacity.match(/\d+/))
          })
          if (ramCapasitySum > parseInt(assemblyMotherboards[0].maxCapacityRAM.match(/\d+/))) {
            console.log("Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый материнской платой")
          }
          if ((assemblyCpu.length == 1) && (ramCapasitySum > parseInt(assemblyCpu[0].maxCapacityRAM.match(/\d+/)))) {
            console.log("Суммарный объем оперативной памяти в сборке больше, чем поддерживаемый процессором")
          }
        }
        if (assemblyRam.length > assemblyMotherboards[0].numberRAMSlots) {
          console.log("В сборке больше модулей оперативной памяти, чем слотов на материнской плате. Удалите чать модулей памяти")
        }

        if (assemblyPowerSupply.length == 1) {
          if (assemblyMotherboards[0].mainPowerConnector == "24-pin") {
            if (!(assemblyPowerSupply[0].connector_20_4_pin > 0)) {
              console.log(`Блок питаня ${assemblyPowerSupply[0].model} не имеет разъёма 20+4 pin для обеспечения питания материнской платы`)
            }
          }
          if (assemblyMotherboards[0].cpuPowerConnector == "4-pin") {
            if (!((assemblyPowerSupply[0].connector_4_pin_cpu > 0) || (assemblyPowerSupply[0].connector_4_4_pin_cpu > 0))) {
              console.log(`Блок питаня ${assemblyPowerSupply[0].model} не имеет разъёма 4-pin для подключения питания процессора на материнской плате`)
            }
          }
          if (assemblyMotherboards[0].cpuPowerConnector == "8-pin") {
            if (!((assemblyPowerSupply[0].connector_8_pin_cpu > 0) || (assemblyPowerSupply[0].connector_4_4_pin_cpu > 0))) {
              console.log(`Блок питаня ${assemblyPowerSupply[0].model} не имеет разъёма 8-pin для подключения питания процессора на материнской плате`)
            }
          }
        }

        if ((assemblyHdd.filter(item => item.interface == "SATA III").length + assemblySsd.filter(item => item.interface == "SATA III").length) > assemblyMotherboards[0].connector_sata_number) {
          console.log("Количество устройств с интерфейсом SATA в сборке больше, чем поддурживается материнской платой")
        }
      }

      if (assemblyPowerSupply.length > 1) {
        assemblyPowerSupply.forEach(item => this.assembly.splice(this.assembly.indexOf(item), 1))
        this.assembly.push(this.assemblyPowerSupplyLast)
        console.log("Сборка может содержать только один блок питания")
        this.checkComputerAssembly(evt)
      }
      else if (assemblyPowerSupply.length == 1) {
        if ((assemblyHdd.filter(item => item.interface == "SATA III").length + assemblySsd.filter(item => item.interface == "SATA III").length) > assemblyPowerSupply[0].connector_15_pin_sata) {
          console.log("Количество устройств с интерфейсом SATA в сборке больше, чем можно подключить к блоку питания")
        }
      }

      if (assemblyComputerCases.length > 1) {
        assemblyComputerCases.forEach(item => this.assembly.splice(this.assembly.indexOf(item), 1))
        console.log(this.assemblyComputerCaseLast)
        this.assembly.push(this.assemblyComputerCaseLast)
        console.log("Сборка может содержить только один корпус")
        this.checkComputerAssembly(evt)
      }


      // Неправильно выбирается модель данных для опаисания
      if ((assemblyCpu.length > 0) && (assemblyRam.length > 0)) {
        assemblyCpu.forEach(cpu => {
          assemblyRam.forEach(ram => {
            if (!(cpu.supportedTypeRAM.includes(ram.typeRAM))) {
              assemblyErrors.add("error", `Процессор ${cpu.model} не поддерживает тип ${ram.typeRAM} модуля оперативной памяти ${ram.model}`)
              console.log(`Процессор ${cpu.model} не поддерживает тип ${ram.typeRAM} модуля оперативной памяти ${ram.model}`)
            }
          })
        })
      }
    }
  }
}
</script>

<style>
.list-group {
  border: 1px solid black;
}

.list-group-constructor {
  min-height: 70vh;
}

.container,
.row {
  display: flex;
  flex-direction: row;
}

.col-3 {
  width: 50%;
}

.configurator {
  position: fixed;
  right: 0;
}

.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
}
</style>