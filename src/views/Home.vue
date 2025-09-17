<script setup>
import { useRouter } from 'vue-router';
import {
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  ShopOutlined,
  CrownOutlined,
  TeamOutlined,
  CalendarOutlined,
  PhoneOutlined
} from '@ant-design/icons-vue';
import { onMounted, ref } from 'vue';
import localImage from '@/assets/images/home.png';
import kexueImage from '@/assets/images/kexue.png';
import youjiImage from '@/assets/images/youji.png';
import chandiImage from '@/assets/images/chandi.png';
import chanpinImage from '@/assets/images/chanpin.png';
import gongyiImage from '@/assets/images/gongyi.png';
import xinxianImage from '@/assets/images/xinxian.png';
import hezuoImage from '@/assets/images/hezuo.png';



const localImageSrc = ref(localImage);

const router = useRouter();
const headerHeight = ref(64); // 默认header高度
 

onMounted(() => {
  // 获取header实际高度
  setTimeout(() => {
    const header = document.querySelector('.ant-layout-header');
    if (header) {
      headerHeight.value = header.offsetHeight;
    }
  }, 100);
});

const navigateTo = (path) => {
  router.push(path);
};

// 产品数据
const products = [
  {
    name: '新鲜香菇',
    description: '当日采摘，新鲜直达',
    image: xinxianImage
  },
  {
    name: '干制香菇',
    description: '科学工艺，香味浓郁',
    image: gongyiImage
  },
  {
    name: '优质产品',
    description: '秘制配方，佐餐佳品',
    image: chanpinImage
  }
];

// 特点数据
const features = [
  {
    title: '优质产地',
    description: '来自香菇黄金产区的优质品种，自然环境优越',
    image: chandiImage,
    icon: EnvironmentOutlined
  },
  {
    title: '有机认证',
    description: '通过有机认证，无农药残留，食用更安心',
    image: youjiImage,
    icon: SafetyCertificateOutlined
  },
  {
    title: '科学培育',
    description: '采用现代科学培育技术，确保品质稳定',
    image: kexueImage,
    icon: ExperimentOutlined
  }
];

// 新闻数据
const news = [
  {
    title: '2024年香菇产业发展趋势',
    date: '2024-01-15',
    excerpt: '探讨香菇产业的最新发展动态和市场前景'
  },
  {
    title: '香菇种植技术培训会圆满结束',
    date: '2024-01-10',
    excerpt: '成功举办香菇种植技术培训，提升农户种植水平'
  },
  {
    title: '新产品香菇脆片上市',
    date: '2024-01-05',
    excerpt: '全新健康零食香菇脆片正式上市销售'
  }
];
</script>

