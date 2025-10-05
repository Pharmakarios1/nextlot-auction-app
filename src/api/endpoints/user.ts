import api from '../client.js'

export const getUserProfile = (id) => api.get(`/users/${id}`)
export const updateUserProfile = (id, data) => api.put(`/users/${id}`, data)
