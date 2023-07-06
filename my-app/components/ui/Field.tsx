import { TextInput, StyleSheet, View, KeyboardTypeOptions } from 'react-native'
import { FC } from 'react'

interface Props {
  setValue?: any
  val?: string
  placeholder: string
  keyboardType?: KeyboardTypeOptions | undefined
}

export const Field: FC<Props> = (props) => {
  const {
    setValue,
    placeholder,
    val,
    keyboardType,
  } = props

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        showSoftInputOnFocus={true}
        placeholder={placeholder}
        onChangeText={(text) => setValue(text)}
        value={val}
        autoCapitalize='none'
        keyboardType={keyboardType}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    position: 'relative',
    fontFamily: 'mt-light',
    borderRadius: 12,
    backgroundColor: '#EDF2EF',
    marginTop: 5,
    padding: 10,
    flex: 1
  },
  icon: {
    marginLeft: 10,
    position: 'absolute',
    top: '50%',
    right: 20
  }
})
