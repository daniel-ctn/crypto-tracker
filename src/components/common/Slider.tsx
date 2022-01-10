import { FC, ReactElement } from 'react'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { Coin } from 'types/Coin'

interface CommonSliderProps {
  trendingCoins: Coin[] | undefined
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
}

const Image = styled('img')({
  width: '200px',
  height: '200px'
})

const CommonSlider: FC<CommonSliderProps> = ({
  trendingCoins,
}): ReactElement => {
  return (
    <Slider {...settings}>
      {trendingCoins?.map(coin => (
        <Box
          sx={{
            height: '240px',
            width: '100%',
            padding: '20px',
          }}
        >
          <Image src={coin.image} alt={coin.name} />
        </Box>
      ))}
    </Slider>
  )
}

export default CommonSlider
