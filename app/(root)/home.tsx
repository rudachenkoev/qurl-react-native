import CustomButton from '@/components/CustomButton'
import QrCodeScanner from '@/components/QrCodeScanner'
import { useAuth } from '@/contexts/AuthContext'
import axios from '@/libs/axios'
import { BarcodeScanningResult } from 'expo-camera'
import { router } from 'expo-router'
import { SafeAreaView, Text } from 'react-native'

const Home = () => {
  const { token, removeToken } = useAuth()

  const handleLogout = async () => {
    await removeToken()
    router.replace('/(auth)/sign-in')
  }

  const handleChannelLogin = async (result: BarcodeScanningResult) => {
    try {
      await axios.post('api/v1/auth/channel/confirmation/', {
        channel: result.data,
        token
      })
    } catch (err) {
      console.log('Channel authorization error', err)
    }
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <CustomButton label={'Logout'} onPress={handleLogout} />
      <QrCodeScanner onSuccess={handleChannelLogin} />
    </SafeAreaView>
  )
}

export default Home
