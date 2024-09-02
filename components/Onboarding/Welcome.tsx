import HelloAvatar from '@/assets/images/HelloAvatar'
import ThemedCard from '@/components/ThemedCard'
import ThemedText from '@/components/ThemedText'
import { i18n } from '@/libs/i18n'
import { View } from 'react-native'

const OnboardingWelcome = () => {
  return (
    <View className="flex h-full items-center justify-center">
      <HelloAvatar className="-mb-4" />
      <ThemedCard>
        <ThemedText type="title">{i18n.t('welcome')}</ThemedText>
        <ThemedText type="subtitle" className="mt-2">
          {i18n.t('welcomeIntroduction')}
        </ThemedText>
      </ThemedCard>
    </View>
  )
}

export default OnboardingWelcome
