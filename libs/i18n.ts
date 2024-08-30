import en from '@/locales/en.json'
import uk from '@/locales/uk.json'
import { LanguageType } from '@/types/type'
import { getLocales } from 'expo-localization'
import { I18n } from 'i18n-js'
import React, { ReactElement, ReactNode } from 'react'

class ExtendedI18n extends I18n {
  tsx(key: string, fragments: { [key: string]: ReactElement } = {}): ReactNode {
    const translation = this.t(key)

    // Create an array to store text and React elements
    const resultArray: ReactNode[] = []
    let lastIndex = 0
    let uniqueKeyCounter = 0

    // Create a regular expression to match all placeholder patterns
    const regex = new RegExp(`<(${Object.keys(fragments).join('|')})>`, 'g')

    // Iterate over all matches in the translation
    let match
    while ((match = regex.exec(translation)) !== null) {
      // Add text before the current match
      if (match.index > lastIndex) {
        resultArray.push(translation.substring(lastIndex, match.index))
      }

      // Add the corresponding fragment
      const fragmentKey = match[1]
      if (fragments[fragmentKey]) {
        resultArray.push(React.cloneElement(fragments[fragmentKey], { key: uniqueKeyCounter++ }))
      }

      lastIndex = regex.lastIndex
    }

    // Add the remaining text after the last match
    if (lastIndex < translation.length) {
      resultArray.push(translation.substring(lastIndex))
    }

    return resultArray
  }
}

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? 'en'

export const i18n = new ExtendedI18n({ en, uk })

i18n.defaultLocale = deviceLanguage
i18n.locale = deviceLanguage

export const changeLanguage = (lang: LanguageType) => {
  i18n.locale = lang
}
