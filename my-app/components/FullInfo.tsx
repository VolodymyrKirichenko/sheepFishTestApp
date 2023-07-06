import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }: any) {
  return (
    <View style={gStyle.main}>
      <Image
        style={ gStyle.image }
        source={{ uri: route.params.image }}
      />

      <Text style={gStyle.title}>
        {route.params.title}
      </Text>

      <Text style={styles.overview}>
        {route.params.description}
      </Text>

      <Text style={styles.price}>
        Price: {route.params.price}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  overview: {
    fontFamily: 'mt-bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  },
  price: {
    fontFamily: 'mt-bold',
    textAlign: 'center',
    marginTop: 20,
  }
})
