<template>
  <div class="column">
    <div>Ошибки и предупреждения</div>
    <div v-for="error in errors.errorsArray" :key="error">
      <div>{{ error.errorType }} : {{error.errorMessage}}</div>
    </div>
  </div>
</template>

<script>
import {assemblyErrors} from '@/models/assemblyErrors'
export default {
  name: "ErrorsComponent",
  data() {
    return {
      errors: assemblyErrors,
    };
  }
  }
</script>

<style>
.column {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: red;
}
</style>