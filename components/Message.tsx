import ThemedText from '@/components/ThemedText'
import { i18n } from '@/libs/i18n'
import { useEffect, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import { Animated } from 'react-native'

interface MessageProps {
  type?: 'default' | 'error'
  message: string | FieldError
  messageStyle?: string
}

const Message = ({ type = 'default', message, messageStyle = '' }: MessageProps) => {
  const slideAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: message ? 1 : 0,
      duration: 300,
      useNativeDriver: true
    }).start()

    return () => slideAnim.stopAnimation()
  }, [message, slideAnim])

  const getMessageStyle = () => (type === 'error' ? 'text-red-orange-500' : '')

  const getMessageText = () => {
    if (typeof message === 'string') return message
    if (message?.message) return message.message
    return i18n.t(`validator.${message?.type}`)
  }

  const messageText = getMessageText()

  return messageText ? (
    <Animated.View
      style={{
        transform: [
          {
            translateY: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, 0]
            })
          }
        ],
        opacity: slideAnim
      }}
    >
      <ThemedText className={`px-2 text-xs ${getMessageStyle()} ${messageStyle}`}>{messageText}</ThemedText>
    </Animated.View>
  ) : null
}

export default Message
