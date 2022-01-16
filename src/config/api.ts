import qs from 'query-string'
import { instance } from 'config/axiosInstance'
import { Coin, CoinData, SingleCoin } from 'types/Coin'

export const getListCoin = async (currency: string): Promise<Coin[]> => {
  const query = qs.stringify({
    vs_currency: currency,
  })
  const res = await instance.get(`/markets?${query}`)

  return res.data
}

export const getSingleCoin = async (id: string | undefined): Promise<SingleCoin> => {
  const res = await instance.get(`/${id}`)

  return res.data
}

export const getHistoricalChart = async (
  id: string | undefined,
  days: number,
  currency: string
): Promise<CoinData> => {
  const query = qs.stringify({
    vs_currency: currency,
    days,
  })
  const res = await instance.get(`/${id}/market_chart?${query}`)

  return res.data
}

export const getTrendingCoin = async (currency: string): Promise<Coin[]> => {
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
