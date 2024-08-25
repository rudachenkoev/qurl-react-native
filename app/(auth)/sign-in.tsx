import GoogleLogo from '@/assets/icons/google.png'
import Logo from '@/assets/images/favicon.png'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { i18n } from '@/libs/i18n'
import { styled } from 'nativewind'
import { useState } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledImage = styled(Image)
const StyledSafeAreaView = styled(SafeAreaView)

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <StyledView className="flex-1">
      <StyledView className="flex-1 bg-primary-500" />
      <StyledView className="flex-1 bg-secondary-50" />
      <StyledSafeAreaView className="absolute inset-x-0 top-0">
        <StyledView className="p-8">
          <StyledView className="flex items-center">
            <StyledImage source={Logo} />
            <StyledText className="my-6 text-center text-4xl font-bold text-white">
              {i18n.t('signInToYourAccount')}
            </StyledText>
            <StyledText className="text-center text-white">{i18n.t('createAccountOrLogIn')}</StyledText>
          </StyledView>
          <StyledView className="mt-8 rounded-lg bg-white p-4 shadow" style={{ gap: 12 }}>
            <CustomInput
              label={i18n.t('email')}
              placeholder={i18n.t('enterYourEmail')}
              textContentType="emailAddress"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect={false}
              value={form.email}
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <CustomInput
              label={i18n.t('password')}
              placeholder={i18n.t('enterYourPassword')}
              textContentType="password"
              secureTextEntry={true}
              appendIcon={{ icon: 'eye-outline', style: 'ml-3' }}
              autoCapitalize="none"
              autoCorrect={false}
              value={form.password}
              onChangeText={value => setForm({ ...form, password: value })}
            />
            <CustomButton label={i18n.t('signIn')} onPress={() => alert('Button Pressed!')} />
            <CustomButton
              label={i18n.t('signInWithGoogle')}
              variant="outlined"
              prependIcon={{ source: GoogleLogo, style: 'mr-3' }}
              onPress={() => alert('Button Pressed!')}
            />
          </StyledView>
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  )
}

export default SignIn
