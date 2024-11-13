import CustomModal from '@/components/CustomModal'
import Message from '@/components/Message'
import ThemedText from '@/components/ThemedText'
import colors from '@/constants/colors'
import { useTheme } from '@/contexts/ThemeContext'
import { CustomSelectProps } from '@/types/type'
import { Picker } from '@react-native-picker/picker'
import { useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Pressable, View } from 'react-native'

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
              className={`inline-flex h-12 justify-center rounded-lg px-4 ${isDarkTheme ? 'bg-shark-800' : 'bg-shark-100'}`}
              onPress={togglePicker}
            >
              <ThemedText className={!value ? 'text-shark-300' : ''}>
                {getSelectedValue(value) || placeholder || label}
              </ThemedText>
            </Pressable>

            <CustomModal visible={isPickerVisible} onRequestClose={togglePicker}>
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
            </CustomModal>
          </>
        )}
      />

      {error && <Message type="error" message={error} messageStyle={`mt-1 ${errorStyle}`} />}
    </View>
  )
}

export default CustomSelect
