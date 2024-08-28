import CustomIcon from '@/components/CustomIcon'
import Message from '@/components/Message'
import PasswordVisibility from '@/components/PasswordVisibility'
import { CustomInputProps } from '@/types/type'
import { styled } from 'nativewind'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)

const CustomInput = ({
  name,
  control,
  error,
  label = '',
  labelStyle,
  prependIcon,
  appendIcon,
  containerStyle,
  inputStyle,
  placeholder,
  textContentType,
  secureTextEntry = false,
  rules = {},
  errorStyle,
  ...props
}: CustomInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry)

  const renderAppendIcon = () => {
    if (textContentType === 'password') return <PasswordVisibility value={isSecure} onChangeValue={setIsSecure} />
    else if (appendIcon) return <CustomIcon {...appendIcon} />
    else return null
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <StyledText className={`mb-1 px-2 text-sm ${labelStyle}`}>{label}</StyledText>
        <StyledView
          className={`flex w-full flex-row items-center justify-start rounded-lg bg-neutral-100 p-4 ${containerStyle}`}
        >
          {prependIcon && <CustomIcon {...prependIcon} />}
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <StyledTextInput
                className={`flex-1 ${inputStyle}`}
                placeholder={placeholder || label}
                placeholderTextColor="#b0b0b0"
                textContentType={textContentType}
                secureTextEntry={isSecure}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
              />
            )}
          />
          {renderAppendIcon()}
        </StyledView>
        {error && <Message type="error" message={error} messageStyle="mt-1" />}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomInput
