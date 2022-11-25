<template>
    <button class="button-base">{{buttonName}}</button>
</template>

<script>
export default {
    name: 'ButtonBase',
    props: {
        buttonName: String,
    }
}
</script>

<style scoped>
.button-base 
{
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 5px;
}
</style>