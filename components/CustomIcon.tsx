import { CustomIconProps } from '@/types/type'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styled } from 'nativewind'
import { Image } from 'react-native'

const StyledIonicons = styled(Ionicons)
const StyledImage = styled(Image)

const CustomIcon = ({ icon, source, color = '#000', size = 24, style, ...props }: CustomIconProps) => {
  const renderIcon = () => {
    if (icon) {
      return <StyledIonicons name={icon} color={color} size={size} className={style} {...props} />
    } else if (source) {
      return <StyledImage source={source} style={[{ width: size, height: size }]} className={style} {...props} />
    }
    return null
  }

  return <>{renderIcon()}</>
}

export default CustomIcon
