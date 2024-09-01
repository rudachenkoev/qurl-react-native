import HelloAvatar from '@/assets/images/HelloAvatar'
import CustomButton from '@/components/CustomButton'
import CustomSelect from '@/components/CustomSelect'
import { locales, themes } from '@/constants'
import { i18n } from '@/libs/i18n'
import { router } from 'expo-router'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SafeAreaView, Text, View, useColorScheme } from 'react-native'
import Swiper from 'react-native-swiper'

interface OnboardingFormData {
  locale: string
  theme: string
}

const Onboarding = () => {
  const [locale, setLocale] = useState(i18n.locale)
  const handleLanguageChange = (newLocale: string | number) => {
    newLocale = String(newLocale)
    i18n.locale = newLocale
    setLocale(newLocale)
  }

  const { control } = useForm<OnboardingFormData>({
    defaultValues: {
      locale: i18n.locale,
      theme: useColorScheme()
    }
  })

  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SafeAreaView className="bg-shark-50 dark:bg-shark-950">
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
          dot={<View className="mx-1 h-2 w-4 rounded-full bg-shark-100 dark:bg-shark-900" />}
          activeDot={<View className="mx-1 h-2 w-8 rounded-full bg-shark-950 dark:bg-shark-100" />}
          onIndexChanged={index => setActiveIndex(index)}
        >
          <View className="flex h-full items-center justify-center">
            <HelloAvatar className="-mb-4" />
            <View className="rounded-lg bg-white-lilac-50 p-5 shadow dark:bg-shark-900">
              <Text className="font-NunitoExtraBold text-3xl text-shark-950 dark:text-shark-50">
                {i18n.t('welcome')}
              </Text>
              <Text className="mt-2 font-NunitoRegular text-lg text-shark-950 dark:text-shark-50">
                {i18n.t('welcomeIntroduction')}
              </Text>
            </View>
          </View>
          <View className="flex h-full items-center justify-center">
            <HelloAvatar className="-mb-4" />
            <View className="rounded-lg bg-white-lilac-50 p-5 shadow dark:bg-shark-800">
              <Text className="font-NunitoExtraBold text-3xl text-shark-950 dark:text-shark-50">
                {i18n.t('languagePreference')}
              </Text>
              <Text className="mt-2 font-NunitoRegular text-lg text-shark-950 dark:text-shark-50">
                {i18n.t('languagePreferenceIntroduction')}
              </Text>
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
            <View className="rounded-lg bg-white-lilac-50 p-5 shadow dark:bg-shark-800">
              <Text className="font-NunitoExtraBold text-3xl text-shark-950 dark:text-shark-50">
                {i18n.t('chooseYourTheme')}
              </Text>
              <Text className="mt-2 font-NunitoRegular text-lg text-shark-950 dark:text-shark-50">
                {i18n.t('chooseYourThemeIntroduction')}
              </Text>
              <CustomSelect
                placeholder={i18n.t('selectTheme')}
                options={themes.map(theme => ({ id: theme, name: i18n.t(`theme.${theme}`) }))}
                name="theme"
                control={control}
                containerStyle="mt-3"
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
