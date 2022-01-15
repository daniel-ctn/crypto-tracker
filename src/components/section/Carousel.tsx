import { FC, ReactElement } from 'react'
import { Box } from '@mui/material'

import { useTrendingCoin } from 'config/queries'

import CommonSlider from '../common/Slider'

const Carousel: FC = (): ReactElement => {
  const { data } = useTrendingCoin('usd')

  return (
    <Box mt={4} width='100%' height='240px'>
      <CommonSlider trendingCoins={data} />
    </Box>
  )
}

export default Carousel
