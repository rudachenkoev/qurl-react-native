import { ColorType, CustomButtonProps, VariantType } from '@/types/type'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'
import { Pressable, Text } from 'react-native'

const colorStyles: Record<ColorType, Record<VariantType, { wrapper: string; label: string }>> = {
  primary: {
    default: { wrapper: 'bg-primary-500', label: 'text-white' },
    outlined: { wrapper: 'bg-transparent border border-primary-500', label: 'text-primary-500' }
  },
  secondary: {
    default: { wrapper: 'bg-secondary-500', label: 'text-white' },
    outlined: { wrapper: 'bg-transparent border border-secondary-500', label: 'text-secondary-500' }
  },
  success: {
    default: { wrapper: 'bg-success-500', label: 'text-white' },
    outlined: { wrapper: 'bg-transparent border border-success-500', label: 'text-success-500' }
  },
  error: {
    default: { wrapper: 'bg-error-500', label: 'text-white' },
    outlined: { wrapper: 'bg-transparent border border-error-500', label: 'text-error-500' }
  }
}
const getColorStyle = (color: ColorType, variant: VariantType) =>
  colorStyles[color]?.[variant] || colorStyles.primary.default

const StyledPressable = styled(
  Pressable,
  'w-fit flex-row items-center justify-center rounded-lg px-4 py-2 transition disabled:opacity-50'
)
const StyledIonicons = styled(Ionicons)
const StyledText = styled(Text)

const CustomButton = ({
  label = '',
  labelStyle = 'text-lg font-medium',
  prependIcon = null,
  prependIconColor = '#000',
  prependIconSize = 24,
  prependIconStyle = 'mr-3',
  appendIcon = null,
  appendIconColor = '#000',
  appendIconSize = 24,
  appendIconStyle = 'ml-3',
  variant = 'default',
  color = 'primary',
  className = '',
  ...props
}: CustomButtonProps) => {
  const { wrapper: wrapperColorClasses, label: labelColorClasses } = getColorStyle(color, variant)
  return (
    <StyledPressable className={`${wrapperColorClasses} ${className}`} {...props}>
      {prependIcon && (
        <StyledIonicons
          name={prependIcon}
          color={prependIconColor}
          size={prependIconSize}
          className={prependIconStyle}
        />
      )}
      <StyledText className={`${labelColorClasses} ${labelStyle}`}>{label}</StyledText>
      {appendIcon && (
        <StyledIonicons name={appendIcon} color={appendIconColor} size={appendIconSize} className={appendIconStyle} />
      )}
    </StyledPressable>
  )
}

export default CustomButton
