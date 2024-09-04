import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import CustomOTPInput from '@/components/CustomOTPInput'
import ThemedLink from '@/components/ThemedLink'
import ThemedText from '@/components/ThemedText'
import { useAuth } from '@/contexts/AuthContext'
import { useTheme } from '@/contexts/ThemeContext'
import axios from '@/libs/axios'
import { i18n } from '@/libs/i18n'
import { validateEmail, validatePassword } from '@/utils/validation'
import { router } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface SignUpFormData {
  email: string
  password: string
  verificationCode: string
}

const SignUp = () => {
  const { isDarkTheme } = useTheme()

  const [formState, setFormState] = useState({ step: 1, loading: false })
  const [cooldown, setCooldown] = useState(0)

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      verificationCode: ''
    }
  })

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (cooldown > 0) {
      timer = setTimeout(() => setCooldown(cooldown - 1), 1000)
    }
    return () => clearTimeout(timer)
  }, [cooldown])

  const onSubmit: SubmitHandler<SignUpFormData> = useCallback(
    data => {
      if (formState.step === 1) createVerificationRequest(data.email, data.password)
      else confirmVerificationRequest(data)
    },
    [formState.step]
  )

  const createVerificationRequest = useCallback(
    async (email: string, password: string) => {
      try {
        setFormState(prev => ({ ...prev, loading: true }))
        await axios.post('api/v1/auth/registration-requests/', {
          email,
          password
        })
        setFormState(prev => ({ ...prev, step: 2 }))
        setCooldown(30)
      } catch (err) {
        console.log('Verification request sending error', err)
      } finally {
        setFormState(prev => ({ ...prev, loading: false }))
      }
    },
    [cooldown]
  )

  const handleResendVerification = useCallback(() => {
    if (cooldown > 0) return
    const { email, password } = getValues()
    createVerificationRequest(email, password)
  }, [createVerificationRequest, getValues])

  const { updateToken } = useAuth()
  const confirmVerificationRequest = useCallback(async (data: SignUpFormData) => {
    try {
      setFormState(prev => ({ ...prev, loading: true }))
      const response = await axios.post('api/v1/auth/registration-requests/confirmation/', {
        email: data.email,
        verificationCode: data.verificationCode
      })
      await updateToken(response.data.bearer)
      router.replace('/(root)/home')
    } catch (err) {
      console.log('Verification request confirmation error', err)
    } finally {
      setFormState(prev => ({ ...prev, loading: false }))
    }
  }, [])

  return (
    <AuthWrapper title={i18n.t('signUp')} subtitle={i18n.t('createAnAccountToContinue')}>
      {formState.step === 1 && (
        <>
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
            rules={{ required: true, validate: validatePassword }}
            error={errors.password}
            label={i18n.t('password')}
            placeholder={i18n.t('createNewPassword')}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            passwordRules="required: lower; required: upper; required: digit;"
            wrapperStyle="mt-3"
          />
        </>
      )}
      {formState.step === 2 && (
        <>
          <ThemedText>
            {i18n.tsx('sentVerificationEmail', {
              email: (
                <ThemedText
                  className={`font-NunitoSemiBold underline ${isDarkTheme ? 'text-shark-300' : 'text-shark-800'}`}
                >
                  {getValues('email')}
                </ThemedText>
              )
            })}
          </ThemedText>
          <CustomOTPInput
            name="verificationCode"
            control={control}
            wrapperStyle="mt-3"
            rules={{ required: true, minLength: 6, maxLength: 6 }}
          />
        </>
      )}

      <CustomButton
        label={i18n.t(formState.step === 1 ? 'sendVerificationCode' : 'signUp')}
        loading={formState.loading}
        className="mt-3"
        onPress={handleSubmit(onSubmit)}
      />

      {formState.step === 1 && (
        <ThemedText className="mt-6 text-center text-sm">
          {i18n.t('alreadyHaveAnAccount')} <ThemedLink href="/sign-in">{i18n.t('signIn')}</ThemedLink>
        </ThemedText>
      )}
      {formState.step === 2 && (
        <CustomButton
          label={i18n.t('changeEmail')}
          variant="outlined"
          className="mt-3"
          onPress={() => setFormState(prev => ({ ...prev, step: 1 }))}
        />
      )}

      {formState.step === 2 && cooldown > 0 && (
        <ThemedText className="mt-6 text-center text-sm">{i18n.t('resendEmailIn', { sec: cooldown })}</ThemedText>
      )}
      {formState.step === 2 && cooldown <= 0 && (
        <CustomButton
          label={i18n.t('resendEmail')}
          variant="text"
          className="mt-3"
          labelStyle="text-sm"
          onPress={handleResendVerification}
        />
      )}
    </AuthWrapper>
  )
}

export default SignUp
