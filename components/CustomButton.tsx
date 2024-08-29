import CustomIcon from '@/components/CustomIcon'
import { ColorType, CustomButtonProps, VariantType } from '@/types/type'
import { styled } from 'nativewind'
import { Pressable, Text } from 'react-native'

const colorStyles: Record<ColorType, Record<VariantType, { wrapper: string; label: string }>> = {
  primary: {
    default: { wrapper: 'bg-primary-500 dark:bg-slate-950', label: 'text-neutral-100' },
    outlined: {
      wrapper: 'bg-transparent border border-primary-500 dark:border-neutral-100',
      label: 'text-primary-500 dark:text-neutral-100'
    }
  },
  secondary: {
    default: { wrapper: 'bg-secondary-500', label: 'text-neutral-100' },
    outlined: { wrapper: 'bg-transparent border border-secondary-500', label: 'text-secondary-500' }
  },
  success: {
    default: { wrapper: 'bg-success-500', label: 'text-neutral-100' },
    outlined: { wrapper: 'bg-transparent border border-success-500', label: 'text-success-500' }
  },
  error: {
    default: { wrapper: 'bg-error-500', label: 'text-neutral-100' },
    outlined: { wrapper: 'bg-transparent border border-error-500', label: 'text-error-500' }
  }
}
const getColorStyle = (color: ColorType, variant: VariantType) =>
  colorStyles[color]?.[variant] || colorStyles.primary.default

const StyledPressable = styled(
  Pressable,
  'w-fit flex-row items-center justify-center rounded-lg px-4 py-2 transition disabled:opacity-50'
)
const StyledText = styled(Text)

const CustomButton = ({
  label = '',
  labelStyle = 'text-lg font-medium',
  prependIcon,
  appendIcon,
  variant = 'default',
  color = 'primary',
  className = '',
  ...props
}: CustomButtonProps) => {
  const { wrapper: wrapperColorClasses, label: labelColorClasses } = getColorStyle(color, variant)
  return (
    <StyledPressable className={`${wrapperColorClasses} ${className}`} {...props}>
      {prependIcon && <CustomIcon {...prependIcon} />}
      <StyledText className={`${labelColorClasses} ${labelStyle}`}>{label}</StyledText>
      {appendIcon && <CustomIcon {...appendIcon} />}
    </StyledPressable>
  )
}

export default CustomButton
