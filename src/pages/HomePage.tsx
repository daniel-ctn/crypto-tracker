import { FC } from 'react'

import { CryptoState } from 'context/cryptoContext'

import Banner from 'components/section/Banner'
import CoinTable from 'components/section/CoinTable'

const HomePage: FC = () => {
  const { currency } = CryptoState()

  return (
    <div>
      <Banner />
      <CoinTable/>
    </div>
  )
}

export default HomePage
