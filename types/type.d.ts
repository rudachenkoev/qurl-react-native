import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { TextInputProps, TouchableOpacityProps } from 'react-native'

export type VariantType = 'default' | 'outlined'
export type ColorType = 'primary' | 'secondary' | 'success' | 'error'

declare interface CustomInputProps extends TextInputProps {
  label: string
  labelStyle?: string
  appendIcon?: any
  appendIconStyle?: string
  prependIcon?: any
  prependIconStyle?: string
  containerStyle?: string
  inputStyle?: string
}

declare interface CustomButtonProps extends TouchableOpacityProps {
  // Label
  label: string
  labelStyle?: string
  // Append icon
  appendIcon?: IconProps.name
  appendIconColor?: IconProps.color
  appendIconSize?: IconProps.size
  appendIconStyle?: string
  // Prepend icon
  prependIcon?: IconProps.name
  prependIconColor?: IconProps.color
  prependIconSize?: IconProps.size
  prependIconStyle?: string
  // Other
  color?: ColorType
  variant?: VariantType
  className?: string
}
