import { IconProps } from '@expo/vector-icons/build/createIconSet'
import { ImageSourcePropType, TextInputProps, TouchableOpacityProps } from 'react-native'

export type VariantType = 'default' | 'outlined'
export type ColorType = 'primary' | 'secondary' | 'success' | 'error'
export type LanguageType = 'en' | 'uk'

declare interface CustomInputProps extends TextInputProps {
  label: string
  labelStyle?: string
  appendIcon?: CustomIconProps
  prependIcon?: CustomIconProps
  containerStyle?: string
  inputStyle?: string
}

declare interface CustomButtonProps extends TouchableOpacityProps {
  label: string
  labelStyle?: string
  appendIcon?: CustomIconProps
  prependIcon?: CustomIconProps
  color?: ColorType
  variant?: VariantType
  className?: string
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
