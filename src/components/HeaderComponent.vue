<template>
    <div class="header">
        <div class="wrapper">
            <div><router-link to="/"><img class="header-logo" src="@/assets/top-logo.png" alt="top-logo"></router-link></div>
            <nav class="header-menu">
                <MenuComponent></MenuComponent>
            </nav>
        </div>
    </div>
</template>

<script>
import MenuComponent from './MenuComponent.vue';

export default {
    name: "HeaderComponent",
    components: {
        MenuComponent
    }
}
</script>

<style> 
.header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.wrapper {
    width: 80%;
    border-bottom: 1px solid #dfdfe1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-logo {
    height: 100px;
}

.header-menu {
    padding: 30px 0;
}

.header-menu>a {
    padding: 0 25px;
}
</style>