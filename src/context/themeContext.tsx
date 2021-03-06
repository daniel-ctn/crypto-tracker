import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from 'react'
import { Theme } from '@mui/material'
import { blueTheme } from '../config/theme'

interface ThemeContextInterface {
  theme: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

const initialContextValue: ThemeContextInterface = {
  theme: blueTheme,
}

const ThemeCtx = createContext<ThemeContextInterface>(initialContextValue)

export const ThemeContext: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialContextValue.theme)

  console.log({theme})

  return (
    <ThemeCtx.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const ThemeContextState = () => useContext(ThemeCtx)