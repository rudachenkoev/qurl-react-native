import CustomButton from '@/components/CustomButton'
import OnboardingLanguage from '@/components/Onboarding/Language'
import OnboardingTheme from '@/components/Onboarding/Theme'
import OnboardingWelcome from '@/components/Onboarding/Welcome'
import { useTheme } from '@/contexts/ThemeContext'
import { i18n } from '@/libs/i18n'
import { router } from 'expo-router'
import { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SafeAreaView, View } from 'react-native'
import Swiper from 'react-native-swiper'

interface OnboardingFormData {
  locale: string
  theme: string
}

const Onboarding = () => {
  const { theme, isDarkTheme } = useTheme()

  const { control } = useForm<OnboardingFormData>({
    defaultValues: { locale: i18n.locale, theme: theme || '' }
  })

  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSkip = useCallback(() => {
    router.replace('/(auth)/sign-up')
  }, [])

  const handleNext = useCallback(() => {
    activeIndex === 2 ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
  }, [activeIndex])

  return (
    <SafeAreaView className={isDarkTheme ? 'bg-shark-950' : 'bg-shark-50'}>
      <View className="flex h-full items-center justify-between p-6">
        <View className="w-full flex-row justify-end">
          <CustomButton label={i18n.t('btn.skip')} variant="text" labelStyle="text-base" onPress={handleSkip} />
        </View>

        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className={`mx-1 h-2 w-4 rounded-full ${isDarkTheme ? 'bg-shark-900' : 'bg-shark-100'}`} />}
          activeDot={<View className={`mx-1 h-2 w-8 rounded-full ${isDarkTheme ? 'bg-shark-100' : 'bg-shark-950'}`} />}
          onIndexChanged={setActiveIndex}
        >
          <OnboardingWelcome />
          <OnboardingLanguage control={control} />
          <OnboardingTheme control={control} />
        </Swiper>

        <CustomButton label={i18n.t('btn.next')} onPress={handleNext} className="w-full" />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding
