import { useTheme } from '@/contexts/ThemeContext'
import { Link, LinkProps } from 'expo-router'

const ThemedLink = (props: LinkProps<any>) => {
  const { isDarkTheme } = useTheme()

  return (
    <Link className={`font-NunitoSemiBold underline ${isDarkTheme ? 'text-shark-300' : 'text-shark-800'}`} {...props} />
  )
}

export default ThemedLink
