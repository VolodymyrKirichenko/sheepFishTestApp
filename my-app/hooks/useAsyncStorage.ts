import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useData = (key: string, initialValue: any) => {
  const [data, setData] = useState(initialValue);

  const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(JSON.parse(value));
      }
    } catch (error) {
      console.log('Виникла помилка при завантаженні даних:', error);
    }
  };

  const saveData = async (value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log('Дані успішно збережено');
    } catch (error) {
      console.log('Виникла помилка при збереженні даних:', error);
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
