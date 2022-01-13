import { FC } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { green, red } from '@mui/material/colors'

import { Coin } from 'types/Coin'

interface CommonSliderProps {
  trendingCoins: Coin[] | undefined;
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: false,
}

const Image = styled('img')({
  width: '100px',
  height: '100px',
})

const SymbolText = styled('h3')({
  fontSize: '14px',
  margin: '20px 0 -15px 32px',
})

const ChangePriceText = styled('h3', {
  shouldForwardProp: (prop) => prop !== 'increase',
})<{ increase: boolean }>(({ increase }) => ({
  fontSize: '14px',
  margin: '20px 0 -15px 25px',
  color: increase ? green[400] : red[400],
}))

const CommonSlider: FC<CommonSliderProps> = ({ trendingCoins }) => {

  return (
    <Slider {...settings}>
      {trendingCoins?.map(coin => (
        <Box
          key={coin.id}
          sx={{
            height: '240px',
            padding: '20px',
          }}
        >
          <Link to={`/coins/${coin.id}`}>
            <Image src={coin.image} alt={coin.name} />
          </Link>
          <SymbolText>{coin.symbol.toLocaleUpperCase()}</SymbolText>
          <ChangePriceText increase={coin.price_change_percentage_24h > 0}>
            {coin.price_change_percentage_24h > 0 && '+'}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </ChangePriceText>
        </Box>
      ))}
    </Slider>
  )
}

export default CommonSlider
