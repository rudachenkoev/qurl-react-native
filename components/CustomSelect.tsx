import Message from '@/components/Message'
import ThemedText from '@/components/ThemedText'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { CustomSelectProps } from '@/types/type'
import { Picker } from '@react-native-picker/picker'
import { useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Modal, Pressable, View } from 'react-native'

const CustomSelect = ({
  name,
  control,
  rules = {},
  error,
  errorStyle,
  label = '',
  labelStyle,
  options,
  placeholder,
  wrapperStyle,
  optionValue = 'id',
  optionLabel = 'name',
  onSelect
}: CustomSelectProps) => {
  const { isDarkTheme } = useTheme()
  const [isPickerVisible, setPickerVisible] = useState(false)

  const getSelectedValue = useCallback(
    (value: string | number) => {
      const selectedOption = options.find(opt => opt[optionValue] === value)
      return selectedOption ? selectedOption[optionLabel] : ''
    },
    [options, optionValue, optionLabel]
  )

  const togglePicker = () => setPickerVisible(!isPickerVisible)

  return (
    <View className={wrapperStyle}>
      {label ? (
        <ThemedText type="label" className={`mb-1 px-2 ${labelStyle}`}>
          {label}
        </ThemedText>
      ) : null}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <Pressable
              className={`h-12 inline-flex justify-center rounded-lg px-4 ${isDarkTheme ? 'bg-shark-800' : 'bg-shark-100'}`}
              onPress={togglePicker}
            >
              <ThemedText className={!value ? 'text-shark-300' : ''}>
                {getSelectedValue(value) || placeholder || label}
              </ThemedText>
            </Pressable>

            <Modal visible={isPickerVisible} transparent={true} animationType="slide" onRequestClose={togglePicker}>
              <View className="flex-1 justify-end bg-shark-950/50">
                <View className={`px-3 pb-6 pt-4 ${isDarkTheme ? 'bg-shark-900' : 'bg-shark-50'}`}>
                  <Picker
                    selectedValue={value}
                    onValueChange={itemValue => {
                      onChange(itemValue)
                      togglePicker()
                      onSelect && onSelect(itemValue)
                    }}
                    itemStyle={{ color: colors.shark[isDarkTheme ? 50 : 950] }}
                  >
                    {options.map(option => (
                      <Picker.Item key={option[optionValue]} label={option[optionLabel]} value={option[optionValue]} />
                    ))}
                  </Picker>
                </View>
              </View>
            </Modal>
          </>
        )}
      />

      {error && <Message type="error" message={error} messageStyle={`mt-1 ${errorStyle}`} />}
    </View>
  )
}

export default CustomSelect
