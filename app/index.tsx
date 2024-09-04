import { useAuth } from '@/contexts/AuthContext'
import { Redirect } from 'expo-router'

const Page = () => {
  const { token } = useAuth()

  if (token) return <Redirect href="/(root)/home" />

  return <Redirect href="/(auth)/onboarding" />
}

export default Page
