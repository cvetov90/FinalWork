<template>
    <div class="background">
        <div class="select-area">
            <!-- <div v-for="product in ModalManualSelectArray" :key="product.assemblyId">
            <ProductCardModalManualSelect :productObject="product"></ProductCardModalManualSelect>
        </div> -->
            <form>
                <!-- <fieldset> -->
                    <div>{{ModalManualSelectMessage}}</div>
                    <div v-for="product in ModalManualSelectArray" :key="product.assemblyId">
                        <input type="radio" :id="product.assemblyId" name="products-group" :value="product"
                            v-model="ModalManualSelectResult">
                        <label :for="product.assemblyId">
                            <ProductCardModalManualSelect :productObject="product"></ProductCardModalManualSelect>
                        </label>
                    </div>
                    <div>
                        <ButtonSelect @click="selectResultToAssembly"></ButtonSelect>
                    </div>
                <!-- </fieldset> -->
            </form>
        </div>
    </div>
</template>

<script>
import { assembly } from '@/models/assembly'
// import { assemblyErrors } from '@/models/assemblyErrors';
import ButtonSelect from './ButtonSelect.vue';
import ProductCardModalManualSelect from './ProductCardModalManualSelect.vue';

export default {
    name: 'ModalManualSelect',
    props: {
        ModalManualSelectArray: Array,
        ModalManualSelectMessage: String
    },
    components: {
        ButtonSelect,
        ProductCardModalManualSelect
    },
    data() {
        return {
            ModalManualSelectResult: {}
        }
    },
    methods: {
        selectResultToAssembly(event) {
            // console.log(`selected ${this.ModalManualSelectResult} : ${assembly.resultSelect}`)
            event.preventDefault()
            // assembly.resultSelect = this.ModalManualSelectResult
            this.ModalManualSelectArray.forEach(item => assembly.assembly.splice(assembly.assembly.indexOf(item), 1))
            assembly.assembly.push(this.ModalManualSelectResult)
            assembly.ModalManualSelectShowFlag = false
            assembly.checkAssembly()
        }
    }
}
</script>

<style>
.background {
    z-index: 999;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(15, 13, 13, 0.4);
    min-width: 100%;
    min-height: 100vh;
}

.select-area {
    background: rgba(255, 255, 255, 1);
    width: 30%;
    margin-left: 50%;
    margin-right: 50%;
    margin-top: 200px;
    /* margin-bottom: 50%; */
}
</style>