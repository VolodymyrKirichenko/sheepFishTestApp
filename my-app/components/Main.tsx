import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import { RootState } from '../redux/reducers';
import { addProduct, removeProduct, setProductList } from '../redux/actions';
import { Form } from './Form';
import { ListItems } from './ListItems';
import { Product } from '../redux/actions/types';
import { Item } from '../typedefs';
import axios from 'axios';
import useData from '../hooks/useAsyncStorage';
import { gStyle } from '../styles/style';
import { Button } from '../components/ui/Button';

interface MainProps {
  navigation: any;
}

export const Main: React.FC<MainProps> = ({ navigation }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const productList = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();
  const { data: productData, saveData } = useData('productList', []);

  console.log(productData);

  const loadScene = (item: Item) => {
    navigation.navigate('FullInfo', item);
  };

  const handleAddProduct = (el: Item) => {
    const newProduct: Product = {
      id: el.id,
      title: el.title,
      description: el.description,
      image: el.image,
      price: el.price,
    };

    dispatch(addProduct(newProduct));
    saveData([...productList, newProduct]);
  };

  const handleRemoveProduct = (productId: string) => {
    dispatch(removeProduct(productId));
    const updatedList = productList.filter((product: Product) => product.id !== productId);
    saveData(updatedList);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const products = response.data;

      dispatch(setProductList(products));
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (productData.length > 0) {
      setItems(productData);
    } else {
      fetchProducts();
    }
  }, [productList]);

  const handleChangeShowForm = () => {
    setIsFormVisible((prevState) => !prevState);
  };

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
      <Text style={[gStyle.title, styles.header]}>Список товарів</Text>

      <View style={styles.buttonContainer}>
        <Button
          onPress={handleShowForm}
          title={isFormVisible ? 'Закрити форму' : 'Додати товар'}
        />
      </View>

      {isFormVisible && <Form addHandler={handleAddProduct} />}

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItems
            item={item}
            onDelete={handleRemoveProduct}
            loadScene={loadScene}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default Main;
