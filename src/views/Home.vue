<script setup></script>

<template>
  <div>
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container hero-content">
        <h1>优质香菇种植专家</h1>
        <p>专注于提供高品质、无污染的有机香菇，从农场到餐桌，全程可追溯</p>
        <a-button type="primary" size="large">了解更多</a-button>
      </div>
    </section>

    <!-- 产品特点 -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>我们的优势</h2>
        </div>
        <div class="features">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="anticon anticon-environment"></i>
            </div>
            <h3>自然环境</h3>
            <p>地处深山，空气清新，水源纯净，为香菇生长提供绝佳环境</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="anticon anticon-safety"></i>
            </div>
            <h3>有机种植</h3>
            <p>全程无农药、无添加，采用传统种植方式，确保香菇天然品质</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="anticon anticon-experiment"></i>
            </div>
            <h3>科学管理</h3>
            <p>引进先进设备和技术，严格控制温湿度，保证香菇最佳生长条件</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="section" style="background-color: #f9f9f9;">
      <div class="container">
        <div class="section-title">
          <h2>产品中心</h2>
        </div>
        <div class="products">
          <div class="product-card">
            <div class="product-img">
              <img src="https://via.placeholder.com/200" alt="新鲜香菇">
            </div>
            <div class="product-info">
              <h3>新鲜香菇</h3>
              <p>当日采摘，新鲜直达</p>
            </div>
          </div>
          <div class="product-card">
            <div class="product-img">
              <img src="https://via.placeholder.com/200" alt="干制香菇">
            </div>
            <div class="product-info">
              <h3>干制香菇</h3>
              <p>传统工艺，香味浓郁</p>
            </div>
          </div>
          <div class="product-card">
            <div class="product-img">
              <img src="https://via.placeholder.com/200" alt="香菇酱">
            </div>
            <div class="product-info">
              <h3>香菇酱</h3>
              <p>秘制配方，佐餐佳品</p>
            </div>
          </div>
          <div class="product-card">
            <div class="product-img">
              <img src="https://via.placeholder.com/200" alt="香菇脆">
            </div>
            <div class="product-info">
              <h3>香菇脆</h3>
              <p>健康零食，酥脆可口</p>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <a-button type="primary" @click="$router.push('/products')">查看更多产品</a-button>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>关于我们</h2>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>绿源香菇成立于2010年，是一家专注于高品质香菇种植、加工和销售的企业。我们拥有现代化种植基地500亩，年产量达1000吨。</p>
            <p>公司始终坚持"天然、健康、安全"的理念，从菌种选育到成品出厂，每一个环节都严格把控，确保产品质量。</p>
            <p>我们的产品已通过有机认证、绿色食品认证，并远销日本、韩国、东南亚等国家和地区，深受消费者喜爱。</p>
            <a-button type="primary" @click="$router.push('/about')">查看更多</a-button>
          </div>
          <div class="about-image">
            <img src="https://via.placeholder.com/400x300" alt="香菇种植基地">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x600') no-repeat center center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.section {
  padding: 60px 0;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: var(--primary-color);
}

.section-title h2 {
  font-size: 2rem;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.feature-card {
  flex-basis: calc(33.333% - 30px);
  margin: 15px;
  padding: 30px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 40px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  flex-basis: calc(25% - 30px);
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-img {
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-info {
  padding: 20px;
  text-align: center;
}

.about-content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  min-width: 300px;
  padding-right: 30px;
}

.about-image {
  flex: 1;
  min-width: 300px;
  height: 400px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .feature-card {
    flex-basis: calc(50% - 30px);
  }
  
  .product-card {
    flex-basis: calc(50% - 30px);
  }
}

@media (max-width: 768px) {
  .feature-card {
    flex-basis: 100%;
  }
  
  .product-card {
    flex-basis: 100%;
  }
  
  .about-text, .about-image {
    flex: 100%;
    padding-right: 0;
  }
  
  .about-image {
    margin-top: 30px;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
}
</style>