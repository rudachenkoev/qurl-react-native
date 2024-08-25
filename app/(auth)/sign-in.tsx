import GoogleLogo from '@/assets/icons/google.png'
import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { i18n } from '@/libs/i18n'
import { useState } from 'react'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <AuthWrapper title={i18n.t('signInToYourAccount')} subtitle={i18n.t('createAccountOrLogIn')}>
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
    </AuthWrapper>
  )
}

export default SignIn
