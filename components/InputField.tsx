import { InputFieldProps } from '@/types/type'
import Ionicons from '@expo/vector-icons/Ionicons'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native'

const InputField = ({
  label,
  prependIcon,
  appendIcon,
  labelStyle,
  containerStyle,
  inputStyle,
  prependIconStyle,
  appendIconStyle,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text className={`mb-1 px-2 text-sm ${labelStyle}`}>{label}</Text>
          <View
            className={`flex w-full flex-row items-center justify-start rounded-lg bg-neutral-100 p-4 ${containerStyle}`}
          >
            {prependIcon && <Image source={prependIcon} className={`mr-3 h-6 w-6 ${prependIconStyle}`} />}
            <TextInput className={`flex-1 ${inputStyle}`} placeholderTextColor="#94a3b8" {...props} />
            {/*{appendIcon && <Image source={appendIcon} className={`ml-3 h-6 w-6 ${appendIconStyle}`} />}*/}
            {appendIcon && <Ionicons name="eye" size={24} className={`ml-3 ${appendIconStyle}`} />}

          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default InputField
