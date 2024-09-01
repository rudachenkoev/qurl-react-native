import CustomIcon from '@/components/CustomIcon'
import { ColorType, CustomButtonProps, VariantType } from '@/types/type'
import { styled } from 'nativewind'
import { ActivityIndicator, Pressable, Text } from 'react-native'

const colorStyles: Record<ColorType, Record<VariantType, { wrapper: string; label: string }>> = {
  primary: {
    default: { wrapper: 'bg-shark-950 dark:bg-shark-50', label: 'text-shark-50 dark:text-shark-950' },
    outlined: {
      wrapper: 'bg-transparent border border-shark-950 dark:border-shark-50',
      label: 'text-shark-950 dark:text-shark-50'
    },
    text: { wrapper: 'bg-transparent', label: 'text-shark-950 dark:text-shark-50' }
  },
  secondary: {
    default: { wrapper: 'bg-shark-400', label: 'text-shark-50' },
    outlined: { wrapper: 'bg-transparent border border-shark-400', label: 'text-shark-400' },
    text: { wrapper: 'bg-transparent', label: 'text-shark-400' }
  }
}

const getColorStyle = (color: ColorType, variant: VariantType) =>
  colorStyles[color]?.[variant] || colorStyles.primary.default

const StyledPressable = styled(
  Pressable,
  'inline-flex flex-row items-center justify-center rounded-lg px-4 py-2 transition disabled:opacity-50'
)
const StyledText = styled(Text)

const CustomButton = ({
  label = '',
  labelStyle,
  prependIcon,
  appendIcon,
  variant = 'default',
  color = 'primary',
  className = '',
  loading = false,
  ...props
}: CustomButtonProps) => {
  const { wrapper: wrapperColorClasses, label: labelColorClasses } = getColorStyle(color, variant)

  return (
    <StyledPressable className={`${wrapperColorClasses} ${className}`} {...props}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <>
          {prependIcon && <CustomIcon {...prependIcon} />}
          <StyledText className={`font-NunitoMedium text-lg ${labelColorClasses} ${labelStyle}`}>{label}</StyledText>
          {appendIcon && <CustomIcon {...appendIcon} />}
        </>
      )}
    </StyledPressable>
  )
}

export default CustomButton
