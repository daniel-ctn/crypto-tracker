import { useQuery, UseQueryResult } from 'react-query'
import {
  getHistoricalChart,
  getListCoin,
  getSingleCoin,
  getTrendingCoin,
} from './api'
import { Coin } from 'types/Coin'
import queryClient from './queryClient'

export const useListCoin = (currency: string): UseQueryResult<Coin[], Error> => {
  return useQuery<Coin[], Error>(['coin-list', currency],
    () => getListCoin(currency), {
      onSuccess: () =>
        queryClient.prefetchQuery(['coin-list', 'usd'],
          () => getListCoin('usd')),
    })
}

export const useSingleCoin = (id: string): UseQueryResult<Coin, Error> => {
  return useQuery<Coin, Error>(['coin', id], () => {
    return getSingleCoin(id)
  })
}

export const useHistoricalCoin = (
  id: string,
  day = 365,
  currency: string,
): UseQueryResult<Coin[], Error> => {
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
