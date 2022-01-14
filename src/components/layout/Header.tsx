import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar,
  Container,
  MenuItem,
  Select, SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CryptoState, Currency } from 'context/cryptoContext'
import { ThemeState } from 'context/themeContext'
import { blueTheme, greenTheme, pinkTheme, purpleTheme, yellowTheme } from 'theme'

const Header: FC = () => {
  const navigate = useNavigate()
  const {i18n} = useTranslation()
  const { currency, setCurrency } = CryptoState()
  const { theme, setTheme } = ThemeState()
  const [themeState, setThemeState] = useState('blue')

  const getSymbol = (value: string) => {
    if (value === 'usd') return '$'
    if (value === 'vnd') return 'VND '
    return '$'
  }

  const handleChangeTheme = (e: SelectChangeEvent) => {
    const value = e.target.value
    if (setTheme) {
      switch (value) {
        case 'blue':
          setThemeState('blue')
          setTheme(blueTheme)
          break
        case 'yellow':
          setThemeState('yellow')
          setTheme(yellowTheme)
          break
        case 'pink':
          setThemeState('pink')
          setTheme(pinkTheme)
          break
        case 'green':
          setThemeState('green')
          setTheme(greenTheme)
          break
        case 'purple':
          setThemeState('purple')
          setTheme(purpleTheme)
          break
      }
    }
  }

  return (
    <AppBar position='static' color='transparent'>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography
            sx={{
              flex: 1,
              color: 'primary.main',
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
            labelId='theme'
            id='theme'
            value={themeState}
            label='Age'
            onChange={handleChangeTheme}
            sx={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value='blue'>Blue</MenuItem>
            <MenuItem value='yellow'>Yellow</MenuItem>
            <MenuItem value='pink'>Pink</MenuItem>
            <MenuItem value='green'>Green</MenuItem>
            <MenuItem value='purple'>Purple</MenuItem>
          </Select>
          <Select
            variant='outlined'
            labelId='crypto-type'
            id='crypto-type'
            value={currency.value}
            label='Age'
            onChange={e => {
              const value = e.target.value as string
              const currency: Currency = {
                value,
                symbol: getSymbol(value),
              }
              setCurrency && setCurrency(currency)
              if(value === 'usd') i18n.changeLanguage('en')
              if(value === 'vnd') i18n.changeLanguage('vi')
            }}
            sx={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value='usd'>USD</MenuItem>
            <MenuItem value='vnd'>VND</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
