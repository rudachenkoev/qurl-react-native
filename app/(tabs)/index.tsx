import { ThemedText } from '@/components/ThemedText'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ThemedText>Open up App.js to start working on your app!</ThemedText>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
