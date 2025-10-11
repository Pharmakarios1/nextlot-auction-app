import api from '../client.js'

export const login = async (email, password) => {
  const res = await api.post('/auth/login', { email, password })
  localStorage.setItem('token', res.data.access_token)
  return res.data
}

export const register = (data) => api.post('/auth/register', data)
export const resetpassword = (data) => api.post('/auth/resetpassword', data)

export const logout = () => api.post('/auth/logout')

export const getCurrentUser = async () => {
  const res = await api.get('/users/me')
  return res.data
}

export const getAdminDashboard = async () => {
  const res = await api.get('/admin/dashboard')
  return res.data
}
