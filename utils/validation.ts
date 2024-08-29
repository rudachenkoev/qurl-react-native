import { i18n } from '@/libs/i18n'

export const validateEmail = (value: string) => {
  const regex = /\S+@\S+\.\S+/
  return regex.test(value) ? true : i18n.t('validator.email')
}
