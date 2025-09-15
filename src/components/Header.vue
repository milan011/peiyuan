<script setup></script>

<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <img src="https://via.placeholder.com/40" alt="绿源香菇logo" />
        <div class="logo-text">绿源香菇</div>
      </div>
      <a-menu
        v-model:selectedKeys="currentMenu"
        mode="horizontal"
        class="nav-menu"
      >
        <a-menu-item key="home">首页</a-menu-item>
        <a-menu-item key="about">关于我们</a-menu-item>
        <a-menu-item key="products">产品中心</a-menu-item>
        <a-menu-item key="news">新闻动态</a-menu-item>
        <a-menu-item key="contact">联系我们</a-menu-item>
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
  justify-content: space-between;
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
  display: flex;
  list-style: none;
}

.nav-menu li {
  margin: 0 15px;
}

.nav-menu a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: var(--primary-color);
}
</style>