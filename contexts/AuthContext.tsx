import * as SecureStore from 'expo-secure-store'
import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react'

interface IAuthContext {
  token: string
  updateToken: (token: string) => Promise<void>
  removeToken: () => Promise<void>
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await SecureStore.getItemAsync('userToken')
        if (storedToken) setToken(storedToken)
      } catch (error) {
        console.error('Failed to load user token:', error)
      }
    }

    loadToken()
  }, [])

  const updateToken = useCallback(async (newToken: string) => {
    try {
      await SecureStore.setItemAsync('userToken', newToken)
      setToken(newToken)
    } catch (error) {
      console.error('Failed to update token:', error)
    }
  }, [])

  const removeToken = useCallback(async () => {
    try {
      await SecureStore.deleteItemAsync('userToken')
      setToken('')
    } catch (error) {
      console.error('Failed to remove token:', error)
    }
  }, [])

  return <AuthContext.Provider value={{ token, updateToken, removeToken }}>{children}</AuthContext.Provider>
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
