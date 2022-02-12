import { FC } from 'react'

import { CryptoContextState } from 'context/cryptoContext'

import Banner from 'components/section/Banner'
import CoinTable from 'components/section/CoinTable'

const HomePage: FC = () => {
  const { currency } = CryptoContextState()

  return (
    <div>
      <Banner />
      <CoinTable/>
    </div>
  )
}

export default HomePage
