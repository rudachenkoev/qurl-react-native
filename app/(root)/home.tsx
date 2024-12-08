import ContactsSync from '@/components/ContactsSync'
import CustomButton from '@/components/CustomButton'
import QrCodeScanner from '@/components/QrCodeScanner'
import { useAuth } from '@/contexts/AuthContext'
import axios from '@/libs/axios'
import { Contact } from '@/types/type'
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

  const handleContactSync = async (contacts: Contact[]) => {
    try {
      await axios.post('api/v1/accounts/contacts/', contacts)
      alert('Success contact sync')
    } catch (err) {
      console.log('Contact synchronization error', err)
    }
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <CustomButton label={'Logout'} onPress={handleLogout} />
      <QrCodeScanner onSuccess={handleChannelLogin} />
      <ContactsSync onSuccess={handleContactSync} />
    </SafeAreaView>
  )
}

export default Home
