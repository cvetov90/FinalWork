<template>
    <ButtonBase class="button-add" :button-name="buttonName"></ButtonBase>
</template>

<script>
import ButtonBase from './ButtonBase.vue';
export default {
    name: 'ButtonActionRed',
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
    background: rgb(248, 56, 56);
    color: white;
}

.button-add:hover {
    background: white;
    color: red;
}
</style>