import { FC, ReactElement } from 'react'
import { Box } from '@mui/material'

import { useTrendingCoin } from 'config/queries'
import { CryptoState } from 'context/cryptoContext'

import CommonSlider from "../common/Slider";

const Carousel: FC = (): ReactElement => {
  const { currency } = CryptoState()
  const { data } = useTrendingCoin(currency)

  return (
    <Box
      sx={{
        width: '100%',
        height: '240px',
        marginTop: '30px'
      }}
    >
      <CommonSlider trendingCoins={data}/>
    </Box>
  )
}

export default Carousel
