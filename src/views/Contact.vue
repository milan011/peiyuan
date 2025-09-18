<script setup>
import { ref, reactive } from 'vue'
import {
  ContactsOutlined,
  PhoneOutlined,
  MobileOutlined,
  MailOutlined,
  ClockCircleOutlined,
  EnvironmentOutlined,
  RocketOutlined,
  WhatsAppOutlined,
  AliwangwangOutlined,
  QrcodeOutlined
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'

// 表单状态
const formState = reactive({
  name: '',
  phone: '',
  email: '',
  type: undefined,
  message: ''
})

const loading = ref(false)

// 部门数据
const departments = ref([
  {
    key: '1',
    department: '销售部',
    contact: '张经理',
    phone: '138-0000-0001',
    email: 'sales@mushroom.com'
  },
  {
    key: '2',
    department: '采购部',
    contact: '李经理',
    phone: '138-0000-0002',
    email: 'purchase@mushroom.com'
  },
  {
    key: '3',
    department: '技术部',
    contact: '王工程师',
    phone: '138-0000-0003',
    email: 'tech@mushroom.com'
  },
  {
    key: '4',
    department: '客服部',
    contact: '陈客服',
    phone: '400-123-4567',
    email: 'service@mushroom.com'
  }
])

// 表格列配置
const departmentColumns = [
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department'
  },
  {
    title: '联系人',
    dataIndex: 'contact',
    key: 'contact'
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: '操作',
    key: 'action',
    width: 100
  }
]

// 二维码信息
const qrcodes = ref([
  {
    title: '微信公众号',
    description: '关注获取最新资讯'
  },
  {
    title: '微信客服',
    description: '扫码添加客服微信'
  },
  {
    title: '抖音号',
    description: '观看种植视频'
  },
  {
    title: '视频号',
    description: '了解更多产品信息'
  }
])

// 表单提交
const handleSubmit = async (values) => {
  loading.value = true
  try {
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000))
    message.success('消息发送成功！我们会尽快与您联系')
    // 重置表单
    Object.assign(formState, {
      name: '',
      phone: '',
      email: '',
      type: undefined,
      message: ''
    })
  } catch (error) {
    message.error('发送失败，请重试')
  } finally {
    loading.value = false
  }
}

