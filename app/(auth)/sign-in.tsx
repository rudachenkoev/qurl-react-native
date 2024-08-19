import { Image, SafeAreaView, Text, View } from 'react-native'
import Logo from '../../assets/images/favicon.png'

const SignIn = () => {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-[#4285F4]" />
      <View className="flex-1 bg-[#F6F6F6]" />
      <SafeAreaView className="absolute flex items-center">
        <Image source={Logo} />
        <Text className="w-3/4 text-center text-4xl font-semibold text-white">Sign in to your Account</Text>
        <Text className="w-3/4 text-center text-white">Create an account or log in to explore about our app</Text>
      </SafeAreaView>
    </View>
  )
}

export default SignIn
