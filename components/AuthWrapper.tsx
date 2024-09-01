import Logo from '@/assets/images/favicon.png'
import GlowingDot, { GlowingDotProps } from '@/components/GlowingDot'
import { styled } from 'nativewind'
import { ReactNode, useCallback, useMemo, useState } from 'react'
import { Image, LayoutChangeEvent, SafeAreaView, Text, View } from 'react-native'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledSafeAreaView = styled(SafeAreaView)

interface AuthWrapperProps {
  title?: string
  subtitle?: string
  children?: ReactNode
}

const AuthWrapper = ({ title, subtitle, children }: AuthWrapperProps) => {
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
              <StyledView
                key={`horizontal-grid-line-${index}`}
                className="absolute h-px w-full bg-neutral-100/20"
                style={{ top: `${(index / numberOfLines) * 100}%` }}
              />
            )
        )}
        {Array.from({ length: numberOfLines }).map(
          (_, index) =>
            index > 0 && (
              <StyledView
                key={`vertical-grid-line-${index}`}
                className="absolute h-full w-px bg-neutral-100/20"
                style={{ left: `${(index / numberOfLines) * 100}%` }}
              />
            )
        )}
      </>
    )
  }, [numberOfLines])

  return (
    <StyledView className="flex-1">
      <StyledView className="bg-primary-500 relative flex-1 dark:bg-slate-950" onLayout={handleLayout}>
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
      </StyledView>
      <StyledView className="bg-secondary-50 flex-1 dark:bg-slate-950" />
      <StyledSafeAreaView className="absolute inset-x-0 top-0">
        <StyledView className="p-8">
          <StyledView className="flex items-center">
            <Image source={Logo} />
            <StyledText className="my-6 text-center text-4xl font-bold text-white">{title}</StyledText>
            <StyledText className="text-center text-white">{subtitle}</StyledText>
          </StyledView>
          <StyledView
            className="mt-8 rounded-lg bg-white p-4 shadow dark:bg-zinc-700 dark:shadow-neutral-800"
            style={{ gap: 16 }}
          >
            {children}
          </StyledView>
        </StyledView>
      </StyledSafeAreaView>
    </StyledView>
  )
}

export default AuthWrapper
