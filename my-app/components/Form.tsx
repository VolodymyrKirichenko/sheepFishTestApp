import { StyleSheet, TextInput, Button } from 'react-native';
import React, { FC, memo, useState } from 'react';
import { Item } from '../typedefs';

interface Props {
  addHandler: (el: Item) => void,
}

export const Form: FC<Props> = memo((props) => {
  const { addHandler } = props;

  const [name, setName] = useState('');
  const [overview, setOverview] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [amount, setAmount] = useState(0);

  const onAdd = () => {
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
      description: overview,
      image: imageURL,
      price: amount
    };

    addHandler(newItem);
    setName('');
    setOverview('');
    setImageURL('');
    setAmount(0);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Overview"
        value={overview}
        onChangeText={(text) => setOverview(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={String(amount)}
        onChangeText={(text) => setAmount(Number(text))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />

      <Button title="Додати" onPress={onAdd} />
    </>
  );
})

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
