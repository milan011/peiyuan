<script setup>
import { useRouter } from 'vue-router';
import { 
  EnvironmentOutlined, 
  SafetyCertificateOutlined, 
  ExperimentOutlined 
} from '@ant-design/icons-vue';

const router = useRouter();

// 导航函数
const navigateTo = (path) => {
  router.push(path);
};

// 产品数据
const products = [
  {
    name: '新鲜香菇',
    description: '当日采摘，新鲜直达',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: '干制香菇',
    description: '传统工艺，香味浓郁',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: '香菇酱',
    description: '秘制配方，佐餐佳品',
    image: 'https://via.placeholder.com/200'
  },
  {
    name: '香菇脆',
    description: '健康零食，酥脆可口',
    image: 'https://via.placeholder.com/200'
  }
];
</script>

<template>
  <a-layout-content class="layout-content">
    <div class="home-container">
      <!-- 英雄区域 -->
      <section class="hero-section">
        <div class="container hero-content">
          <h1>优质香菇种植专家</h1>
          <p>专注于提供高品质、无污染的有机香菇，从农场到餐桌，全程可追溯</p>
          <a-button type="primary" size="large" @click="navigateTo('/about')">了解更多</a-button>
        </div>
      </section>

      <!-- 产品特点 -->
      <section class="section">
        <div class="container">
          <div class="section-title">
            <h2>我们的优势</h2>
            <p>专业种植，品质保证</p>
          </div>
          <a-row :gutter="[24, 24]">
            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="feature-card" hoverable>
                <template #cover>
                  <div class="feature-icon">
                    <EnvironmentOutlined />
                  </div>
                </template>
                <a-card-meta title="自然环境">
                  <template #description>
                    <p>地处深山，空气清新，水源纯净，为香菇生长提供绝佳环境</p>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="feature-card" hoverable>
                <template #cover>
                  <div class="feature-icon">
                    <SafetyCertificateOutlined />
                  </div>
                </template>
                <a-card-meta title="有机种植">
                  <template #description>
                    <p>全程无农药、无添加，采用传统种植方式，确保香菇天然品质</p>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="12" :md="8">
              <a-card class="feature-card" hoverable>
                <template #cover>
                  <div class="feature-icon">
                    <ExperimentOutlined />
                  </div>
                </template>
                <a-card-meta title="科学管理">
                  <template #description>
                    <p>引进先进设备和技术，严格控制温湿度，保证香菇最佳生长条件</p>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </section>

      <!-- 产品展示 -->
      <section class="section" style="background-color: #f9f9f9;">
        <div class="container">
          <div class="section-title">
            <h2>产品中心</h2>
            <p>精选优质香菇产品</p>
          </div>
          <a-row :gutter="[24, 24]">
            <a-col 
              :xs="12" 
              :sm="8" 
              :md="6" 
              v-for="(product, index) in products" 
              :key="index"
            >
              <a-card class="product-card" hoverable>
                <template #cover>
                  <div class="product-img">
                    <img :src="product.image" :alt="product.name">
                  </div>
                </template>
                <a-card-meta :title="product.name">
                  <template #description>
                    <p>{{ product.description }}</p>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
          <div style="text-align: center; margin-top: 30px;">
            <a-button type="primary" @click="navigateTo('/products')">查看更多产品</a-button>
          </div>
        </div>
      </section>

      <!-- 关于我们 -->
      <section class="section">
        <div class="container">
          <div class="section-title">
            <h2>关于我们</h2>
            <p>十年专注，品质传承</p>
          </div>
          <a-row :gutter="[48, 24]" align="middle">
            <a-col :xs="24" :md="12">
              <div class="about-text">
                <p>绿源香菇成立于2010年，是一家专注于高品质香菇种植、加工和销售的企业。我们拥有现代化种植基地500亩，年产量达1000吨。</p>
                <p>公司始终坚持"天然、健康、安全"的理念，从菌种选育到成品出厂，每一个环节都严格把控，确保产品质量。</p>
                <p>我们的产品已通过有机认证、绿色食品认证，并远销日本、韩国、东南亚等国家和地区，深受消费者喜爱。</p>
                <a-button type="primary" @click="navigateTo('/about')" style="margin-top: 20px;">查看更多</a-button>
              </div>
            </a-col>
            <a-col :xs="24" :md="12">
              <div class="about-image">
                <img src="https://via.placeholder.com/400x300" alt="香菇种植基地">
              </div>
            </a-col>
          </a-row>
        </div>
      </section>
    </div>
  </a-layout-content>
</template>

<style scoped>
.home-container {
  padding: 0;
}

/* 修复被Header遮挡的问题 */
.layout-content {
  margin-top: 64px; /* 与Header高度一致 */
  min-height: calc(100vh - 64px - 69px); /* 减去Header和Footer的高度 */
}

.hero-section {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1200x600') no-repeat center center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
  margin-top: -64px; /* 抵消layout-content的margin-top */
  padding-top: 64px; /* 确保内容不被遮挡 */
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
}

.section-title h2 {
  font-size: 2rem;
  color: var(--primary-color);
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  margin-bottom: 10px;
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

.section-title p {
  color: var(--text-light);
  font-size: 1.1rem;
}

.feature-card {
  text-align: center;
  height: 100%;
  border-radius: 8px;
}

.feature-icon {
  font-size: 48px;
  color: var(--primary-color);
  padding: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card {
  height: 100%;
  border-radius: 8px;
}

.product-img {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-text {
  padding-right: 20px;
}

.about-text p {
  margin-bottom: 16px;
  line-height: 1.8;
}

.about-image {
  height: 300px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .layout-content {
    margin-top: 120px; /* 移动端Header更高 */
    min-height: calc(100vh - 120px - 69px); /* 减去Header和Footer的高度 */
  }
  
  .hero-section {
    height: 400px;
    margin-top: -120px; /* 抵消layout-content的margin-top */
    padding-top: 120px; /* 确保内容不被遮挡 */
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .section {
    padding: 40px 0;
  }
  
  .about-text {
    padding-right: 0;
    margin-bottom: 24px;
  }
  
  .feature-icon {
    font-size: 36px;
    padding: 16px 0;
  }
}
</style>