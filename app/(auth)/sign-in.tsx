import Logo from '@/assets/images/favicon.png'
import InputField from '@/components/InputField'
import { useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <View className="flex-1">
      <View className="flex-1 bg-[#4285F4]" />
      <View className="flex-1 bg-[#F6F6F6]" />
      <SafeAreaView className="absolute inset-x-0 top-0">
        <View className="p-8">
          <View className="flex items-center">
            <Image source={Logo} />
            <Text className="my-6 text-center text-4xl font-bold text-white">Sign in to your Account</Text>
            <Text className="text-center text-white">Create an account or log in to explore about our app</Text>
          </View>
          <View className="mt-8 rounded-lg bg-white p-4 shadow" style={{ gap: 12 }}>
            <InputField
              label="Email"
              placeholder="Enter your email"
              textContentType="emailAddress"
              value={form.email}
              inputMode="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect={false}
              returnKeyType="next"
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              textContentType="password"
              secureTextEntry={true}
              appendIcon={Logo}
              value={form.password}
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, password: value })}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SignIn
