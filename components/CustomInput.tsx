import CustomIcon from '@/components/CustomIcon'
import PasswordVisibility from '@/components/PasswordVisibility'
import { CustomInputProps } from '@/types/type'
import { styled } from 'nativewind'
import { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)

const CustomInput = ({
  label = '',
  labelStyle = 'mb-1 px-2 text-sm',
  prependIcon,
  appendIcon,
  containerStyle,
  inputStyle,
  placeholder,
  textContentType,
  secureTextEntry = false,
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
        <StyledText className={labelStyle}>{label}</StyledText>
        <StyledView
          className={`flex w-full flex-row items-center justify-start rounded-lg bg-neutral-100 p-4 ${containerStyle}`}
        >
          {prependIcon && <CustomIcon {...prependIcon} />}
          <StyledTextInput
            className={`flex-1 ${inputStyle}`}
            placeholder={placeholder || label}
            placeholderTextColor="#b0b0b0"
            textContentType={textContentType}
            secureTextEntry={isSecure}
            {...props}
          />
          {renderAppendIcon()}
        </StyledView>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomInput
