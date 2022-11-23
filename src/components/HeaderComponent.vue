<template>
    <div class="top">
        <div class="wrapper">
            <div class="top-logo"><a href="http://localhost:8080"><img src="@/assets/top-logo.png" alt="top-logo"></a></div>
            <nav class="menu-top">
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
.top {
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

.top-logo {

}

.menu-top {
    padding: 30px 0;
}

.menu-top>a {
    padding: 0 25px;
}
</style>