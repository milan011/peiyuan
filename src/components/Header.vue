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

// 处理滚动效果
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// 导航函数
const navigateTo = (path) => {
  router.push(path);
  isMobileMenuOpen.value = false;
};

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <img src="@/assets/logo.png" alt="绿源香菇logo">
        <div class="logo-text">绿源香菇</div>
      </div>
      <a-menu v-model:selectedKeys="currentMenu" mode="horizontal" class="nav-menu">
        <a-menu-item key="home" @click="navigateTo('/')">首页</a-menu-item>
        <a-menu-item key="about" @click="navigateTo('/about')">关于我们</a-menu-item>
        <a-menu-item key="products" @click="navigateTo('/products')">产品中心</a-menu-item>
        <a-menu-item key="news" @click="navigateTo('/news')">新闻动态</a-menu-item>
        <a-menu-item key="contact" @click="navigateTo('/contact')">联系我们</a-menu-item>
      </a-menu>
    </div>
  </header>
</template>

<style scoped>
/* Header 样式 */
.header {
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 15px 0;
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

.nav-menu {
  border-bottom: none;
}
</style>