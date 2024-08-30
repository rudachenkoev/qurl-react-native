import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import CustomOTPInput from '@/components/CustomOTPInput'
import axios from '@/libs/axios'
import { i18n } from '@/libs/i18n'
import { validateEmail, validatePassword } from '@/utils/validation'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text } from 'react-native'

const StyledLink = styled(Link)
const StyledText = styled(Text)

interface SignUpFormData {
  email: string
  password: string
  verificationCode: string
}

const SignUp = () => {
  const [step, setStep] = useState(1)

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

  const [submitLoading, setSubmitLoading] = useState(false)

  const onSubmit: SubmitHandler<SignUpFormData> = async data => {
    if (step === 1) await createVerificationRequest(data)
    else if (step === 2) await confirmVerificationRequest(data)
  }

  const createVerificationRequest = async (data: SignUpFormData) => {
    try {
      setSubmitLoading(true)
      await axios.post('api/v1/auth/registration-requests/', {
        email: data.email,
        password: data.password
      })
      setStep(2)
    } catch (err) {
      console.log('Verification request sending error', err)
    } finally {
      setSubmitLoading(false)
    }
  }

  const confirmVerificationRequest = async (data: SignUpFormData) => {
    try {
      setSubmitLoading(true)
      await axios.post('api/v1/auth/registration-requests/confirmation/', {
        email: data.email,
        verificationCode: data.verificationCode
      })
      alert('Successful registration')
    } catch (err) {
      console.log('Verification request confirmation error', err)
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <AuthWrapper title={i18n.t('signUp')} subtitle={i18n.t('createAnAccountToContinue')}>
      {step === 1 && (
        <>
          <CustomInput
            name="email"
            control={control}
            rules={{
              required: true,
              validate: validateEmail
            }}
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
            rules={{
              required: true,
              validate: validatePassword
            }}
            error={errors.password}
            label={i18n.t('password')}
            placeholder={i18n.t('enterYourPassword')}
            textContentType="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </>
      )}
      {step === 2 && (
        <>
          <StyledText className="text-base text-neutral-950 dark:text-neutral-100">
            {i18n.tsx('sentVerificationEmail', {
              email: (
                <StyledText className="font-medium text-primary-500 dark:text-slate-950">
                  {getValues('email')}
                </StyledText>
              )
            })}
          </StyledText>
          <CustomOTPInput
            name="verificationCode"
            control={control}
            rules={{
              required: true,
              minLength: 6,
              maxLength: 6
            }}
            error={errors.verificationCode}
          />
        </>
      )}

      <CustomButton
        label={i18n.t(step === 1 ? 'sendVerificationCode' : 'signUp')}
        loading={submitLoading}
        onPress={handleSubmit(onSubmit)}
      />

      {step === 1 && (
        <StyledLink href="/sign-in" className="mt-3 text-center text-sm text-neutral-950 dark:text-neutral-100">
          {i18n.t('alreadyHaveAnAccount')}{' '}
          <StyledText className="text-primary-500 dark:text-slate-950">{i18n.t('signIn')}</StyledText>
        </StyledLink>
      )}
    </AuthWrapper>
  )
}

export default SignUp
