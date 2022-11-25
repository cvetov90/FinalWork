<template>
    <div class="background">
        <div class="select-area">
            <form>
                    <div class="select-message">{{ModalManualSelectMessage}}</div>
                    <div class="select-row" v-for="product in ModalManualSelectArray" :key="product.assemblyId">
                        <input type="radio" :id="product.assemblyId" name="products-group" :value="product"
                            v-model="ModalManualSelectResult">
                        <label class="label-row" :for="product.assemblyId">
                            <ProductCardModalManualSelect :productObject="product"></ProductCardModalManualSelect>
                        </label>
                    </div>
                    <div class="select-button-div">
                        <ButtonSelect @click="selectResultToAssembly"></ButtonSelect>
                    </div>
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
            ModalManualSelectResult: this.ModalManualSelectArray[0]
        }
    },
    methods: {
        selectResultToAssembly(event) {
            // console.log(`selected ${this.ModalManualSelectResult} : ${assembly.resultSelect}`)
            event.preventDefault()
            // assembly.resultSelect = this.ModalManualSelectResult
            this.ModalManualSelectArray.forEach(item => assembly.assembly.splice(assembly.assembly.indexOf(item), 1))
            assembly.add(this.ModalManualSelectResult)
            assembly.ModalManualSelectShowFlag = false
            document.body.style.overflow = 'auto';
            // assembly.checkAssembly()
        },
    },
    created(){
        document.body.style.overflow = 'hidden';
    }
}
</script>

<style scoped>
.background {
    z-index: 999;
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    background: rgba(15, 13, 13, 0.4);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }

.select-area {
    position: absolute;
    overflow: auto;
    top: 10%;
    margin: 0 20%;
    /* left: 20%; */
    background: rgba(255, 255, 255, 1);
    /* height: 70%; */
    /* width: 60%; */
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.select-message{
padding: 40px 5px 30px;
font-weight: bold;
}

.select-row {
    display: flex;
}

.label-row {
    width: 100%;
    /* margin: 10px; */
}

.select-button-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 5px 40px;
}
</style>