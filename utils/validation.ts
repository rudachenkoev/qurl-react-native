import { i18n } from '@/libs/i18n'

export const validateEmail = (value: unknown) => {
  if (typeof value !== 'string') {
    return i18n.t('validator.email')
  }
  const regex = /\S+@\S+\.\S+/
  return regex.test(value) ? true : i18n.t('validator.email')
}
