<template>
  <footer>
    <div class="v-footer v-footer-content">
      <div class="v-footer--logo">
        <RouterLink
          to=""
          class="v-icon v-icon-footer-logo"
        />
      </div>
      <nav class="v-footer--nav">
        <RouterLink
          class="v-link"
          to="/">Каталог</RouterLink>
        <RouterLink
          class="v-link"
          to="/">Доставка</RouterLink>
        <RouterLink
          class="v-link"
          to="/">Оплата</RouterLink>
        <RouterLink
          class="v-link"
          to="/">Контакт</RouterLink>
        <RouterLink
          class="v-link"
          to="/">Галерея</RouterLink>
      </nav>
      <div class="v-footer--contact-us">
        <span class="v-footer--contact-us_phone">+7 (495) 999-99-99</span>
        <span class="v-footer--contact-us_geo">
        <i class="v-icon v-icon-geo" />
        <span>г. Воронеж, ул. Никитина, 119А</span>
      </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "vFooter"
};
</script>

<style scoped>

</style>