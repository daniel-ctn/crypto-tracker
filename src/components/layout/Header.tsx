import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AppBar, Button,
  Container,
  MenuItem,
  Select, SelectChangeEvent,
  Toolbar,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CryptoState, Currency } from 'context/cryptoContext'
import { ThemeState } from 'context/themeContext'
import { blueTheme, greenTheme, pinkTheme, purpleTheme, orangeTheme } from 'config/theme'
import AuthModal from '../modal/AuthModal'

const Header: FC = () => {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const { currency, setCurrency } = CryptoState()
  const { theme, setTheme } = ThemeState()
  const [themeState, setThemeState] = useState('blue')
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
        case 'orange':
          setThemeState('orange')
          setTheme(orangeTheme)
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
    <>
      <AppBar position='static' color='transparent'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography
              flex={1} color='primary.main' fontWeight='bold' fontSize={18}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              Crypto Tracker
            </Typography>
            <Select
              variant='outlined'
              labelId='theme'
              id='theme'
              value={themeState}
              label='Theme'
              onChange={handleChangeTheme}
              sx={{
                width: 100,
                height: 40,
                marginLeft: 5,
              }}
            >
              <MenuItem value='blue'>Blue</MenuItem>
              <MenuItem value='orange'>Orange</MenuItem>
              <MenuItem value='pink'>Pink</MenuItem>
              <MenuItem value='green'>Green</MenuItem>
              <MenuItem value='purple'>Purple</MenuItem>
            </Select>
            <Select
              variant='outlined'
              labelId='crypto-type'
              id='crypto-type'
              value={currency.value}
              label='Currency'
              onChange={e => {
                const value = e.target.value as string
                const currency: Currency = {
                  value,
                  symbol: getSymbol(value),
                }
                setCurrency && setCurrency(currency)
                if (value === 'usd') i18n.changeLanguage('en')
                if (value === 'vnd') i18n.changeLanguage('vi')
              }}
              sx={{
                width: 100,
                height: 40,
                marginLeft: 5,
              }}
            >
              <MenuItem value='usd'>USD</MenuItem>
              <MenuItem value='vnd'>VND</MenuItem>
            </Select>
            <Button sx={{ px: 4, ml: 5 }} variant='contained' onClick={handleOpen}>Sign In</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <AuthModal open={open} handleClose={handleClose}/>
    </>
  )
}

export default Header
