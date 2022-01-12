import { useQuery, UseQueryResult } from 'react-query'
import {
  getHistoricalChart,
  getListCoin,
  getSingleCoin,
  getTrendingCoin,
} from './api'
import { Coin } from 'types/Coin'

export const useListCoin = (): UseQueryResult => {
  return useQuery<Coin[], Error>('coin-list', getListCoin)
}

export const useSingleCoin = (id: string): UseQueryResult => {
  return useQuery<Coin[], Error>(['coin', id], () => {
    return getSingleCoin(id)
  })
}

export const useHistoricalCoin = (
  id: string,
  day = 365,
  currency: string,
): UseQueryResult => {
  return useQuery<Coin[], Error>('historical', () => {
    return getHistoricalChart(id, day, currency)
  })
}

export const useTrendingCoin = (
  currency: string,
): UseQueryResult<Coin[], Error> => {
  return useQuery<Coin[], Error>(
    'trending',
    () => {
      return getTrendingCoin(currency)
    },
    {
      enabled: !!currency,
    },
  )
}
