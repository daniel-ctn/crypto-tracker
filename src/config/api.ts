import { instance } from './axiosInstance'
import qs from 'query-string'

export const getListCoin = async () => {
  const res = await instance.get('/list')

  return res.data
}

export const getSingleCoin = async (id: string) => {
  const res = await instance.get(`/${id}`)

  return res.data
}

export const getHistoricalChart = async (
  id: string,
  days: number = 365,
  currency: string
) => {
  const query = qs.stringify({
    vs_currency: currency,
    days,
  })
  const res = await instance.get(`/${id}/market_chart?${query}`)

  return res.data
}

export const getTrendingCoin = async (currency: string) => {
  const query = qs.stringify({
    vs_currency: currency,
    order: 'gecko_desc',
    per_page: 10,
    page: 1,
    sparkline: false,
    price_change_percentage: '24h',
  })
  const res = await instance.get(`/markets?${query}`)

  return res.data
}
