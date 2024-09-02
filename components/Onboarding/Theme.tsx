import HelloAvatar from '@/assets/images/HelloAvatar'
import CustomSelect from '@/components/CustomSelect'
import ThemedCard from '@/components/ThemedCard'
import ThemedText from '@/components/ThemedText'
import { themes } from '@/constants'
import { ThemeType, useTheme } from '@/contexts/ThemeContext'
import { i18n } from '@/libs/i18n'
import { Control } from 'react-hook-form'
import { View } from 'react-native'

interface OnboardingThemeProps {
  control: Control<any>
}

const OnboardingTheme = ({ control }: OnboardingThemeProps) => {
  const { setTheme } = useTheme()
  const handleThemeChange = (newTheme: string | number) => {
    const themeStr = String(newTheme)
    if (themeStr && themes.includes(themeStr)) setTheme(themeStr as ThemeType)
  }

  return (
    <View className="flex h-full items-center justify-center">
      <HelloAvatar className="-mb-4" />
      <ThemedCard>
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
      </ThemedCard>
    </View>
  )
}

export default OnboardingTheme
