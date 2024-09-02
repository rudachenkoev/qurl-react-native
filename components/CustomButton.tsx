import CustomIcon from '@/components/CustomIcon'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { ColorType, CustomButtonProps, VariantType } from '@/types/type'
import { styled } from 'nativewind'
import { ActivityIndicator, Pressable, Text } from 'react-native'

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
  const { isDarkTheme } = useTheme()

  const colorStyles: Record<ColorType, Record<VariantType, { wrapper: string; label: string }>> = {
    primary: {
      default: { wrapper: `bg-shark-${isDarkTheme ? '50' : '950'}`, label: `text-shark-${isDarkTheme ? '950' : '50'}` },
      outlined: {
        wrapper: `bg-transparent border border-shark-${isDarkTheme ? '50' : '950'}`,
        label: `text-shark-${isDarkTheme ? '50' : '950'}`
      },
      text: { wrapper: 'bg-transparent', label: `text-shark-${isDarkTheme ? '50' : '950'}` }
    },
    secondary: {
      default: { wrapper: 'bg-shark-400', label: 'text-shark-50' },
      outlined: { wrapper: 'bg-transparent border border-shark-400', label: 'text-shark-400' },
      text: { wrapper: 'bg-transparent', label: 'text-shark-400' }
    }
  }

  const getColorStyle = (color: ColorType, variant: VariantType) =>
    colorStyles[color]?.[variant] || colorStyles.primary.default

  const { wrapper: wrapperColorClasses, label: labelColorClasses } = getColorStyle(color, variant)

  return (
    <StyledPressable className={`${wrapperColorClasses} ${className}`} {...props}>
      {loading ? (
        <ActivityIndicator color={colors.shark[50]} />
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
