<script setup>
import { ref, computed } from 'vue'
import xinxianImage from '@/assets/images/xinxian.png';
import xinxian2Image from '@/assets/images/xinxian2.png';

// 筛选标签
const filterTags = [
  { value: 'all', label: '全部' },
  { value: 'fresh', label: '鲜香菇' },
  { value: 'dried', label: '干香菇' },
  { value: 'premium', label: '特级香菇' }
]

// 搜索和筛选
const searchKeyword = ref('')
const activeFilter = ref('all')

// 模态框控制
const showModal = ref(false)
const selectedProduct = ref(null)

// 香菇产品数据
const mushroomProducts = ref([
  {
    id: 1,
    name: '高山有机花菇',
    variety: '花菇',
    grade: '特级',
    price: 98,
    unit: '斤',
    size: '3-4',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 2,
    name: '新鲜冬菇',
    variety: '冬菇',
    grade: '一级',
    price: 28,
    unit: '斤',
    size: '2-3',
    origin: '烟堡种植园区',
    image: xinxian2Image,
    isOrganic: false
  },
  {
    id: 3,
    name: '特级干香菇',
    variety: '香菇',
    grade: '特级',
    price: 128,
    unit: '斤',
    size: '4-5',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 4,
    name: '香菇切片',
    variety: '切片',
    grade: '一级',
    price: 45,
    unit: '斤',
    size: '2-3',
    origin: '西沟种植园区',
    image: xinxian2Image,
    isOrganic: false
  },
  {
    id: 1,
    name: '高山有机花菇',
    variety: '花菇',
    grade: '特级',
    price: 98,
    unit: '斤',
    size: '3-4',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 2,
    name: '新鲜冬菇',
    variety: '冬菇',
    grade: '一级',
    price: 28,
    unit: '斤',
    size: '2-3',
    origin: '烟堡种植园区',
    image: xinxian2Image,
    isOrganic: false
  },
  {
    id: 3,
    name: '特级干香菇',
    variety: '香菇',
    grade: '特级',
    price: 128,
    unit: '斤',
    size: '4-5',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 4,
    name: '香菇切片',
    variety: '切片',
    grade: '一级',
    price: 45,
    unit: '斤',
    size: '2-3',
    origin: '西沟种植园区',
    image: xinxian2Image,
    isOrganic: false
  },
  {
    id: 1,
    name: '高山有机花菇',
    variety: '花菇',
    grade: '特级',
    price: 98,
    unit: '斤',
    size: '3-4',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 2,
    name: '新鲜冬菇',
    variety: '冬菇',
    grade: '一级',
    price: 28,
    unit: '斤',
    size: '2-3',
    origin: '烟堡种植园区',
    image: xinxian2Image,
    isOrganic: false
  },
  {
    id: 3,
    name: '特级干香菇',
    variety: '香菇',
    grade: '特级',
    price: 128,
    unit: '斤',
    size: '4-5',
    origin: '西沟种植园区',
    image: xinxianImage,
    isOrganic: true
  },
  {
    id: 4,
    name: '香菇切片',
    variety: '切片',
    grade: '一级',
    price: 45,
    unit: '斤',
    size: '2-3',
    origin: '西沟种植园区',
    image: xinxian2Image,
    isOrganic: false
  }
])

// 筛选后的产品
const filteredProducts = computed(() => {
  let products = mushroomProducts.value

  // 按分类筛选
  if (activeFilter.value !== 'all') {
    products = products.filter(product => {
      if (activeFilter.value === 'fresh') return product.name.includes('新鲜')
      if (activeFilter.value === 'dried') return product.name.includes('干香菇')
      if (activeFilter.value === 'premium') return product.grade === '特级'
      return true
    })
  }

  // 按关键词搜索
  if (searchKeyword.value) {
    const keyword = searchKeyword.value.toLowerCase()
    products = products.filter(product =>
      product.name.toLowerCase().includes(keyword) ||
      product.variety.toLowerCase().includes(keyword) ||
      product.origin.toLowerCase().includes(keyword)
    )
  }

  return products
})

// 处理筛选
const handleFilter = (filter) => {
  activeFilter.value = filter
}

// 处理搜索
const handleSearch = () => {
  // 搜索逻辑已在 computed 中处理
}

// 显示详情
const showDetail = (product) => {
  selectedProduct.value = product
  showModal.value = true
}

// 联系供应商
const contactSupplier = (product) => {
  alert(`采购咨询: ${product.name}\n请联系客服: 400-123-4567`)
}
</script>

