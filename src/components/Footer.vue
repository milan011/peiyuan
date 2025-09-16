<script setup>
// 这里可以添加任何需要的逻辑
</script>

<template>
  <a-layout-footer class="layout-footer">
    <div class="footer-container">
      <!-- <div class="footer-content">
        <div class="footer-column">
          <h3>关于我们</h3>
          <ul class="footer-links">
            <li><a href="#">公司简介</a></li>
            <li><a href="#">发展历程</a></li>
            <li><a href="#">企业文化</a></li>
            <li><a href="#">荣誉资质</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>产品中心</h3>
          <ul class="footer-links">
            <li><a href="#">新鲜香菇</a></li>
            <li><a href="#">干制香菇</a></li>
            <li><a href="#">香菇深加工</a></li>
            <li><a href="#">礼盒套装</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>新闻动态</h3>
          <ul class="footer-links">
            <li><a href="#">公司新闻</a></li>
            <li><a href="#">行业资讯</a></li>
            <li><a href="#">媒体报道</a></li>
            <li><a href="#">活动公告</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>联系我们</h3>
          <ul class="footer-links">
            <li><a href="#">联系方式</a></li>
            <li><a href="#">招贤纳士</a></li>
            <li><a href="#">反馈留言</a></li>
            <li><a href="#">地理位置</a></li>
          </ul>
        </div>
      </div> -->
      <div class="footer-bottom">
        <p>© 2023 绿源香菇有限公司 版权所有 | 备案号：粤ICP备xxxxxxxx号</p>
      </div>
    </div>
  </a-layout-footer>
</template>

<style scoped>
.layout-footer {
  background-color: #2a2a2a;
  color: white;
  padding: 60px 0 20px;
  margin-top: auto; /* 确保footer固定在底部 */
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-column {
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;
}

.footer-column h3 {
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: white;
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-column {
    min-width: 100%;
    text-align: center;
  }
  
  .footer-column h3::after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>