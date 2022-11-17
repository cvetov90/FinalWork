<template>
    <div class="background">
        <div class="select-area">
            <!-- <div v-for="product in productsForSelect" :key="product.assemblyId">
            <ProductCardModal :productObject="product"></ProductCardModal>
        </div> -->
            <form>
                <fieldset>
                    <legend>Please select your preferred contact method:</legend>
                    <div v-for="product in productsForSelect" :key="product.assemblyId">
                        <input type="radio" :id="product.assemblyId" name="products-group" :value="product"
                            v-model="result">
                        <label :for="product.assemblyId">
                            <ProductCardModal :productObject="product"></ProductCardModal>
                        </label>
                    </div>
                    <div>
                        <ButtonSelect @click="selectResultToAssembly"></ButtonSelect>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
import { assembly } from '@/models/assembly'
// import { assemblyErrors } from '@/models/assemblyErrors';
import ButtonSelect from './ButtonSelect.vue';
import ProductCardModal from './ProductCardModal.vue';

export default {
    name: 'ModalProductSelect',
    props: {
        productsForSelect: Array
    },
    components: {
        ButtonSelect,
        ProductCardModal
    },
    data() {
        return {
            result: {}
        }
    },
    methods: {
        selectResultToAssembly(event) {
            // console.log(`selected ${this.result} : ${assembly.resultSelect}`)
            event.preventDefault()
            // assembly.resultSelect = this.result
            this.productsForSelect.forEach(item => assembly.assembly.splice(assembly.assembly.indexOf(item), 1))
            assembly.assembly.push(this.result)
            assembly.showSelectModal = false
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