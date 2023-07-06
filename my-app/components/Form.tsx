import { FC, memo } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Item } from '../typedefs';
import { Button } from './ui/Button';
import { Field } from './ui/Field';

interface Props {
  addHandler: (el: Item) => void;
}

interface FormValues {
  name: string;
  overview: string;
  imageURL: string;
  amount: number;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  overview: Yup.string().required('Overview is required'),
  amount: Yup.number().required('Amount is required'),
  imageURL: Yup.string().required('Image URL is required'),
});

export const Form: FC<Props> = memo((props) => {
  const { addHandler } = props;

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      overview: '',
      imageURL: '',
      amount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newItem: Item = {
        id: new Date().getTime().toString(),
        title: values.name,
        description: values.overview,
        image: values.imageURL,
        price: values.amount,
      };

      addHandler(newItem);
      formik.resetForm();
    },
  });

  return (
    <>
      <Field
        placeholder="Name"
        val={formik.values.name}
        setValue={formik.handleChange('name')}
        error={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
      />

      <Field
        placeholder="Overview"
        val={formik.values.overview}
        setValue={formik.handleChange('overview')}
        error={formik.touched.overview && formik.errors.overview ? formik.errors.overview : ''}
      />

      <Field
        placeholder="Amount"
        val={formik.values.amount.toString()}
        setValue={formik.handleChange('amount')}
        keyboardType="numeric"
        error={formik.touched.amount && formik.errors.amount ? formik.errors.amount : ''}
      />

      <Field
        placeholder="Image URL"
        val={formik.values.imageURL}
        setValue={formik.handleChange('imageURL')}
        error={formik.touched.imageURL && formik.errors.imageURL ? formik.errors.imageURL : ''}
      />

      <Button title="Додати" onPress={formik.handleSubmit} />
    </>
  );
});
