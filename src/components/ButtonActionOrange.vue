<template>
    <ButtonBase class="button-add" :button-name="buttonName"></ButtonBase>
</template>

<script>
import ButtonBase from './ButtonBase.vue';
export default {
    name: 'ButtonActionOrange',
    components: {
        ButtonBase
    },
    props: {
        buttonName: String
    }
}
</script>

<style scoped>
.button-add {
    border: #fe7200;
    background: #fe7200;
    color: white;
}

.button-add:hover {
    background: white;
    color: #fe7200;
}
</style>