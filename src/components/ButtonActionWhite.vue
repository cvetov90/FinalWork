<template>
    <ButtonBase class="button-add" :button-name="buttonName"></ButtonBase>
</template>

<script>
import ButtonBase from './ButtonBase.vue';
export default {
    name: 'ButtonActionWhite',
    components: {
        ButtonBase
    },
    props: {
        buttonName: String
    }
}
</script>

<style>
.button-add {
    border: #fe7200;
    background: white;
    color: #fe7200;
}

.button-add:hover {
    background: #fe7200;
    color: white;
}
</style>