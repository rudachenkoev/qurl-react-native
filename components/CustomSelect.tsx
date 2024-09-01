import Message from '@/components/Message'
import colors from '@/constants/colors'
import { CustomSelectProps } from '@/types/type'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Modal, Text, TouchableOpacity, View, useColorScheme } from 'react-native'

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
  containerStyle,
  optionValue = 'id',
  optionLabel = 'name',
  onSelect
}: CustomSelectProps) => {
  const [isPickerVisible, setPickerVisible] = useState(false)

  const theme = useColorScheme()

  const getSelectedValue = (value: string | number) => {
    const selectedOption = options.find(opt => opt[optionValue] === value)
    return selectedOption ? selectedOption[optionLabel] : ''
  }

  return (
    <View className={containerStyle}>
      {label ? (
        <Text className={`mb-1 px-2 font-NunitoLight text-sm text-shark-950 dark:text-shark-50 ${labelStyle}`}>
          {label}
        </Text>
      ) : null}

      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <>
            <TouchableOpacity
              className="inline-flex h-12 justify-center rounded-lg border border-shark-400 px-4"
              onPress={() => setPickerVisible(true)}
            >
              <Text
                className={`font-NunitoRegular text-base ${value ? 'text-shark-950 dark:text-shark-50' : 'text-shark-300'}`}
              >
                {getSelectedValue(value) || placeholder || label}
              </Text>
            </TouchableOpacity>

            <Modal
              visible={isPickerVisible}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setPickerVisible(false)}
            >
              <View className="flex-1 justify-end">
                <View className="bg-shark-50 px-3 dark:bg-shark-900">
                  <Picker
                    selectedValue={value}
                    onValueChange={itemValue => {
                      onChange(itemValue)
                      setPickerVisible(false)
                      onSelect && onSelect(itemValue)
                    }}
                    itemStyle={{ color: colors.shark[theme === 'dark' ? 50 : 950] }}
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
