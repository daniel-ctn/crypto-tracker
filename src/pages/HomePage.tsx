import { FC, ReactElement } from 'react'

import { CryptoState } from 'context/cryptoContext'

import Banner from 'components/section/Banner'

const HomePage: FC = (): ReactElement => {
  const { currency } = CryptoState()

  return (
    <div>
      <Banner />
    </div>
  )
}

export default HomePage
