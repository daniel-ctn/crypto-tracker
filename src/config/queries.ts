import { useQuery, UseQueryResult } from 'react-query'
import {
  getHistoricalChart,
  getListCoin,
  getSingleCoin,
  getTrendingCoin,
} from './api'
import { Coin, CoinData, SingleCoin } from 'types/Coin'
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
  }, { enabled: !!id })
}

export const useHistoricalCoin = (
  id: string | undefined,
  day: number,
  currency: string,
): UseQueryResult<CoinData, Error> => {
  return useQuery<CoinData, Error>(['historical', id, day, currency], () => {
    return getHistoricalChart(id, day, currency)
  }, { enabled: !!id })
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
