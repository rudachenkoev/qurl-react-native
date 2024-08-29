import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { Control, FieldError, FieldName, RegisterOptions } from 'react-hook-form'
import { ImageSourcePropType, TextInputProps, TouchableOpacityProps } from 'react-native'

export type VariantType = 'default' | 'outlined'
export type ColorType = 'primary' | 'secondary' | 'success' | 'error'
export type LanguageType = 'en' | 'uk'

declare interface CustomInputProps extends TextInputProps {
  label?: string
  appendIcon?: CustomIconProps
  prependIcon?: CustomIconProps
  // Validation
  name: FieldName
  rules?: RegisterOptions
  control: Control<any>
  error?: FieldError
  // Style props
  labelStyle?: string
  containerStyle?: string
  inputStyle?: string
  errorStyle?: string
}

declare interface CustomButtonProps extends TouchableOpacityProps {
  label: string
  appendIcon?: CustomIconProps
  prependIcon?: CustomIconProps
  color?: ColorType
  variant?: VariantType
  className?: string
  // Style props
  labelStyle?: string
}

type CustomIconPropsBase = {
  color?: IconProps['color']
  size?: IconProps['size']
  style?: string
}
type CustomIconPropsWithIcon = CustomIconPropsBase & {
  icon: IconProps['name']
  source?: never
}
type CustomIconPropsWithSource = CustomIconPropsBase & {
  icon?: never
  source: ImageSourcePropType
}
declare type CustomIconProps = CustomIconPropsWithIcon | CustomIconPropsWithSource
