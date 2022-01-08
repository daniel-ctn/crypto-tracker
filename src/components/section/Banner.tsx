import { FC, ReactElement } from 'react'
import { styled } from '@mui/system'
import { Container, Typography } from '@mui/material'

import bannerImg from 'assests/banner2.jpg'

const BannerWrapper = styled('div')({
  backgroundImage: `url(${bannerImg})`,
})

const BannerContainer = styled(Container)({
  height: 400,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 25,
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
  return (
    <BannerWrapper>
      <BannerContainer>
        <TagLine>
          <Typography
            variant='h2'
            sx={{
              fontWeight: 'bold',
              marginBottom: '15px',
              letterSpacing: '2px',
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant='subtitle2'
            gutterBottom
            sx={{
              color: 'darkgrey',
              textTransform: 'capitalize',
            }}
          >
            Get all the Info regarding your favorite Crypto currency
          </Typography>
        </TagLine>
      </BannerContainer>
    </BannerWrapper>
  )
}

export default Banner
