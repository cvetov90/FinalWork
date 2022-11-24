<template>
  <div>
    <div class="content">
      <ModalManualSelect v-if="assembly.ModalManualSelectShowFlag"
        :ModalManualSelectArray="assembly.ModalManualSelectArray"
        :ModalManualSelectMessage="assembly.ModalManualSelectMessage"></ModalManualSelect>

      <div class="row">
        <CatalogComponent></CatalogComponent>
        <ConfiguratorComponent></ConfiguratorComponent>
      </div>
    </div>
  </div>
</template>
<script>
import { assembly } from '@/models/assembly'
import ModalManualSelect from '@/components/ModalManualSelect.vue'
import CatalogComponent from '@/components/CatalogComponent.vue'
import ConfiguratorComponent from '@/components/ConfiguratorComponent.vue';

export default {
  name: "СonfiguratorView",
  components: {
    CatalogComponent,
    ConfiguratorComponent,
    ModalManualSelect
  },
  data() {
    return {
      assembly: assembly,
    }
  }
};
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    width: 80%;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>