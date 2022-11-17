<template>
  <!-- <button @click="showModal = !showModal">showModal</button> -->
  <ModalProductSelect v-show="assembly.showSelectModal" :productsForSelect="assembly.manualSelectArray"></ModalProductSelect>
  {{assembly.resultSelect}}

  <div class="row">
    <CatalogComponent></CatalogComponent>
    <ConfiguratorComponent></ConfiguratorComponent>
  </div>
</template>
<script>
import {assembly} from '@/models/assembly'
import ModalProductSelect from '@/components/ModalProductSelect.vue'
import CatalogComponent from '@/components/CatalogComponent.vue'
import ConfiguratorComponent from '@/components/ConfiguratorComponent.vue';

export default {
  name: "СonfiguratorView",
  components: {
    CatalogComponent,
    ConfiguratorComponent,
    ModalProductSelect
  },
  data() {
    return {
      assembly: assembly,
    }
  }
};
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
}
</style>