import { TextInput, StyleSheet, View, KeyboardTypeOptions, Text } from 'react-native';
import { FC } from 'react';

interface Props {
  setValue?: (text: string) => void;
  val?: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  error: string;
}

export const Field: FC<Props> = (props) => {
  const {
    setValue,
    placeholder,
    val,
    keyboardType,
    error
  } = props;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input]}
        showSoftInputOnFocus={true}
        placeholder={placeholder}
        onChangeText={setValue}
        value={val}
        autoCapitalize='none'
        keyboardType={keyboardType}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
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
  inputError: {
    borderColor: 'red',
    borderWidth: 1
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    position: 'absolute',
    right: 10
  }
});
