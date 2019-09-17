import api from './api'
export const offerList = data => api('offer-list')(data)
export const offerDetail = data => api('offer-detail')(data)