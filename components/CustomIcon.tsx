import colors from '@/constants/colors'
import { CustomIconProps } from '@/types/type'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Image } from 'react-native'

const CustomIcon = ({ icon, source, color = colors.shark[950], size = 24, style, ...props }: CustomIconProps) => {
  const renderIcon = () => {
    if (icon) {
      return <Ionicons name={icon} color={color} size={size} className={style} {...props} />
    } else if (source) {
      return <Image source={source} style={[{ width: size, height: size }]} className={style} {...props} />
    }
    return null
  }

  return <>{renderIcon()}</>
}

export default CustomIcon
