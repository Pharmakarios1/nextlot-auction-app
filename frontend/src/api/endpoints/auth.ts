import api from '../client'

export const login = (email, password) => api.post('/auth/login', { email, password })

export const register = (data) => api.post('/auth/register', data)

export const logout = () => api.post('/auth/logout')
