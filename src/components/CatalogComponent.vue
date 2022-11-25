<template>
    <div class="col-3">
        <div class="catalog">
            <div class="catalog-menu-left">
                <div>
                    <h3>Каталог деталей</h3>
                </div>
                <div v-for="productType in Object.keys(data)" :key="productType">
                    <div><a  :class="{active: isCurentProductType(productType)}" href="#" @click="currentProductType = productType">{{
                            productTypeList.translate(productType)
                    }}</a></div>
                </div>
            </div>
            <div class="catalog-products">
                <draggable class="list-group container" :list="data[currentProductType]"
                    :group="{ name: 'product', pull: 'clone', put: false }" :clone="genAssemblyId" itemKey="id">
                    <template #item="{ element }">
                        <ProductCardCatalog :product-object="element"></ProductCardCatalog>
                    </template>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { DataStore } from '@/DataStore.js'
import ProductCardCatalog from '@/components/ProductCardCatalog.vue'
import { productTypeList } from '@/models/productTypeList'
let assemblyId = 1

export default {
    name: "CatalogComponent",
    components: {
        draggable,
        ProductCardCatalog,
    },
    data() {
        return {
            data: DataStore,
            productTypeList: productTypeList,
            show: false,
            currentProductType: 'motherboard'
        };
    },
    methods: {
        genAssemblyId: function (evt) {
            evt.assemblyId = assemblyId++
            return Object.assign({}, evt)
        },

        isCurentProductType(productType) {
            if(productType == this.currentProductType) {
                return true
            }
            else {
                return false
            }
        }
    }
}
</script>

<style scoped>
.list-group {
    /* border: 1px solid black; */
}

.list-group-constructor {
    min-height: 70vh;
}

.container,
.row {
    display: flex;
    flex-direction: column;
}

.col-3 {
    width: 58%;
    /* border: 1px solid black; */
    /* position: relative; */
}

.active {
    /* background: lightgray; */
    color: #fe7200;
}

/* .configurator {
    position: fixed;
    right: 0;
} */

.catalog {
    /* width: 50%; */
    display: flex;
}

.catalog-menu-left {
    width: 35%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
}

.catalog-menu-left>div {
    padding: 5px 0;
}

.catalog-products {
    width: 70%;
}
</style>