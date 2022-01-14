import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { styled } from '@mui/system'

import { useSingleCoin } from 'config/queries'
import { formatCurrency } from 'utils/currency'
import { CryptoState } from 'context/cryptoContext'

import CoinInfo from 'components/section/CoinInfo'

const Image = styled('img')({
  width: '40%',
  margin: '10px 0 20px',
})

const CoinPage: FC = () => {
  const { id } = useParams()
  const { data } = useSingleCoin(id)
  const { currency } = CryptoState()

  const change = data?.market_data.price_change_percentage_24h

  const getPrice = () => {
    if (currency.symbol === '$')
      return data?.market_data.current_price.usd
    if (currency.symbol.trim() === 'VND')
      return data?.market_data.current_price.vnd
    return data?.market_data.current_price.usd
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '25px',
          padding: '0 30px',
          borderRight: '2px solid grey',
        }}>
          <Image src={data?.image?.large} />
          <Typography variant='h3' fontWeight='bold' marginBottom='20px'>{data?.name}</Typography>
          <Typography variant='subtitle1' marginBottom='20px'>
            {currency.value === 'usd' && data?.description?.en.substr(0, 200).concat('...')}
            {currency.value === 'vnd' && data?.description?.vi.substr(0, 200).concat('...')}
          </Typography>
          <Typography variant='h5' marginBottom='15px'>
            <strong>Rank: </strong>{data?.market_cap_rank}
          </Typography>
          <Typography variant='h5' marginBottom='15px'>
            <strong>Current price: </strong>{formatCurrency(getPrice() || 0, currency.symbol).format()}
          </Typography>
          <Typography variant='h5'>
            <strong>Change 24h: {' '}</strong>
            <span style={{ color: change && change > 0 ? green[400] : red[400] }}>
              {change && change > 0 && '+'}
              {change?.toFixed(2)}%
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <CoinInfo />
      </Grid>
    </Grid>
  )
}

export default CoinPage
