import api from '../client'

export const getAllAuctions = () => api.get('/auctions')
export const getAuctionById = (id) => api.get(`/auctions/${id}`)
export const placeBid = (id, amount) => api.post(`/auctions/${id}/bid`, { amount })