<template>
  <div class="home-container">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h2>优质香菇种植专家</h2>
          <p class="hero-description">专注于提供高品质、无污染的有机香菇，阳光包容，培育为元</p>
          <div class="hero-actions">
            <a-button type="primary" size="large" @click="navigateTo('/products')">
              查看产品
              <ArrowRightOutlined />
            </a-button>
            <a-button size="large" @click="navigateTo('/about')" style="margin-left: 16px;">
              关于我们
            </a-button>
          </div>
        </div>
        <div class="hero-image">
          <a-image
            :preview=false
            :src="localImageSrc"
          />
        </div>
      </div>
    </section>

    <!-- 产品特点 -->
    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>为什么选择我们</h2>
          <p>六统一分，品质保证</p>
        </div>
        <a-row :gutter="[32, 32]">
          <a-col v-for="(feature, index) in features" :key="index" :xs="24" :md="8">
            <div class="feature-card">
              <div class="feature-icon">
                <!-- <component :is="feature.icon" /> -->
                <a-image
                  height="200px"
                  :preview=false
                  :src="feature.image"
                />
              </div>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </a-col>
        </a-row>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>我们的产品</h2>
          <p>多种香菇制品满足您的需求</p>
        </div>
        <a-row :gutter="[24, 24]">
          <a-col v-for="(product, index) in products" :key="index" :xs="24" :md="8">
            <a-card class="product-card" hoverable>
              <template #cover>
                <img :alt="product.name" :src="product.image" />
              </template>
              <a-card-meta :title="product.name" :description="product.description" />
            </a-card>
          </a-col>
        </a-row>
        <div class="view-more">
          <a-button type="primary" ghost size="large" @click="navigateTo('/products')">
            查看更多产品
          </a-button>
        </div>
      </div>
    </section>

    <!-- 最新动态 -->
    <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2>最新动态</h2>
          <p>了解行业资讯和企业新闻</p>
        </div>
        <a-row :gutter="[24, 24]">
          <a-col v-for="(item, index) in news" :key="index" :xs="24" :md="8">
            <a-card class="news-card">
              <div class="news-date">
                <CalendarOutlined /> {{ item.date }}
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.excerpt }}</p>
              <a-button type="link" @click="navigateTo('/news')">
                阅读更多
              </a-button>
            </a-card>
          </a-col>
        </a-row>
        <div class="view-more">
          <a-button type="primary" ghost size="large" @click="navigateTo('/news')">
            查看更多新闻
          </a-button>
        </div>
      </div>
    </section>

    <!-- 联系区块 -->
    <section class="contact-section">
      <div class="container">
        <a-row :gutter="[48, 24]" align="middle">
          <a-col :xs="24" :md="16">
            <div class="contact-image">
              <a-image
                :preview=false
                :src="hezuoImage"
              />
            </div>
          </a-col>
          <a-col :xs="24" :md="8">
            <div class="contact-content">
              <h2>开始合作</h2>
              <p>我们致力于为客户提供最优质的香菇产品和服务。无论您是批发商、零售商还是餐饮企业，我们都期待与您建立长期合作关系。</p>
              <a-button type="primary" size="large" @click="navigateTo('/contact')">
                <PhoneOutlined /> 联系我们
              </a-button>
            </div>
          </a-col>
          
        </a-row>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  margin-top:180em !important;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}

/* Header占位符 - 关键修复 */
.header-placeholder {
  width: 100%;
  background: transparent;
}

/* 英雄区域修复 */
.hero-section {
  /* padding: 80px 0; */
  background: linear-gradient(135deg, #f6ffed 0%, #e6f7ff 100%);
}

.hero-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: center;
}

.hero-content h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #389e0d;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 16px;
}

.hero-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 通用样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #389e0d;
  margin-bottom: 16px;
}

.section-header p {
  font-size: 1.125rem;
  color: #666;
}

/* 特点区域 */
.features-section {
  padding: 80px 0;
  background: #fff;
}

.feature-card {
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  border: 1px solid #f0f0f0;
}

.feature-icon {
  font-size: 48px;
  color: #389e0d;
  margin-bottom: 24px;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 产品区域 */
.products-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  border: 1px solid #f0f0f0;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-card :deep(.ant-card-cover) {
  height: 250px;
}

.product-card :deep(.ant-card-cover img) {
  height: 100%;
  object-fit: cover;
}

.view-more {
  text-align: center;
  margin-top: 48px;
}

/* 新闻区域 */
.news-section {
  padding: 80px 0;
  background: #fff;
}

.news-card {
  border-radius: 12px;
  height: 100%;
  border: 1px solid #f0f0f0;
}

.news-date {
  color: #389e0d;
  margin-bottom: 12px;
  font-weight: 500;
}

.news-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #333;
}

.news-card p {
  color: #666;
  margin-bottom: 16px;
}

/* 联系区域 */
.contact-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.contact-content h2 {
  font-size: 2.5rem;
  color: #389e0d;
  margin-bottom: 24px;
}

.contact-content p {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 32px;
  line-height: 1.6;
}

.contact-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-placeholder {
    height: 56px !important;
    /* 移动端header高度 */
  }

  .hero-section .container {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-image img {
    height: 300px;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .features-section,
  .products-section,
  .news-section,
  .contact-section {
    padding: 40px 0;
  }

  .feature-card {
    padding: 24px;
  }

  .contact-content {
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>