import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FC, memo } from 'react';
import { Item } from '../typedefs';

interface Props {
  item: Item,
  onDelete: (id: string) => void,
  loadScene: (item: Item) => void
}

export const ListItems: FC<Props> = memo((props) => {
  const { item, onDelete, loadScene} = props;

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>×</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.item}
        onPress={() => loadScene(item)}
      >
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: item.image }}
            resizeMode='cover'
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
})

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {
    marginRight: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
  },
  deleteButton: {
    position: 'absolute',
    top: '20%',
    right: 10,
    zIndex: 1,
  },
  deleteButtonText: {
    fontSize: 24,
    color: 'red',
  },
});
