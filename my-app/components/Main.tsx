import { Alert, Button, StyleSheet } from 'react-native';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import { gStyle } from '../styles/style';
import { useCallback, useEffect, useState } from 'react';
import { Form } from './Form';
import { ListItems } from './ListItems';
import { Item } from '../typedefs';
import axios from 'axios';
import useData from '../hooks/useAsyncStorage';

export default function Main({ navigation }: any) {
  const loadScene = (item: Item) => {
    navigation.navigate('FullInfo', item)
  }

  const { data: productList, setData: setProductList, saveData } = useData(
    'productList',
    []
  );

  console.log(productList)

  const [items, setItems] = useState<Item[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddProduct = useCallback((el: Item) => {
    const updatedList = [...productList];
    updatedList.push(el);
    setProductList(updatedList);

    saveData(updatedList);
  }, [productList, setProductList, saveData]);

  const handleRemoveProduct = (productId: string) => {
    const updatedList = productList.filter((product: any) => product.id !== productId);

    setProductList(updatedList);
    saveData(updatedList);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;

      setItems(products);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (productList.length > 0) {
      setItems(productList);
    } else {
      fetchProducts();
    }
  }, [productList]);

  const handleChangeShowForm = () => {
    setIsFormVisible((prevState) => !prevState)
  }

  const handleShowForm = () => {
    Alert.alert(
      isFormVisible ? 'Close Form' : 'Show Form',
      isFormVisible ? 'Do you want to close the form?' : 'Do you want to show the form?',
    [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: handleChangeShowForm,
      },
    ],
    { cancelable: false }
    );
  };


  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>
        Список товарів
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleShowForm}
          title={isFormVisible ? 'Закрити форму' : 'Додати товар'}
        />
      </View>

      {isFormVisible && (
        <Form addHandler={handleAddProduct} />
      )}

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems
            item={item}
            onDelete={handleRemoveProduct}
            loadScene={loadScene}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
