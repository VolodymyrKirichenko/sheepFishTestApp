import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { FC } from 'react'

interface Props {
  title: string,
  onPress: () => void,
  colors?: string[]
}

export const Button: FC<Props> = (props) => {
  const {
    title,
    onPress,
    colors = ['yellow', '#FBBF24']
  } = props

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  button: {
    fontFamily: 'mt-bold',
    backgroundColor: '#FFF07C',
    borderRadius: 12,
    marginTop: 15,
    padding: 15
  },
  text: {
    textAlign: 'center'
  }
})
