import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
})

// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.config.hasOwnProperty('useInstanceErrorHandler') && error.config.useInstanceErrorHandler === false) {
      return Promise.reject(error)
    }
    if (error.response?.status) {
      alert(error.response.data)
      // switch (error.response.status) {
      //   case 400:
      //   case 404:
      //     iziToast.error({ message: i18n.global.t(`notify.errors.${error.response.data}`) })
      //     break
      //   case 401:
      //     logout()
      //     location.href = '/login'
      //     break
      //   case 403:
      //     iziToast.error({ message: i18n.global.t('notify.errors.Forbidden access') })
      //     router.go(-1)
      //     break
      //   case 500:
      //     iziToast.error({
      //       title: i18n.global.t('errorOccurred'),
      //       message: i18n.global.t('notify.errors.Server error')
      //     })
      //     break
      // }
    }
    return Promise.reject(error)
  }
)

export default instance
