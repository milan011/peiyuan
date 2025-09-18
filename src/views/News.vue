<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  EyeOutlined,
  CalendarOutlined,
  TagOutlined,
  FireOutlined
} from '@ant-design/icons-vue'
import xinwenImage from '@/assets/images/xinwen.png';
import logoImage from '@/assets/images/logo.png';

// 加载状态
const loading = ref(false)

// 筛选条件
const activeCategory = ref('all')
const searchKeyword = ref('')

// 新闻数据
const newsData = ref([
  {
    id: 1,
    title: '我司荣获"全国有机香菇示范基地"称号',
    description: '近日，我司香菇种植基地通过国家有机认证，荣获示范基地称号',
    content: '经过严格的审核和评估，我司香菇种植基地凭借先进的种植技术、严格的质量管理和完善的追溯体系，成功获得国家有机产品认证，并被授予"全国有机香菇示范基地"荣誉称号。这是对我司多年来坚持绿色生态种植的充分肯定。',
    category: '企业新闻',
    date: '2024-03-15',
    views: 1245,
    image: xinwenImage,
    avatar: logoImage,
    link: '/news/1',
    type: 'company'
  },
  {
    id: 2,
    title: '2024年香菇市场价格走势分析',
    description: '专家预测今年香菇市场将保持稳定增长态势',
    content: '根据最新市场调研数据显示，2024年香菇市场需求持续旺盛，价格整体呈现稳中有升的趋势。特别是高品质有机香菇，市场需求量同比增长30%以上。预计下半年随着消费旺季的到来，价格还将有一定上涨空间。',
    category: '行业资讯',
    date: '2024-03-10',
    views: 987,
    image: xinwenImage,
    avatar: logoImage,
    link: '/news/2',
    type: 'industry'
  },
  {
    id: 3,
    title: '香菇高产种植技术培训班圆满结束',
    description: '我司成功举办春季香菇种植技术培训',
    content: '为提高香菇种植技术水平，我司于3月8日举办了春季香菇高产种植技术培训班。邀请了国内知名食用菌专家进行授课，来自全国各地的200多名种植户参加了培训。培训内容涵盖菌种选择、温湿度控制、病虫害防治等关键技术。',
    category: '种植技术',
    date: '2024-03-08',
    views: 1567,
    image: xinwenImage,
    avatar: logoImage,
    link: '/news/3',
    type: 'technology'
  },
  {
    id: 4,
    title: '春季香菇采摘体验活动开始报名',
    description: '欢迎前来体验香菇采摘的乐趣',
    content: '为了让更多人了解香菇种植过程，体验农耕乐趣，我司将于3月20日举办春季香菇采摘体验活动。活动内容包括香菇知识讲解、基地参观、亲手采摘体验等。欢迎广大市民和团体报名参加。',
    category: '活动公告',
    date: '2024-03-05',
    views: 876,
    image: xinwenImage,
    avatar: logoImage,
    link: '/news/4',
    type: 'activity'
  },
  {
    id: 5,
    title: '新型香菇烘干设备投入使用',
    description: '引进先进设备，提升香菇加工品质',
    content: '为提高香菇加工效率和产品质量，我司引进了最新的智能烘干设备。该设备采用低温循环烘干技术，能够更好地保留香菇的香气和营养成分，同时大幅降低能耗，实现绿色生产。',
    category: '企业新闻',
    date: '2024-03-01',
    views: 765,
    image: xinwenImage,
    avatar: logoImage,
    link: '/news/5',
    type: 'company'
  }
])

// 分类统计
const newsCategories = computed(() => {
  const categories = [
    { label: '企业新闻', value: 'company', color: 'blue', count: 0 },
    { label: '行业资讯', value: 'industry', color: 'green', count: 0 },
    { label: '种植技术', value: 'technology', color: 'orange', count: 0 },
    { label: '活动公告', value: 'activity', color: 'purple', count: 0 }
  ]

  categories.forEach(cat => {
    cat.count = newsData.value.filter(news => news.type === cat.value).length
  })

  return categories
})

// 热门新闻
const hotNews = computed(() => {
  return [...newsData.value]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5)
})

// 最新活动
const recentActivities = computed(() => {
  return newsData.value
    .filter(news => news.type === 'activity')
    .slice(0, 3)
    .map(activity => ({
      id: activity.id,
      title: activity.title,
      date: activity.date,
      color: 'green'
    }))
})

// 筛选后的新闻
const filteredNews = computed(() => {
  let news = newsData.value

  // 按分类筛选
  if (activeCategory.value !== 'all') {
    news = news.filter(item => item.type === activeCategory.value)
  }

  // 按关键词搜索
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    news = news.filter(item =>
      item.title.toLowerCase().includes(keyword) ||
      item.content.toLowerCase().includes(keyword) ||
      item.description.toLowerCase().includes(keyword)
    )
  }

  return news
})

// 处理搜索
const handleSearch = () => {
  // 搜索逻辑已在 computed 中处理
}

