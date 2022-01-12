import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import { yellow } from '@mui/material/colors'

import { CryptoState, Currency } from 'context/cryptoContext'

const Header: FC = () => {
  const navigate = useNavigate()
  const { currency, setCurrency } = CryptoState()

  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography
            sx={{
              flex: 1,
              color: yellow[700],
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '18px',
            }}
            onClick={() => navigate('/')}
          >
            Crypto Tracker
          </Typography>
          <Select
            variant='outlined'
            labelId='crypto-type'
            id='crypto-type'
            value={currency}
            label='Age'
            onChange={e => {
              const value: Currency = e.target.value
              setCurrency && setCurrency(value)
            }}
            sx={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value='USD'>USD</MenuItem>
            <MenuItem value='VND'>VND</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
