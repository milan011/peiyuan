import axios from 'axios';
import { showMessage } from './message'; // 如果有消息提示工具
import { useUserStore } from '@/stores/user'; // Pinia用户状态管理

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || '/api', // 从环境变量读取基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const userStore = useUserStore();
    
    // 添加token到请求头
    if (userStore.token) {
      config.headers['Authorization'] = `Bearer ${userStore.token}`;
      config.headers['X-Token'] = userStore.token;
    }
    
    // 如果是FormData，修改Content-Type
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    
    console.log('请求配置:', config);
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    
    // 根据你的后端返回结构进行调整
    if (res.code === 200 || res.success) {
      return res;
    } else {
      // 处理业务错误
      handleError(res.code, res.message || res.msg);
      return Promise.reject(new Error(res.message || res.msg || 'Error'));
    }
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应错误:', error);
    
    if (error.response) {
      // 有响应但状态码不在2xx范围内
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          handleError(status, data.message || '请求参数错误');
          break;
        case 401:
          handleError(status, '登录已过期，请重新登录');
          // 清除token并跳转到登录页
          const userStore = useUserStore();
          userStore.logout();
          window.location.href = '/login';
          break;
        case 403:
          handleError(status, '没有权限访问');
          break;
        case 404:
          handleError(status, '请求资源不存在');
          break;
        case 500:
          handleError(status, '服务器内部错误');
          break;
        default:
          handleError(status, data.message || `连接错误${status}`);
      }
    } else if (error.request) {
      // 请求已发出但没有响应
      handleError(null, '网络连接异常，请检查网络');
    } else {
      // 其他错误
      handleError(null, error.message || '请求失败');
    }
    
    return Promise.reject(error);
  }
);

// 错误处理函数
function handleError(code, message) {
  console.error(`错误代码: ${code}, 错误信息: ${message}`);
  // 这里可以集成你的消息提示组件，如Ant Design Vue的message
  // message.error(message);
}

// 封装通用请求方法
export const http = {
  get: (url, params = {}, config = {}) => 
    service.get(url, { params, ...config }),
  
  post: (url, data = {}, config = {}) => 
    service.post(url, data, config),
  
  put: (url, data = {}, config = {}) => 
    service.put(url, data, config),
  
  delete: (url, params = {}, config = {}) => 
    service.delete(url, { params, ...config }),
  
  upload: (url, file, fieldName = 'file', config = {}) => {
    const formData = new FormData();
    formData.append(fieldName, file);
    return service.post(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      ...config
    });
  }
};

export default service;