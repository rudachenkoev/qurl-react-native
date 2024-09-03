import CustomIcon from '@/components/CustomIcon'
import Message from '@/components/Message'
import PasswordVisibility from '@/components/PasswordVisibility'
import ThemedText from '@/components/ThemedText'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { CustomInputProps } from '@/types/type'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, View } from 'react-native'

const CustomInput = ({
  name,
  control,
  rules = {},
  error,
  errorStyle,
  label = '',
  labelStyle,
  prependIcon,
  appendIcon,
  containerStyle,
  inputStyle,
  placeholder,
  textContentType = 'none',
  secureTextEntry = false,
  wrapperStyle,
  ...props
}: CustomInputProps) => {
  const { isDarkTheme } = useTheme()

  const [isSecure, setIsSecure] = useState(secureTextEntry)

  const renderAppendIcon = () => {
    if (textContentType === 'password') return <PasswordVisibility value={isSecure} onChangeValue={setIsSecure} />
    else if (appendIcon) return <CustomIcon {...appendIcon} />
    else return null
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className={wrapperStyle}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        {label ? (
          <ThemedText type="label" className={`mb-1 px-2 ${labelStyle}`}>
            {label}
          </ThemedText>
        ) : null}

        <View
          className={`h-12 w-full flex-row items-center justify-start rounded-lg px-4 ${isDarkTheme ? 'bg-shark-800' : 'bg-shark-100'} ${containerStyle}`}
        >
          {prependIcon && <CustomIcon {...prependIcon} />}

          <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                className={`h-full flex-1 font-NunitoRegular ${isDarkTheme ? 'text-shark-50' : 'text-shark-950'} ${inputStyle}`}
                placeholder={placeholder || label}
                placeholderTextColor={colors.shark[300]}
                textContentType={textContentType}
                selectionColor={isDarkTheme ? colors.shark[50] : colors.shark[950]}
                secureTextEntry={isSecure}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                {...props}
              />
            )}
          />

          {renderAppendIcon()}
        </View>

        {error && <Message type="error" message={error} messageStyle={`mt-1 ${errorStyle}`} />}
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomInput
