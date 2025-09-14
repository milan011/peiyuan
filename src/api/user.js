import { http } from '@/utils/request';

// 用户登录
export const login = (data) => http.post('/auth/login', data);

// 获取用户信息
export const getUserInfo = () => http.get('/user/info');

// 更新用户信息
export const updateUserInfo = (data) => http.put('/user/info', data);

// 用户注册
export const register = (data) => http.post('/auth/register', data);

// 退出登录
export const logout = () => http.post('/auth/logout');