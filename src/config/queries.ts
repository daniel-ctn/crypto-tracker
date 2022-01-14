import { useQuery, UseQueryResult } from 'react-query'
import {
  getHistoricalChart,
  getListCoin,
  getSingleCoin,
  getTrendingCoin,
} from './api'
import { Coin, SingleCoin } from 'types/Coin'
import queryClient from './queryClient'

export const useListCoin = (currency: string): UseQueryResult<Coin[], Error> => {
  return useQuery<Coin[], Error>(['coin-list', currency],
    () => getListCoin(currency), {
      onSuccess: () =>
        queryClient.prefetchQuery(['coin-list', 'vnd'],
          () => getListCoin('vnd')),
    })
}

export const useSingleCoin = (id: string | undefined): UseQueryResult<SingleCoin, Error> => {
  return useQuery<SingleCoin, Error>(['coin', id], () => {
      return getSingleCoin(id)
  }, {enabled: !!id})
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