<template>
  <section style="margin-top:60em !important">
  <a-flex class="mushroom-page" vertical gap="large">
    <!-- 顶部 Banner -->
    <a-flex class="banner" justify="center" align="center" vertical>
      <h1>匠心培育 · 优质香菇</h1>
      <p>源自高山生态种植，每一朵都是自然的馈赠</p>
    </a-flex>

    <!-- 产品筛选 -->
    <a-flex vertical gap="middle" align="center">
      <!-- <a-input-search
        v-model:value="searchKeyword"
        placeholder="搜索香菇品种..."
        style="width: 300px"
        @search="handleSearch"
      /> -->
      <!-- <a-flex gap="small" wrap="wrap" justify="center">
        <a-tag 
          v-for="tag in filterTags" 
          :key="tag.value"
          :color="activeFilter === tag.value ? 'green' : 'default'"
          @click="handleFilter(tag.value)"
          class="filter-tag"
        >
          {{ tag.label }}
        </a-tag>
      </a-flex> -->
    </a-flex>

    <!-- 产品展示 -->
    <a-row :gutter="[24, 24]" justify="start">
      <a-col 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :xs="24" 
        :sm="12" 
        :md="8" 
        :lg="6"
      >
        <a-card class="product-card" hoverable>
          <template #cover>
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
              <a-tag v-if="product.isOrganic" color="green" class="organic-badge">
                有机
              </a-tag>
            </div>
          </template>
          
          <a-card-meta :title="product.name" :description="product.variety" />
          
          <a-flex vertical gap="small" class="product-info">
            <!-- <a-flex justify="space-between">
              <span>等级: {{ product.grade }}级</span>
              <span>规格: {{ product.size }}cm</span>
            </a-flex>
            
            <a-flex align="center" gap="small">
              <environment-outlined />
              <span>产地: {{ product.origin }}</span>
            </a-flex> 

            <div class="price">
              ¥{{ product.price }}<span class="unit">/{{ product.unit }}</span>
            </div> -->

            <a-flex gap="small" class="actions">
              <a-button type="primary" ghost @click="showDetail(product)">
                查看详情
              </a-button>
              <a-button type="primary" @click="contactSupplier(product)">
                采购咨询
              </a-button>
            </a-flex>
          </a-flex>
        </a-card>
      </a-col>
    </a-row>

    <!-- 空状态 -->
    <a-empty v-if="filteredProducts.length === 0" description="暂无相关香菇产品" />

    <!-- 产品详情模态框 -->
    <a-modal 
      v-model:visible="showModal" 
      :title="selectedProduct?.name"
      width="600px"
      :footer="null"
    >
      <a-flex v-if="selectedProduct" gap="large" align="start">
        <img 
          :src="selectedProduct.image" 
          :alt="selectedProduct.name" 
          class="detail-image" 
        />
        
        <a-flex vertical gap="small" class="detail-info">
          <p><strong>品种:</strong> {{ selectedProduct.variety }}</p>
          <p><strong>等级:</strong> {{ selectedProduct.grade }}级</p>
          <p><strong>产地:</strong> {{ selectedProduct.origin }}</p>
          <p><strong>规格:</strong> {{ selectedProduct.size }}cm</p>
          <p><strong>价格:</strong> ¥{{ selectedProduct.price }}/{{ selectedProduct.unit }}</p>
          
          <a-tag v-if="selectedProduct.isOrganic" color="green">
            <template #icon></template>
            有机认证产品
          </a-tag>
        </a-flex>
      </a-flex>
    </a-modal>
  </a-flex>
  </section>
</template>



<style scoped>
.mushroom-page {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

.banner {
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
  color: white;
  border-radius: 12px;
  padding: 40px 20px;
  text-align: center;
}

.banner h1 {
  font-size: 2.2rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.banner p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.filter-tag {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.product-card {
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.organic-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  font-weight: bold;
}

.product-info {
  padding: 16px 0 0 0;
}

.price {
  font-size: 1.4rem;
  color: #f5222d;
  font-weight: bold;
  text-align: center;
  margin: 8px 0;
}

.unit {
  font-size: 0.9rem;
  color: #999;
  font-weight: normal;
  margin-left: 4px;
}

.actions {
  margin-top: 8px;
}

.actions button {
  flex: 1;
}

.detail-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.detail-info {
  flex: 1;
  min-width: 0;
}

.detail-info p {
  margin-bottom: 12px;
  font-size: 1rem;
}
</style>