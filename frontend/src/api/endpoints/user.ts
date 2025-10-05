import api from '../client'

export const getUserProfile = (id) => api.get(`/users/${id}`)
export const updateUserProfile = (id, data) => api.put(`/users/${id}`, data)
