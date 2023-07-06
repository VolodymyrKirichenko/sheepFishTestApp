import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setProductList } from '../redux/actions';

const useData = (key: string, initialValue: any) => {
  const [data, setData] = useState(initialValue);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setData(parsedValue);

        dispatch(setProductList(parsedValue));
      }
    } catch (error) {
      console.log('Error loading data:', error);
    }
  };

  const saveData = async (value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setData(value);
      dispatch(setProductList(value));

      console.log('Data saved successfully');
    } catch (error) {
      console.log('Error saving data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    setData,
    saveData,
  };
};

export default useData;
