import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { i18n } from '@/libs/i18n'
import { validateEmail } from '@/utils/validation'
import { Link } from 'expo-router'
import { styled } from 'nativewind'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text } from 'react-native'

const StyledLink = styled(Link)
const StyledText = styled(Text)

interface SignUpFormData {
  email: string
  verificationCode: string
}

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      verificationCode: ''
    }
  })
  const onSubmit: SubmitHandler<SignUpFormData> = data => console.log(data)

  return (
    <AuthWrapper title={i18n.t('signUp')} subtitle={i18n.t('createAnAccountToContinue')}>
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
      <CustomButton label={i18n.t('signUp')} onPress={handleSubmit(onSubmit)} />
      <StyledLink href="/sign-in" className="mt-3 text-center text-sm text-neutral-950 dark:text-neutral-100">
        {i18n.t('alreadyHaveAnAccount')}{' '}
        <StyledText className="text-primary-500 dark:text-slate-950">{i18n.t('signIn')}</StyledText>
      </StyledLink>
    </AuthWrapper>
  )
}

export default SignUp
