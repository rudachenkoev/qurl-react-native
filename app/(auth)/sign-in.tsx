import GoogleLogo from '@/assets/icons/google.png'
import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import axios from '@/libs/axios'
import { i18n } from '@/libs/i18n'
import { validateEmail } from '@/utils/validation'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text } from 'react-native'

const StyledLink = styled(Link)
const StyledText = styled(Text)

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
  const onSubmit: SubmitHandler<SignInFormData> = async data => {
    try {
      setFormState(prev => ({ ...prev, loading: true }))
      await axios.post('api/v1/auth/login/', data)
      alert('Successful authorization')
    } catch (err) {
      console.log('Authorization error', err)
    } finally {
      setFormState(prev => ({ ...prev, loading: false }))
    }
  }

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
      />
      <CustomButton label={i18n.t('signIn')} loading={formState.loading} onPress={handleSubmit(onSubmit)} />
      <CustomButton
        label={i18n.t('signInWithGoogle')}
        variant="outlined"
        prependIcon={{ source: GoogleLogo, style: 'mr-3' }}
        onPress={() => alert('Button Pressed!')}
      />
      <StyledLink href="/sign-up" className="mt-3 text-center text-sm text-neutral-950 dark:text-neutral-100">
        {i18n.t('dontHaveAnAccount')}{' '}
        <StyledText className="text-primary-500 dark:text-slate-950">{i18n.t('signUp')}</StyledText>
      </StyledLink>
    </AuthWrapper>
  )
}

export default SignIn
