import { styled } from 'nativewind'
import { useEffect } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming
} from 'react-native-reanimated'

export interface GlowingDotProps {
  left: number
  top: number
  size: number
  delay?: number
}

const Dot = styled(Animated.View)

const GlowingDot = ({ left, top, size, delay = 500 }: GlowingDotProps) => {
  const opacity = useSharedValue(1)

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withRepeat(
        withTiming(0.3, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease)
        }),
        -1,
        true
      )
    )
  }, [delay, opacity])

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))

  return (
    <Dot
      className="absolute rounded-full bg-white"
      style={[
        {
          left: left,
          top: top,
          width: size,
          height: size
        },
        animatedStyle
      ]}
    />
  )
}

export default GlowingDot
