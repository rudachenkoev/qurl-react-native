import { i18n } from '@/libs/i18n'

export const validateEmail = (value: unknown) => {
  if (typeof value !== 'string') {
    return i18n.t('validator.invalidType')
  }
  const emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(value) ? true : i18n.t('validator.email')
}

export const validatePassword = (value: unknown) => {
  if (typeof value !== 'string') {
    return i18n.t('validator.invalidType')
  }

  const uppercaseRegex = /^(?=.*[A-Z])/
  const lowercaseRegex = /^(?=.*[a-z])/
  const numberRegex = /^(?=.*\d)/

  if (!uppercaseRegex.test(value)) return i18n.t('validator.containsUppercase')

  if (!lowercaseRegex.test(value)) return i18n.t('validator.containsLowercase')

  if (!numberRegex.test(value)) return i18n.t('validator.containsNumber')

  return true
}
