import CustomButton from '@/components/CustomButton'
import { useAuth } from '@/contexts/AuthContext'
import { router } from 'expo-router'
import { SafeAreaView, Text } from 'react-native'

const Home = () => {
  const { removeToken } = useAuth()
  const handleLogout = async () => {
    await removeToken()
    router.replace('/(auth)/onboarding')
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <CustomButton label={'Logout'} onPress={handleLogout} />
    </SafeAreaView>
  )
}

export default Home
