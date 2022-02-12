import { FC, ReactElement } from 'react'
import { styled } from '@mui/system'
import { Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Carousel from './Carousel'
import bannerImg from '../../assests/banner3.jpg'

const BannerWrapper = styled('div')({
  backgroundImage: `linear-gradient(to right, rgba(67, 198, 172, 0.2), rgba(25, 22, 84, 0.6)), url(${bannerImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

const BannerContainer = styled(Container)({
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 50,
  justifyContent: 'space-around',
})

const TagLine = styled('div')({
  display: 'flex',
  height: '40%',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
})

const Banner: FC = (): ReactElement => {
  const { t } = useTranslation()

  return (
    <BannerWrapper>
      <BannerContainer>
        <TagLine>
          <Typography
            variant='h2'
            color='primary.main'
            fontWeight='bold'
            mb='15px'
            letterSpacing='2px'
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant='subtitle2'
            gutterBottom
            color='darkgrey'
            sx={{ textTransform: 'capitalize' }}
          >
            {t('desc')}
          </Typography>
        </TagLine>
        <Carousel />
      </BannerContainer>
    </BannerWrapper>
  )
}

export default Banner
