<template>
  <div class="row">
    <CatalogComponent></CatalogComponent>
    <ConfiguratorComponent></ConfiguratorComponent>
  </div>
</template>
<script>
import CatalogComponent from '@/components/CatalogComponent.vue'
import ConfiguratorComponent from '@/components/ConfiguratorComponent.vue';

export default {
  name: "СonfiguratorView",
  components: {
    CatalogComponent,
    ConfiguratorComponent
  },
 };
</script>

<style>
.row {
  display: flex;
  flex-direction: row;
}
</style>