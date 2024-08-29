import CustomIcon from '@/components/CustomIcon'
import { styled } from 'nativewind'
import { useMemo } from 'react'
import { Animated, TouchableOpacity, View, ViewStyle } from 'react-native'

interface PasswordVisibilityProps {
  value: boolean
  onChangeValue: (newValue: boolean) => void
}

const StyledView = styled(View)

const PasswordVisibility = ({ value, onChangeValue }: PasswordVisibilityProps) => {
  const iconColor = '#737373'
  const lineWidth = useMemo(() => new Animated.Value(value ? 28 : 0), [value])

  const toggleCrossedOut = () => {
    onChangeValue(!value)
    Animated.timing(lineWidth, {
      toValue: value ? 0 : 28,
      duration: 80,
      useNativeDriver: false
    }).start()
  }

  const lineStyle = {
    position: 'absolute',
    width: lineWidth,
    height: 1.5,
    backgroundColor: iconColor,
    transform: [{ rotate: '45deg' }]
  } as Animated.AnimatedProps<ViewStyle>

  return (
    <TouchableOpacity onPress={toggleCrossedOut}>
      <StyledView className="flex items-center justify-center ml-3">
        <CustomIcon icon="eye-outline" color={iconColor} />
        <Animated.View style={lineStyle} />
      </StyledView>
    </TouchableOpacity>
  )
}

export default PasswordVisibility
