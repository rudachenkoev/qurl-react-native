import GoogleLogo from '@/assets/icons/GoogleLogo'
import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import ThemedLink from '@/components/ThemedLink'
import ThemedText from '@/components/ThemedText'
import { useAuth } from '@/contexts/AuthContext'
import axios from '@/libs/axios'
import { i18n } from '@/libs/i18n'
import { validateEmail } from '@/utils/validation'
import { router } from 'expo-router'
import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface SignInFormData {
  email: string
  password: string
}

const SignIn = () => {
  const [formState, setFormState] = useState({ loading: false })

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { updateToken } = useAuth()
  const onSubmit: SubmitHandler<SignInFormData> = useCallback(async data => {
    try {
      setFormState(prev => ({ ...prev, loading: true }))
      const response = await axios.post('api/v1/auth/login/', data)
      await updateToken(response.data.bearer)
      router.replace('/(root)/home')
    } catch (err) {
      console.log('Authorization error', err)
    } finally {
      setFormState(prev => ({ ...prev, loading: false }))
    }
  }, [])

  const handleGoogleSignIn = useCallback(() => {
    alert('Sign in with Google')
  }, [])

  return (
    <AuthWrapper title={i18n.t('signInToYourAccount')} subtitle={i18n.t('createAccountOrLogIn')}>
      <CustomInput
        name="email"
        control={control}
        rules={{ required: true, validate: validateEmail }}
        error={errors.email}
        label={i18n.t('email')}
        placeholder={i18n.t('enterYourEmail')}
        textContentType="emailAddress"
        inputMode="email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CustomInput
        name="password"
        control={control}
        rules={{ required: true }}
        error={errors.password}
        label={i18n.t('password')}
        placeholder={i18n.t('enterYourPassword')}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        wrapperStyle="mt-3"
      />
      <CustomButton
        label={i18n.t('signIn')}
        loading={formState.loading}
        className="mt-3"
        onPress={handleSubmit(onSubmit)}
      />
      <CustomButton
        label={i18n.t('signInWithGoogle')}
        variant="outlined"
        className="mt-3"
        prependIcon={{ svgSource: GoogleLogo, size: 32, style: 'mr-3' }}
        onPress={handleGoogleSignIn}
      />
      <ThemedText className="mt-6 text-center text-sm">
        {i18n.t('dontHaveAnAccount')} <ThemedLink href="/sign-up">{i18n.t('signUp')}</ThemedLink>
      </ThemedText>
    </AuthWrapper>
  )
}

export default SignIn
