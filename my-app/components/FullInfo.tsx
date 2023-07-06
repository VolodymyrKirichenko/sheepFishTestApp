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
      <Text style={gStyle.title}>
        {route.params.title}
      </Text>

      <Text style={styles.price}>
        Price: {route.params.price}
      </Text>

      <View style={styles.container}>
        <Image
          style={[gStyle.image, { marginRight: 10 }]}
          source={{ uri: route.params.image }}
        />

        <Text style={styles.overview}>
          {route.params.description}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overview: {
    fontFamily: 'mt-bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'orange',
    flex: 1,
  },
  price: {
    fontFamily: 'mt-bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '50%'
  }
})
