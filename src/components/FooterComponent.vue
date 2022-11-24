<template>
    <footer class="footer">
        <div class="footer-info footer-block-position">
            <div class="footer-info-link">
                <div>
                    <h3>Разделы сайта</h3>
                </div>
                <div class="footer-info-link-list">
                    <MenuComponent></MenuComponent>
                </div>
            </div>
            <div class="footer-info-contact">
                <div>
                    <h3>Контакты</h3>
                </div>
                <div><a href="tel:+79090626904" target="_blank">Телефон +7 (909) 062-69-04</a></div>
                <div><a href="https://t.me/g_cvetov" target="_blank"><img class="messenger-img"
                            src="@/assets/telegram.png" alt="telegram.png"></a></div>
            </div>
        </div>
        <div class="footer-copyright footer-block-position">
            <div> © Цветов Григорий Владимирович, 2022 </div>
        </div>
    </footer>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue'

export default {
    name: "FooterComponent",
    components: {
        MenuComponent
    }
}
</script>

<style>
.footer {
    /* position: relative; */
    /* left: 0; */
    /* bottom: 0; */
    width: 100%;
    text-align: left;
    background: #f5f5f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin-bottom: -280px; */
}

.footer-block-position {
    width: 90%;
    padding: 20px 0;
}

.footer-info {
    border-bottom: 1px solid #dfdfe1;
    display: flex;
    padding-bottom: 10px;
}

.footer-info-link {
    padding: 0;
}

.footer-info-link-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.footer-info-link-list {
    display: flex;
    flex-direction: column;
}

.footer-info-link-list>a {
    padding-bottom: 10px;
}

.footer-info-contact {
    position: absolute;
    right: 10%;
}

.messenger-img {
    width: 25px;
    height: 25px;
    padding: 10px 0;
}

.footer-copyright {
    padding-bottom: 30px;
}
</style>
  