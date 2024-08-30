import Message from '@/components/Message'
import { CustomOTPInputProps } from '@/types/type'
import { styled } from 'nativewind'
import React, { useRef, useState } from 'react'
import { Controller } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  View,
  useColorScheme
} from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTextInput = styled(TextInput)

const CustomOTPInput = ({
  name,
  control,
  rules = {},
  error,
  errorStyle,
  label,
  labelStyle,
  length = 6,
  containerStyle,
  inputStyle
}: CustomOTPInputProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const inputs = useRef<(TextInput | null)[]>([])

  const handleChangeText = (text: string, index: number, onChange: any) => {
    const newOtp = [...otp]
    newOtp[index] = text
    setOtp(newOtp)
    onChange(newOtp.join(''))

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus()
    } else if (!text && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const selectionColor = useColorScheme() === 'dark' ? '#f5f5f5' : '#0a0a0a'

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        {label ? (
          <StyledText className={`mb-1 px-2 text-sm text-neutral-950 dark:text-neutral-100 ${labelStyle}`}>
            {label}
          </StyledText>
        ) : null}

        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange } }) => (
            <StyledView className={`flex flex-row flex-nowrap items-center justify-between gap-2 ${containerStyle}`}>
              {otp.map((digit, index) => (
                <StyledTextInput
                  key={index}
                  value={digit}
                  onChangeText={text => handleChangeText(text, index, onChange)}
                  selectionColor={selectionColor}
                  onKeyPress={e => handleKeyPress(e, index)}
                  className={`h-12 flex-1 rounded-lg bg-neutral-100 text-center font-semibold text-neutral-950 dark:bg-zinc-800 dark:text-neutral-100 ${inputStyle}`}
                  keyboardType="number-pad"
                  maxLength={1}
                  ref={ref => (inputs.current[index] = ref as TextInput | null)}
                />
              ))}
            </StyledView>
          )}
        />

        {error && <Message type="error" message={error} messageStyle={`mt-1 ${errorStyle}`} />}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomOTPInput
