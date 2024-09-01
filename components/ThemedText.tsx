import { useTheme } from '@/contexts/ThemeContext'
import { styled } from 'nativewind'
import { Text, TextProps } from 'react-native'

const StyledText = styled(Text)

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'title' | 'subtitle'
  className?: string
}

const ThemedText = ({ type = 'default', className, ...rest }: ThemedTextProps) => {
  const { isDarkTheme } = useTheme()

  const getThemeTextStyle = () => {
    switch (type) {
      case 'title':
        return 'font-NunitoExtraBold text-3xl'
      case 'subtitle':
        return 'font-NunitoRegular text-lg'
      default:
        return ''
    }
  }

  return (
    <StyledText
      className={`${isDarkTheme ? 'text-shark-50' : 'text-shark-950'} ${getThemeTextStyle()} ${className}`}
      {...rest}
    />
  )
}

export default ThemedText
