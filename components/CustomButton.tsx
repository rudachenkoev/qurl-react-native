import CustomIcon from '@/components/CustomIcon'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { ColorType, CustomButtonProps, VariantType } from '@/types/type'
import { ActivityIndicator, Pressable, Text } from 'react-native'

const colorStyles: Record<
  ColorType,
  Record<VariantType, (isDarkTheme: boolean) => { wrapper: string; label: string; loader: string }>
> = {
  primary: {
    default: isDarkTheme => ({
      wrapper: isDarkTheme ? 'bg-shark-50' : 'bg-shark-950',
      label: isDarkTheme ? 'text-shark-950' : 'text-shark-50',
      loader: isDarkTheme ? colors.shark[950] : colors.shark[50]
    }),
    outlined: isDarkTheme => ({
      wrapper: `bg-transparent border ${isDarkTheme ? 'border-shark-50' : 'border-shark-950'}`,
      label: isDarkTheme ? 'text-shark-50' : 'text-shark-950',
      loader: isDarkTheme ? colors.shark[50] : colors.shark[950]
    }),
    text: isDarkTheme => ({
      wrapper: 'bg-transparent',
      label: isDarkTheme ? 'text-shark-50' : 'text-shark-950',
      loader: isDarkTheme ? colors.shark[50] : colors.shark[950]
    })
  },
  secondary: {
    default: () => ({
      wrapper: 'bg-shark-400',
      label: 'text-shark-50',
      loader: colors.shark[50]
    }),
    outlined: () => ({
      wrapper: 'bg-transparent border border-shark-400',
      label: 'text-shark-400',
      loader: colors.shark[400]
    }),
    text: () => ({
      wrapper: 'bg-transparent',
      label: 'text-shark-400',
      loader: colors.shark[400]
    })
  }
}

const CustomButton = ({
  label,
  labelStyle = '',
  prependIcon,
  appendIcon,
  variant = 'default',
  color = 'primary',
  className = '',
  loading = false,
  ...props
}: CustomButtonProps) => {
  const { isDarkTheme } = useTheme()

  const {
    wrapper: wrapperColorClasses,
    label: labelColorClasses,
    loader: loaderColor
  } = colorStyles[color][variant](isDarkTheme)

  return (
    <Pressable
      className={`inline-flex h-12 flex-row items-center justify-center rounded-lg px-4 py-2 transition disabled:opacity-50 ${wrapperColorClasses} ${className}`}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} />
      ) : (
        <>
          {prependIcon && <CustomIcon {...prependIcon} />}
          <Text className={`font-NunitoMedium text-lg ${labelColorClasses} ${labelStyle}`}>{label}</Text>
          {appendIcon && <CustomIcon {...appendIcon} />}
        </>
      )}
    </Pressable>
  )
}

export default CustomButton
