import { useTheme } from '@/contexts/ThemeContext'
import { CustomModalProps } from '@/types/type'
import { Modal, View } from 'react-native'

const CustomModal = ({ visible, onRequestClose, wrapperStyle, children }: CustomModalProps) => {
  const { isDarkTheme } = useTheme()

  return (
    <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={onRequestClose}>
      <View className="flex-1 justify-end bg-shark-950/50">
        <View className={`px-3 pb-6 pt-4 ${isDarkTheme ? 'bg-shark-900' : 'bg-shark-50'} ${wrapperStyle}`}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal
