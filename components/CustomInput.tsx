import CustomIcon from '@/components/CustomIcon'
import { CustomInputProps } from '@/types/type'
import { styled } from 'nativewind'
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
  ...props
}: CustomInputProps) => {
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
            {...props}
          />
          {appendIcon && <CustomIcon {...appendIcon} />}
        </StyledView>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default CustomInput
