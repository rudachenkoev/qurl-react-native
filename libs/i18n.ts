import en from '@/locales/en.json'
import uk from '@/locales/uk.json'
import { LanguageType } from '@/types/type'
import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? 'en'

export const i18n = new I18n({ en, uk })

i18n.defaultLocale = deviceLanguage

i18n.locale = deviceLanguage

export const changeLanguage = (lang: LanguageType) => (i18n.locale = lang)
