import { TextInputProps } from 'react-native'

declare interface InputFieldProps extends TextInputProps {
  label: string
  appendIcon?: any
  prependIcon?: any
  labelStyle?: string
  containerStyle?: string
  inputStyle?: string
  prependIconStyle?: string
  appendIconStyle?: string
}
