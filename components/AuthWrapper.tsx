import Logo from '@/assets/images/favicon.png'
import GlowingDot, { GlowingDotProps } from '@/components/GlowingDot'
import ThemedCard from '@/components/ThemedCard'
import ThemedText from '@/components/ThemedText'
import { useTheme } from '@/contexts/ThemeContext'
import { ReactNode, useCallback, useMemo, useState } from 'react'
import { Image, LayoutChangeEvent, SafeAreaView, View } from 'react-native'

interface AuthWrapperProps {
  title?: string
  subtitle?: string
  children?: ReactNode
}

const AuthWrapper = ({ title, subtitle, children }: AuthWrapperProps) => {
  const { isDarkTheme } = useTheme()

  const dots: GlowingDotProps[] = useMemo(
    () => [
      { left: 20, top: 10, size: 6 },
      { left: 80, top: 25, size: 8 },
      { left: 32, top: 30, size: 5 },
      { left: 12, top: 36, size: 7 },
      { left: 85, top: 50, size: 4 },
      { left: 22, top: 55, size: 6 },
      { left: 75, top: 70, size: 9 }
    ],
    []
  )

  interface LayoutSize {
    width: number
    height: number
  }
  const [topLayoutSize, setTopLayoutSize] = useState<LayoutSize>({ width: 0, height: 0 })

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout
    setTopLayoutSize({ width, height })
  }, [])

  const convertPercentageToPixels = (percent: number, dimension: 'width' | 'height'): number => {
    return (topLayoutSize[dimension] * percent) / 100
  }

  // Render grid lines
  const numberOfLines = 8
  const renderGridLines = useMemo(() => {
    return (
      <>
        {Array.from({ length: numberOfLines }).map(
          (_, index) =>
            index > 0 && (
              <View
                key={`horizontal-grid-line-${index}`}
                className={`absolute h-px w-full ${isDarkTheme ? 'bg-shark-200/20' : 'bg-shark-200'}`}
                style={{ top: `${(index / numberOfLines) * 100}%` }}
              />
            )
        )}
        {Array.from({ length: numberOfLines }).map(
          (_, index) =>
            index > 0 && (
              <View
                key={`vertical-grid-line-${index}`}
                className={`absolute h-full w-px ${isDarkTheme ? 'bg-shark-200/20' : 'bg-shark-200'}`}
                style={{ left: `${(index / numberOfLines) * 100}%` }}
              />
            )
        )}
      </>
    )
  }, [numberOfLines, isDarkTheme])

  return (
    <View className="flex-1">
      <View className={`relative flex-1 ${isDarkTheme ? 'bg-shark-950' : 'bg-shark-50'}`} onLayout={handleLayout}>
        {renderGridLines}
        {dots.map((dot, index) => (
          <GlowingDot
            key={`glowing-dot-${index}`}
            left={convertPercentageToPixels(dot.left, 'width')}
            top={convertPercentageToPixels(dot.top, 'height')}
            size={dot.size}
            delay={index * 500}
          />
        ))}
      </View>
      <View className={`flex-1 ${isDarkTheme ? 'bg-shark-950' : 'bg-shark-50'}`} />
      <SafeAreaView className="absolute inset-x-0 top-0">
        <View className="p-8">
          <View className="flex items-center">
            <Image source={Logo} />
            <ThemedText type="title" className="my-4 text-center">
              {title}
            </ThemedText>
            <ThemedText type="subtitle" className="text-center">
              {subtitle}
            </ThemedText>
          </View>
          <ThemedCard className="mt-6">{children}</ThemedCard>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default AuthWrapper
