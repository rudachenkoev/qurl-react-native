import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-BoldItalic': require('../assets/fonts/Nunito-BoldItalic.ttf'),
    'Nunito-ExtraBold': require('../assets/fonts/Nunito-ExtraBold.ttf'),
    'Nunito-ExtraBoldItalic': require('../assets/fonts/Nunito-ExtraBoldItalic.ttf'),
    'Nunito-ExtraLight': require('../assets/fonts/Nunito-ExtraLight.ttf'),
    'Nunito-ExtraLightItalic': require('../assets/fonts/Nunito-ExtraLightItalic.ttf'),
    'Nunito-Italic': require('../assets/fonts/Nunito-Italic.ttf'),
    'Nunito-Light': require('../assets/fonts/Nunito-Light.ttf'),
    'Nunito-LightItalic': require('../assets/fonts/Nunito-LightItalic.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-MediumItalic': require('../assets/fonts/Nunito-MediumItalic.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-SemiBold': require('../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-SemiBoldItalic': require('../assets/fonts/Nunito-SemiBoldItalic.ttf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/*<Stack.Screen name="(root)" options={{ headerShown: false }} />*/}
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}
