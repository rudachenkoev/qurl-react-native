import { FC, ReactNode, createContext, useContext, useState } from 'react'
import { useColorScheme } from 'react-native'

export type ThemeType = 'light' | 'dark' | null
interface IThemeContext {
  theme: ThemeType
  systemTheme: ThemeType
  setTheme: (theme: ThemeType) => void
  isLightTheme: boolean
  isDarkTheme: boolean
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const systemTheme = useColorScheme()
  const [theme, setTheme] = useState(systemTheme)
  const isDarkTheme = theme === 'dark'
  const isLightTheme = theme !== 'dark'

  return (
    <ThemeContext.Provider
      value={{ theme: theme || 'light', setTheme, systemTheme: systemTheme || null, isDarkTheme, isLightTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
