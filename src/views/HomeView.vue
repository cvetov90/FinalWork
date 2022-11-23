<template>
  <div class="home">
    <h1>Итоговая работа</h1>
    <table class="info">
      <tr>
        <td>
          Курс:
        </td>
        <td>
          Веб-разработка
        </td>
      </tr>
      <tr>
        <td>Специализация:</td>
        <td>Frontend</td>
      </tr>
      <tr>
        <td>
          Студент:
        </td>
        <td>
          Цветов Григорий Владимирович
        </td>
      </tr>
    </table>
    <br>
    <h3>Образовательная организация: Академия "Цифра"</h3>
    <h3>город Ижевск, 2022 г.</h3>
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

.info {
  /* margin-left: auto; */
  /* margin-right: auto; */
  text-align: left;
}

td {
  font-size: 20px;
  padding: 10px;
}
</style>