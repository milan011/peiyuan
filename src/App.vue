<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a-layout class="layout">
    <Header />
    <!-- <a-layout-content class="layout-content">
      <main class="main-content">
        <router-view />
      </main>
    </a-layout-content> -->
    <router-view />
    <Footer />
  </a-layout>
</template>

<style scoped>
:root {
  --primary-color: #389e0d;
  --secondary-color: #7cb305;
  --light-color: #f6ffed;
  --dark-color: #135200;
  --text-color: #333;
  --text-light: #666;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  line-height: 1.6;
}

.layout {
  min-height: 100vh;
}

.layout-content {
  padding: 24px;
  background: #fff;
}

.main-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}

/* 响应式调整 */
@media (max-width: 1080px) {
  .main-content {
    padding: 1.5rem;
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
  
  .layout-content {
    margin-top: 120px; /* 移动端头部更高 */
  }
}
</style>
