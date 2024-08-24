import { CustomInputProps } from '@/types/type'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from 'react-native'

const CustomInput = ({
  label,
  labelStyle,
  prependIcon,
  prependIconStyle,
  appendIcon,
  appendIconStyle,
  containerStyle,
  inputStyle,
  placeholder,
  ...props
}: CustomInputProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <View>
          <Text className={`mb-1 px-2 text-sm ${labelStyle}`}>{label}</Text>
          <View
            className={`flex w-full flex-row items-center justify-start rounded-lg bg-neutral-100 p-4 ${containerStyle}`}
          >
            {prependIcon && <Image source={prependIcon} className={`mr-3 h-6 w-6 ${prependIconStyle}`} />}
            <TextInput
              className={`flex-1 ${inputStyle}`}
              placeholder={placeholder || label}
              placeholderTextColor="#94a3b8"
              {...props}
            />
            {appendIcon && <Ionicons name="eye" size={24} className={`ml-3 ${appendIconStyle}`} />}
          </View>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomInput
