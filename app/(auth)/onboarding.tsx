import HelloAvatar from '@/assets/images/HelloAvatar'
import CustomButton from '@/components/CustomButton'
import CustomSelect from '@/components/CustomSelect'
import ThemedText from '@/components/ThemedText'
import { locales, themes } from '@/constants'
import { ThemeType, useTheme } from '@/contexts/ThemeContext'
import { i18n } from '@/libs/i18n'
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SafeAreaView, View } from 'react-native'
import Swiper from 'react-native-swiper'

interface OnboardingFormData {
  locale: string
  theme: string
}

const Onboarding = () => {
  const { theme, setTheme, isDarkTheme } = useTheme()
  const handleThemeChange = (newTheme: string | number) => {
    const themeStr = String(newTheme)
    if (themeStr && themes.includes(themeStr)) setTheme(themeStr as ThemeType)
  }

  const [locale, setLocale] = useState(i18n.locale)
  const handleLanguageChange = (newLocale: string | number) => {
    const localeStr = String(newLocale)
    i18n.locale = localeStr
    setLocale(localeStr)
  }

  const { control } = useForm<OnboardingFormData>({
    defaultValues: { locale, theme: theme || '' }
  })

  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView className={`${isDarkTheme ? 'bg-shark-950' : 'bg-shark-50'}`}>
      <View className="flex h-full items-center justify-between p-6">
        <View className="w-full flex-row justify-end">
          <CustomButton
            label={i18n.t('btn.skip')}
            variant="text"
            labelStyle="text-base"
            onPress={() => router.replace('/(auth)/sign-up')}
          />
        </View>

        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className={`mx-1 h-2 w-4 rounded-full ${isDarkTheme ? 'bg-shark-900' : 'bg-shark-100'}`} />}
          activeDot={<View className={`mx-1 h-2 w-8 rounded-full ${isDarkTheme ? 'bg-shark-100' : 'bg-shark-950'}`} />}
          onIndexChanged={index => setActiveIndex(index)}
        >
          <View className="flex h-full items-center justify-center">
            <HelloAvatar className="-mb-4" />
            <View className={`rounded-lg p-5 shadow ${isDarkTheme ? 'bg-shark-900' : 'bg-white-lilac-50'}`}>
              <ThemedText type="title">{i18n.t('welcome')}</ThemedText>
              <ThemedText type="subtitle" className="mt-2">
                {i18n.t('welcomeIntroduction')}
              </ThemedText>
            </View>
          </View>
          <View className="flex h-full items-center justify-center">
            <HelloAvatar className="-mb-4" />
            <View className={`rounded-lg p-5 shadow ${isDarkTheme ? 'bg-shark-900' : 'bg-white-lilac-50'}`}>
              <ThemedText type="title">{i18n.t('languagePreference')}</ThemedText>
              <ThemedText type="subtitle" className="mt-2">
                {i18n.t('languagePreferenceIntroduction')}
              </ThemedText>
              <CustomSelect
                placeholder={i18n.t('selectLanguage')}
                options={locales}
                name="locale"
                control={control}
                containerStyle="mt-3"
                onSelect={handleLanguageChange}
              />
            </View>
          </View>
          <View className="flex h-full items-center justify-center">
            <HelloAvatar className="-mb-4" />
            <View className={`rounded-lg p-5 shadow ${isDarkTheme ? 'bg-shark-900' : 'bg-white-lilac-50'}`}>
              <ThemedText type="title">{i18n.t('chooseYourTheme')}</ThemedText>
              <ThemedText type="subtitle" className="mt-2">
                {i18n.t('chooseYourThemeIntroduction')}
              </ThemedText>
              <CustomSelect
                placeholder={i18n.t('selectTheme')}
                options={themes.map(theme => ({ id: theme, name: i18n.t(`theme.${theme}`) }))}
                name="theme"
                control={control}
                containerStyle="mt-3"
                onSelect={handleThemeChange}
              />
            </View>
          </View>
        </Swiper>

        <CustomButton
          label={i18n.t('btn.next')}
          onPress={() => (activeIndex === 3 ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1))}
          className="w-full"
        />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding
