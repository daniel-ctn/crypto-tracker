import { FC, ReactElement } from 'react'

import { CryptoState } from 'context/cryptoContext'
import { useHistoricalCoin, useListCoin, useSingleCoin, useTrendingCoin } from "config/queries";

import Banner from 'components/section/Banner'

const HomePage: FC = (): ReactElement => {
  const { currency } = CryptoState()
  const { data } = useListCoin()
  const { data: data2 } = useSingleCoin('bitcoin')
  const { data: data3 } = useHistoricalCoin('bitcoin', 365, 'usd')
  const { data: data4 } = useTrendingCoin( 'usd')

  console.log({ data })
  console.log({ data2 })
  console.log({ data3 })
  console.log({ data4 })

  return (
    <div>
      <Banner />
    </div>
  )
}

export default HomePage
