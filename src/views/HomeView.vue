<template>
  <div class="home">
    <h1>Тема проекта: <br>«Разработка клиентской части сайта конфигуратора компьютера»</h1>
    <table class="info">
      <tr>
        <td class="bold">
          Студент:
        </td>
        <td>
          Цветов Григорий Владимирович
        </td>
      </tr>
      <tr>
        <td class="bold">
          Курс:
        </td>
        <td>
          Веб-разработка
        </td>
      </tr>
      <tr>
        <td class="bold">Направление обучения:</td>
        <td>Frontend-разработка</td>
      </tr>
      <tr>
        <td class="bold">Образовательная организация:</td>
        <td>Академия "Цифра"</td>
      </tr>
    </table>
    <br>
    <h3>Ижевск, 2022 г.</h3>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

h1 {
  text-align: center;
}
.info {
  /* margin-left: auto; */
  /* margin-right: auto; */
  text-align: left;
}

td {
  font-size: 20px;
  padding: 10px;
}

.bold {
  font-weight: bold;
}
</style>