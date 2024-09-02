import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { Control, FieldError, FieldName, RegisterOptions } from 'react-hook-form'
import { ImageSourcePropType, PressableProps, TextInputProps } from 'react-native'

export type VariantType = 'default' | 'outlined' | 'text'
export type ColorType = 'primary' | 'secondary'
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
  wrapperStyle?: string
  labelStyle?: string
  containerStyle?: string
  inputStyle?: string
  errorStyle?: string
}

declare interface CustomOTPInputProps {
  label?: string
  length?: number
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

declare interface Option {
  id: string | number
  name: string
  [key: string]: any
}
declare interface CustomSelectProps {
  label?: string
  placeholder?: string
  options: Option[]
  optionValue?: string
  optionLabel?: string
  onSelect?: (optionValue: string | number) => void
  // Validation
  name: FieldName
  rules?: RegisterOptions
  control: Control<any>
  error?: FieldError
  // Style props
  labelStyle?: string
  wrapperStyle?: string
  errorStyle?: string
}

declare interface CustomButtonProps extends PressableProps {
  label: string
  appendIcon?: CustomIconProps
  prependIcon?: CustomIconProps
  color?: ColorType
  variant?: VariantType
  loading?: boolean
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
