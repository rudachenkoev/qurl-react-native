import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
})

instance.interceptors.request.use(
  async config => {
    const storedToken = await SecureStore.getItemAsync('userToken')

    if (storedToken) {
      config.headers.Authorization = `Bearer ${storedToken}`
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.config && error.config.useInstanceErrorHandler === false) {
      return Promise.reject(error)
    }

    if (error.response?.status) {
      alert(error.response.data)
    }

    return Promise.reject(error)
  }
)

export default instance
