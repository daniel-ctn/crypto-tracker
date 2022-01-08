import { useQuery, UseQueryResult } from 'react-query'
import { getHistoricalChart, getListCoin, getSingleCoin, getTrendingCoin } from "./api";

export const useListCoin = () => {
  return useQuery<any[], Error>('coin-list', getListCoin)
}

export const useSingleCoin = (id: string) => {
  return useQuery<any[], Error>(['coin', id], () => {
    return getSingleCoin(id)
  })
}

export const useHistoricalCoin = (
  id: string,
  day: number = 365,
  currency: string
) => {
  return useQuery<any[], Error>('historical', () => {
    return getHistoricalChart(id, day, currency)
  })
}

export const useTrendingCoin = (currency: string) => {
  return useQuery<any[], Error>('trending', () => {
    return getTrendingCoin(currency)
  })
}
