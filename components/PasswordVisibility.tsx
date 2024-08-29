import CustomIcon from '@/components/CustomIcon'
import { styled } from 'nativewind'
import { useMemo } from 'react'
import { Animated, TouchableOpacity, View, ViewStyle } from 'react-native'

interface PasswordVisibilityProps {
  value: boolean
  onChangeValue: (newValue: boolean) => void
  color?: string
}

const StyledView = styled(View)

const PasswordVisibility = ({ value, onChangeValue, color = '#737373' }: PasswordVisibilityProps) => {
  const lineWidth = useMemo(() => new Animated.Value(value ? 28 : 0), [])

  const toggleCrossedOut = () => {
    const newValue = !value
    onChangeValue(newValue)
    Animated.timing(lineWidth, {
      toValue: newValue ? 28 : 0,
      duration: 80,
      useNativeDriver: false
    }).start()
  }

  const lineStyle: Animated.WithAnimatedObject<ViewStyle> = {
    position: 'absolute',
    width: lineWidth,
    height: 1.5,
    backgroundColor: color,
    transform: [{ rotate: '45deg' }]
  }

  return (
    <TouchableOpacity onPress={toggleCrossedOut} activeOpacity={1}>
      <StyledView className="ml-3 flex items-center justify-center">
        <CustomIcon icon="eye-outline" color={color} />
        <Animated.View style={lineStyle} />
      </StyledView>
    </TouchableOpacity>
  )
}

export default PasswordVisibility
