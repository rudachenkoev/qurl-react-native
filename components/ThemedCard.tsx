import { useTheme } from '@/contexts/ThemeContext'
import { styled } from 'nativewind'
import { View, ViewProps } from 'react-native'

const StyledCard = styled(View, 'rounded-lg p-5 shadow')

const ThemedCard = (props: ViewProps) => {
  const { isDarkTheme } = useTheme()

  return <StyledCard className={`${isDarkTheme ? 'bg-shark-900' : 'bg-white-lilac-50'}`} {...props} />
}

export default ThemedCard
