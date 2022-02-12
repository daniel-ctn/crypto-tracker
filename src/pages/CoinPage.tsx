import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { styled } from '@mui/system'
import parse from 'html-react-parser'

import { useSingleCoin } from 'config/queries'
import { formatCurrency } from 'utils/currency'
import { CryptoContextState } from 'context/cryptoContext'

import CoinInfo from 'components/section/CoinInfo'
import { useTranslation } from 'react-i18next'

const Image = styled('img')({
  width: '40%',
  margin: '10px 0 20px',
})

const CoinPage: FC = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { data, isLoading } = useSingleCoin(id)
  const { currency } = CryptoContextState()

  const change = data?.market_data.price_change_percentage_24h

  const getPrice = () => {
    if (currency.symbol === '$') return data?.market_data.current_price.usd
    if (currency.symbol.trim() === 'VND')
      return data?.market_data.current_price.vnd
    return data?.market_data.current_price.usd
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        {isLoading ? (
          <LinearProgress />
        ) : (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt={4}
            px={4}
            borderRight={2}
          >
            <Image src={data?.image?.large} />
            <Typography variant='h3' fontWeight='bold' mb={4}>
              {data?.name}
            </Typography>
            <>
              {currency.value === 'usd' && (
                <Typography variant='subtitle1' letterSpacing='2px' mb={2}>
                  {parse(data?.description?.en?.split('. ')[0] || '')}
                </Typography>
              )}
              {currency.value === 'vnd' && (
                <Typography variant='subtitle1' letterSpacing='2px' mb={2}>
                  {parse(data?.description?.vi?.split('. ')[0] || '')}
                </Typography>
              )}
            </>
            <Typography variant='h5' mb={2}>
              <strong>{t('detail.rank')}</strong>
              {data?.market_cap_rank}
            </Typography>
            <Typography variant='h5' mb={2}>
              <strong>{t('detail.price')}</strong>
              {formatCurrency(getPrice() || 0, currency.symbol).format()}
            </Typography>
            <Typography variant='h5'>
              <strong>{t('detail.change')}</strong>
              <span
                style={{ color: change && change > 0 ? green[400] : red[400] }}
              >
                {change && change > 0 && '+'}
                {change?.toFixed(2)}%
              </span>
            </Typography>
          </Box>
        )}
      </Grid>
      <Grid item xs={12} md={8}>
        <CoinInfo id={id} currency={currency.value} />
      </Grid>
    </Grid>
  )
}

export default CoinPage