// 模拟加载
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
})
</script>
<template>
  <section   style="margin-top: 80em !important;">

  <a-flex class="news-page" vertical gap="large">
    <!-- 顶部 Banner -->
    <a-flex class="news-banner" justify="center" align="center" vertical>
      <h1>新闻动态</h1>
      <p>了解最新香菇种植技术、行业资讯和基地动态</p>
    </a-flex>

    <!-- 主要内容区 -->
    <a-row :gutter="[32, 32]">
      <!-- 左侧新闻列表 -->
      <a-col :span="16">
        <!-- 分类筛选 -->
        <a-flex justify="space-between" align="center" class="news-filter">
          <a-radio-group v-model:value="activeCategory" button-style="solid">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="company">企业新闻</a-radio-button>
            <a-radio-button value="industry">行业资讯</a-radio-button>
            <a-radio-button value="technology">种植技术</a-radio-button>
            <a-radio-button value="activity">活动公告</a-radio-button>
          </a-radio-group>
          
          <a-input-search
            v-model:value="searchKeyword"
            placeholder="搜索新闻..."
            style="width: 250px"
            @search="handleSearch"
          />
        </a-flex>

        <!-- 新闻列表 -->
        <a-list
          :data-source="filteredNews"
          :loading="loading"
          item-layout="vertical"
          size="large"
        >
          <template #renderItem="{ item }">
            <a-list-item key="item.title" class="news-item">
              <template #actions>
                <span><eye-outlined /> {{ item.views }}</span>
                <span><calendar-outlined /> {{ item.date }}</span>
                <span><tag-outlined /> {{ item.category }}</span>
              </template>
              
              <template #extra>
                <img
                  v-if="item.image"
                  width="200"
                  alt="新闻图片"
                  :src="item.image"
                  class="news-image"
                />
              </template>
              
              <a-list-item-meta :description="item.description">
                <template #title>
                  <a :href="item.link" class="news-title">{{ item.title }}</a>
                </template>
                <template #avatar>
                  <a-avatar :src="item.avatar" />
                </template>
              </a-list-item-meta>
              
              <div class="news-content">
                {{ item.content }}
              </div>
            </a-list-item>
          </template>
        </a-list>
      </a-col>

      <!-- 右侧边栏 -->
      <a-col :span="8">
        <!-- 热门新闻 -->
        <a-card title="热门新闻" class="sidebar-card">
          <a-list :data-source="hotNews" size="small">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-list-item-meta>
                  <template #title>
                    <a :href="item.link" class="hot-news-title">{{ item.title }}</a>
                  </template>
                  <template #description>
                    <span><eye-outlined /> {{ item.views }}</span>
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </template>
          </a-list>
        </a-card>

        <!-- 新闻分类 -->
        <a-card title="新闻分类" class="sidebar-card">
          <a-list :data-source="newsCategories" size="small">
            <template #renderItem="{ item }">
              <a-list-item>
                <a-tag :color="item.color" class="category-tag">
                  {{ item.label }} ({{ item.count }})
                </a-tag>
              </a-list-item>
            </template>
          </a-list>
        </a-card>

        <!-- 最新活动 -->
        <a-card title="最新活动" class="sidebar-card">
          <a-timeline>
            <a-timeline-item
              v-for="activity in recentActivities"
              :key="activity.id"
              :color="activity.color"
            >
              <p class="activity-title">{{ activity.title }}</p>
              <p class="activity-date">{{ activity.date }}</p>
            </a-timeline-item>
          </a-timeline>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
  
  </section>
</template>



<style scoped>
.news-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.news-banner {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  color: white;
  border-radius: 12px;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 32px;
}

.news-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.news-banner p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.news-filter {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.news-item {
  background: white;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 20px;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.news-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.news-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #262626;
}

.news-title:hover {
  color: #1890ff;
}

.news-content {
  color: #595959;
  line-height: 1.6;
  margin-top: 12px;
}

.news-image {
  border-radius: 6px;
  object-fit: cover;
}

.sidebar-card {
  margin-bottom: 24px;
  border-radius: 8px;
}

.sidebar-card :deep(.ant-card-head-title) {
  font-weight: 600;
  color: #262626;
}

.hot-news-title {
  font-size: 0.9rem;
  color: #595959;
}

.hot-news-title:hover {
  color: #1890ff;
}

.category-tag {
  margin: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-tag:hover {
  transform: scale(1.05);
}

.activity-title {
  font-weight: 500;
  margin-bottom: 4px;
  color: #262626;
}

.activity-date {
  color: #8c8c8c;
  font-size: 0.9rem;
  margin: 0;
}

:deep(.ant-list-item-action) {
  margin-top: 16px;
}

:deep(.ant-list-item-action li) {
  padding: 0 12px;
  color: #8c8c8c;
}

:deep(.ant-list-item-action .anticon) {
  margin-right: 4px;
}
</style>