<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const currentMenu = ref(['home']);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// 监听路由变化，更新菜单选中状态
watch(() => route.path, (newPath) => {
  if (newPath === '/') currentMenu.value = ['home'];
  else if (newPath === '/about') currentMenu.value = ['about'];
  else if (newPath === '/products') currentMenu.value = ['products'];
  else if (newPath === '/news') currentMenu.value = ['news'];
  else if (newPath === '/contact') currentMenu.value = ['contact'];
}, { immediate: true });

// 导航函数
const navigateTo = (path) => {
  router.push(path);
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <a-layout-header class="layout-header">
    <div class="header-content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="绿源香菇logo">
        <div class="logo-text">培元农业</div>
      </div>
      <a-menu 
        v-model:selectedKeys="currentMenu" 
        mode="horizontal" 
        class="nav-menu"
        :style="{ borderBottom: 'none', lineHeight: '64px' }"
      >
        <a-menu-item key="home" @click="navigateTo('/')">首页</a-menu-item>
        <a-menu-item key="about" @click="navigateTo('/about')">关于我们</a-menu-item>
        <a-menu-item key="products" @click="navigateTo('/products')">产品中心</a-menu-item>
        <a-menu-item key="news" @click="navigateTo('/news')">新闻动态</a-menu-item>
        <a-menu-item key="contact" @click="navigateTo('/contact')">联系我们</a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
</template>

<style scoped>
.layout-header {
  padding: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  height: auto;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 10px 15px;
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