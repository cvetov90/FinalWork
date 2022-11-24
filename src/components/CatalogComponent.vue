<template>
    <div class="col-3">
        <div>
            <h3>Каталог деталей</h3>
        </div>
        <div v-for="productType in Object.keys(data)" :key="productType">
            <div class="product-type-string">{{ productTypeList.translate(productType) }}</div>
            <div>
                <draggable class="list-group container" :list="data[productType]"
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
            show: false
        };
    },
    methods: {
        genAssemblyId: function (evt) {
            evt.assemblyId = assemblyId++
            return Object.assign({}, evt)
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
    width: 50%;
    /* border: 1px solid black; */
    /* position: relative; */
}

.product-type-string {
    background: lightgray;
}

/* .configurator {
    position: fixed;
    right: 0;
} */
</style>