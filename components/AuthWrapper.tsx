import Logo from '@/assets/images/favicon.png'
import { styled } from 'nativewind'
import { ReactNode } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledSafeAreaView = styled(SafeAreaView)

interface AuthWrapperProps {
  title?: string
  subtitle?: string
  children?: ReactNode
}

const AuthWrapper = ({ title, subtitle, children }: AuthWrapperProps) => {
  return (
    <StyledView className="flex-1">
      <StyledView className="flex-1 bg-primary-500" />
      <StyledView className="flex-1 bg-secondary-50" />
      <StyledSafeAreaView className="absolute inset-x-0 top-0">
        <StyledView className="p-8">
          <StyledView className="flex items-center">
            <Image source={Logo} />
            <StyledText className="my-6 text-center text-4xl font-bold text-white">{title}</StyledText>
            <StyledText className="text-center text-white">{subtitle}</StyledText>
          </StyledView>
          <StyledView className="mt-8 rounded-lg bg-white p-4 shadow" style={{ gap: 12 }}>
            {children}
          </StyledView>
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  )
}

export default AuthWrapper
