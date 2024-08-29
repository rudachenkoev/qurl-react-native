import GoogleLogo from '@/assets/icons/google.png'
import AuthWrapper from '@/components/AuthWrapper'
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import { i18n } from '@/libs/i18n'
import { validateEmail } from '@/utils/validation'
import { SubmitHandler, useForm } from 'react-hook-form'

interface SignInFormData {
  email: string
  password: string
}

const SignIn = () => {
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
  const onSubmit: SubmitHandler<SignInFormData> = data => console.log(data)

  return (
    <AuthWrapper title={i18n.t('signInToYourAccount')} subtitle={i18n.t('createAccountOrLogIn')}>
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
        rules={{ required: true }}
        error={errors.password}
        label={i18n.t('password')}
        placeholder={i18n.t('enterYourPassword')}
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <CustomButton label={i18n.t('signIn')} onPress={handleSubmit(onSubmit)} />
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
