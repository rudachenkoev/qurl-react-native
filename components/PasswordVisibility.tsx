import CustomIcon from '@/components/CustomIcon'
import { styled } from 'nativewind'
import { useState } from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'

const StyledView = styled(View)

const PasswordVisibility = ({ value, onChangeValue }) => {
  const [crossedOut, setCrossedOut] = useState(value)
  const [lineWidth] = useState(new Animated.Value(0))

  const toggleCrossedOut = () => {
    const changedValue = !crossedOut
    setCrossedOut(changedValue)
    onChangeValue(changedValue)
    Animated.timing(lineWidth, {
      toValue: crossedOut ? 0 : 28,
      duration: 80,
      useNativeDriver: false
    }).start()
  }

  return (
    <TouchableOpacity onPress={toggleCrossedOut}>
      <StyledView className="flex items-center justify-center">
        <CustomIcon icon="eye-outline" />
        <Animated.View
          style={{
            position: 'absolute',
            width: lineWidth,
            height: 2,
            backgroundColor: 'black',
            transform: [{ rotate: '45deg' }]
          }}
        />
      </StyledView>
    </TouchableOpacity>
  )
}

export default PasswordVisibility
