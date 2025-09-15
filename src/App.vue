<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <Header />
    </a-layout-header>
    <a-layout-content class="layout-content">
      <main class="main-content">
        <router-view />
      </main>
    </a-layout-content>
    <a-layout-footer class="layout-footer">
      <Footer />
    </a-layout-footer>
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

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
/* 响应式调整 */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 10px 0;
  }
  
  .logo {
    margin-bottom: 10px;
  }
  
  .nav-menu {
    width: 100%;
    justify-content: center;
  }
  
  .main-content {
    margin-top: 120px;
  }
}
</style>
