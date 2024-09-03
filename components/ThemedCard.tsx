import { useTheme } from '@/contexts/ThemeContext'
import { View, ViewProps } from 'react-native'

const ThemedCard = (props: ViewProps) => {
  const { isDarkTheme } = useTheme()
  return <View className={`rounded-lg p-5 shadow ${isDarkTheme ? 'bg-shark-900' : 'bg-white-lilac-50'}`} {...props} />
}

export default ThemedCard
