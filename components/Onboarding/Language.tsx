import HelloAvatar from '@/assets/images/HelloAvatar'
import CustomSelect from '@/components/CustomSelect'
import ThemedCard from '@/components/ThemedCard'
import ThemedText from '@/components/ThemedText'
import { locales } from '@/constants'
import { i18n } from '@/libs/i18n'
import { useState } from 'react'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

interface OnboardingLanguageProps {
  control: Control<any>
}

const OnboardingWelcome = ({ control }: OnboardingLanguageProps) => {
  const [locale, setLocale] = useState(i18n.locale)
  const handleLanguageChange = (newLocale: string | number) => {
    const localeStr = String(newLocale)
    i18n.locale = localeStr
    setLocale(localeStr)
  }

  return (
    <View className="flex h-full items-center justify-center">
      <HelloAvatar className="-mb-4" />
      <ThemedCard>
        <ThemedText type="title">{i18n.t('languagePreference')}</ThemedText>
        <ThemedText type="subtitle" className="mt-2">
          {i18n.t('languagePreferenceIntroduction')}
        </ThemedText>
        <CustomSelect
          placeholder={i18n.t('selectLanguage')}
          options={locales}
          name="locale"
          control={control}
          wrapperStyle="mt-3"
          onSelect={handleLanguageChange}
        />
      </ThemedCard>
    </View>
  )
}

export default OnboardingWelcome