// 联系部门
const handleContact = (record) => {
  message.info(`正在联系${record.department}的${record.contact}`)
}
</script>
<template>
    <section style="margin-top:70em !important">
  <a-flex class="contact-page" vertical gap="large">
    <!-- 顶部 Banner -->
    <a-flex class="contact-banner" justify="center" align="center" vertical>
      <h1>联系我们</h1>
      <p>诚挚期待与您合作，共创美好未来</p>
    </a-flex>

    <!-- 主要联系信息 -->
    <a-row :gutter="[32, 32]" class="contact-main">
      <!-- 联系信息卡片 -->
      <a-col :span="8">
        <a-card class="info-card" :bordered="false">
          <template #title>
            <div class="card-title">
              <contacts-outlined />
              <span>联系信息</span>
            </div>
          </template>
          <a-flex vertical gap="middle">
            <a-flex align="center" gap="small">
              <phone-outlined class="contact-icon" />
              <div>
                <div class="contact-label">咨询电话</div>
                <div class="contact-value">400-123-4567</div>
              </div>
            </a-flex>
            
            <a-flex align="center" gap="small">
              <mobile-outlined class="contact-icon" />
              <div>
                <div class="contact-label">业务手机</div>
                <div class="contact-value">138-8888-8888</div>
              </div>
            </a-flex>
            
            <a-flex align="center" gap="small">
              <mail-outlined class="contact-icon" />
              <div>
                <div class="contact-label">企业邮箱</div>
                <div class="contact-value">business@mushroom.com</div>
              </div>
            </a-flex>
            
            <a-flex align="center" gap="small">
              <clock-circle-outlined class="contact-icon" />
              <div>
                <div class="contact-label">工作时间</div>
                <div class="contact-value">周一至周五 8:30-17:30</div>
              </div>
            </a-flex>
          </a-flex>
        </a-card>
      </a-col>

      <!-- 地址信息 -->
      <a-col :span="8">
        <a-card class="info-card" :bordered="false">
          <template #title>
            <div class="card-title">
              <environment-outlined />
              <span>基地地址</span>
            </div>
          </template>
          <a-flex vertical gap="middle">
            <div class="address-item">
              <div class="contact-label">主种植基地</div>
              <div class="contact-value">西柏坡镇西沟村食用菌种植园区</div>
            </div>
            
            <div class="address-item">
              <div class="contact-label">主种植基地</div>
              <div class="contact-value">平山镇烟堡村食用菌种植园区</div>
            </div>
            
            <div class="address-item">
              <div class="contact-label">主种植基地</div>
              <div class="contact-value">温塘镇中陈庄食用种植园区</div>
            </div>
          </a-flex>
        </a-card>
      </a-col>

      <!-- 快速联系 -->
      <a-col :span="8">
        <a-card class="info-card" :bordered="false">
          <template #title>
            <div class="card-title">
              <rocket-outlined />
              <span>快速联系</span>
            </div>
          </template>
          <a-flex vertical gap="middle">
            <a-button type="primary" size="large" class="quick-btn">
              <whats-app-outlined />
              微信咨询
            </a-button>
            
            <a-button type="primary" ghost size="large" class="quick-btn">
              <aliwangwang-outlined />
              在线客服
            </a-button>
            
            <a-button type="primary" danger size="large" class="quick-btn">
              <phone-outlined />
              立即拨打
            </a-button>
          </a-flex>
        </a-card>
      </a-col>
    </a-row>

    <!-- 部门联系方式 -->
    <a-card title="各部门联系方式" class="department-card">
      <a-table
        :data-source="departments"
        :columns="departmentColumns"
        :pagination="false"
        size="middle"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'action'">
            <a-button type="link" size="small" @click="handleContact(record)">
              立即联系
            </a-button>
          </template>
        </template>
      </a-table>
    </a-card>

    <!-- 二维码区域 -->
    <a-row :gutter="[32, 32]" class="qrcode-section">
      <a-col :span="6" v-for="item in qrcodes" :key="item.title">
        <a-card class="qrcode-card" :bordered="false">
          <div class="qrcode-content">
            <div class="qrcode-placeholder">
              <qrcode-outlined />
            </div>
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </a-flex>
  </section>
</template>



<style scoped>
.contact-page {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
}

.contact-banner {
  background: linear-gradient(135deg, #52c41a 0%, #389e0d 100%);
  color: white;
  border-radius: 12px;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 32px;
}

.contact-banner h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.contact-banner p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
}

.contact-main {
  margin-bottom: 32px;
}

.info-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #262626;
}

.contact-icon {
  font-size: 1.2rem;
  color: #52c41a;
}

.contact-label {
  font-size: 0.9rem;
  color: #8c8c8c;
  margin-bottom: 2px;
}

.contact-value {
  font-size: 1rem;
  font-weight: 500;
  color: #262626;
}

.address-item {
  margin-bottom: 16px;
}

.quick-btn {
  width: 100%;
  height: 48px;
  font-weight: 500;
}

.map-card,
.form-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.map-container {
  height: 300px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder {
  text-align: center;
  color: #8c8c8c;
}

.map-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  color: #52c41a;
}

.department-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;
}

.qrcode-section {
  margin-top: 32px;
}

.qrcode-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.qrcode-content {
  padding: 20px;
}

.qrcode-placeholder {
  width: 100px;
  height: 100px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.qrcode-placeholder .anticon {
  font-size: 2rem;
  color: #52c41a;
}

.qrcode-content h4 {
  margin-bottom: 8px;
  color: #262626;
}

.qrcode-content p {
  color: #8c8c8c;
  margin: 0;
  font-size: 0.9rem;
}

:deep(.ant-card-head-title) {
  font-weight: 600;
  color: #262626;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500;
  color: #262626;
}
</style>