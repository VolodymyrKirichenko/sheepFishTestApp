import { StyleSheet, TextInput } from 'react-native';
import { FC, memo, useState } from 'react';
import { Item } from '../typedefs';
import { Button } from '../components/ui/Button';
import { Field } from '../components/ui/Field';

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
      <Field
        placeholder="Name"
        val={name}
        setValue={setName}
      />

      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  placeholder="Name"*/}
      {/*  value={name}*/}
      {/*  onChangeText={(text) => setName(text)}*/}
      {/*/>*/}

      <Field
        placeholder="Overview"
        val={overview}
        setValue={setOverview}
      />

      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  placeholder="Overview"*/}
      {/*  value={overview}*/}
      {/*  onChangeText={(text) => setOverview(text)}*/}
      {/*/>*/}

      <Field
        placeholder="Amount"
        val={String(amount)}
        setValue={setAmount}
        keyboardType="numeric"
      />

      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  placeholder="Amount"*/}
      {/*  value={String(amount)}*/}
      {/*  onChangeText={(text) => setAmount(Number(text))}*/}
      {/*  keyboardType="numeric"*/}
      {/*/>*/}

      <Field
        placeholder="Image URL"
        val={imageURL}
        setValue={setImageURL}
      />

      {/*<TextInput*/}
      {/*  style={styles.input}*/}
      {/*  placeholder="Image URL"*/}
      {/*  value={imageURL}*/}
      {/*  onChangeText={(text) => setImageURL(text)}*/}
      {/*/>*/}

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
