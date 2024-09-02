import Message from '@/components/Message'
import ThemedText from '@/components/ThemedText'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { CustomOTPInputProps } from '@/types/type'
import { useCallback, useRef, useState } from 'react'
import { Controller } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  TextInput,
  TextInputKeyPressEventData,
  View
} from 'react-native'

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
  wrapperStyle,
  inputStyle,
  ...props
}: CustomOTPInputProps) => {
  const { isDarkTheme } = useTheme()

  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const inputs = useRef<(TextInput | null)[]>([])

  const handleChangeText = useCallback(
    (text: string, index: number, onChange: (value: string) => void) => {
      const newOtp = [...otp]
      newOtp[index] = text
      setOtp(newOtp)
      onChange(newOtp.join(''))

      if (text && index < length - 1) {
        inputs.current[index + 1]?.focus()
      } else if (!text && index > 0) {
        inputs.current[index - 1]?.focus()
      }
    },
    [otp, length]
  )

  const handleKeyPress = useCallback(
    (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
      if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
        inputs.current[index - 1]?.focus()
      }
    },
    [otp]
  )

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className={wrapperStyle}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        {label ? (
          <ThemedText type="label" className={`mb-1 px-2 ${labelStyle}`}>
            {label}
          </ThemedText>
        ) : null}

        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange } }) => (
            <View className={`flex flex-row flex-nowrap items-center justify-between gap-2 ${containerStyle}`}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  value={digit}
                  onChangeText={text => handleChangeText(text, index, onChange)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  className={`h-12 flex-1 rounded-lg text-center font-NunitoSemiBold ${isDarkTheme ? 'bg-shark-800 text-shark-50' : 'bg-shark-100 text-shark-950'} ${inputStyle}`}
                  keyboardType="number-pad"
                  placeholder="_"
                  placeholderTextColor={colors.shark[300]}
                  selectionColor={isDarkTheme ? colors.shark[50] : colors.shark[950]}
                  maxLength={1}
                  ref={ref => (inputs.current[index] = ref as TextInput | null)}
                  {...props}
                />
              ))}
            </View>
          )}
        />

        {error && <Message type="error" message={error} messageStyle={`mt-1 ${errorStyle}`} />}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomOTPInput
