<template>
  <footer>
    <div class="v-footer v-footer-content">
      <div class="v-footer--logo">
        <RouterLink
          to="/"
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
        <a
          href="tel:+7 (495) 999-99-99"
          class="v-footer--contact-us_phone"
        >+7 (495) 999-99-99</a>
        <span class="v-footer--contact-us_geo">
        <i class="v-icon v-icon-geo" />
        <a
          href="https://goo.gl/maps/KHEcscxjd1SakKe4A"
          target="_blank"
        >
          <span>г. Воронеж, ул. Никитина, 119А</span>
        </a>
      </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
</script>