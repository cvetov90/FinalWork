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
    /* padding: 5px 10px; */
    border: #fe7200;
    background: rgb(248, 56, 56);
    color: white;
    /* border-radius: 5px; */
}

.button-add:hover {
    background: white;
    color: red;
}
</style>