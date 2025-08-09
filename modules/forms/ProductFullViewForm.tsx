import React, { useEffect } from 'react';
import Image from 'next/image';
import { FormikHelpers, useFormik } from 'formik';
import {  HStack, IconButton } from '@chakra-ui/react';
import { IProduct, IProductVariant, IResponseData } from '@apptypes/api';
import { useRouter } from 'next/navigation';
import { useBasketStore } from '@store/basketStore';
import { CountPicker } from '../../ui/inputs/CountPicker';
import Button from '../../ui/Buttons/CustomButton';
function ProductFullViewForm({
  max,
  item,
  currentVariant,
}: {
  max: number;
  item: IResponseData<IProduct>;
  currentVariant: IProductVariant;
}) {
  const { setItem, basket } = useBasketStore();
  const { push } = useRouter();
  const countInBasket =
    Object.values(basket.items).find((item) => item.id === item.id)?.variant[currentVariant.id]
      ?.value ?? 0;
  const initialValues = {
    product: { ...item },
    variant: {
      id: currentVariant.id,
      value: 1,
    },
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (
      values: typeof initialValues,
      { resetForm, setValues, setSubmitting }: FormikHelpers<typeof initialValues>
    ) => {
      if (values.variant.value > 0) {
        formik.setValues(formik.initialValues);
        const newItem = {
          product: { ...values.product },
          variant: {
            [values.variant.id]: {
              id: values.variant.id,
              value: values.variant.value,
            },
          },
        };
        setItem(newItem);
      }
    },
  });
  useEffect(() => {
    formik.setFieldValue('variant', {
      ...formik.values.variant,
      id: currentVariant.id,
    });
  }, [currentVariant]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <HStack gap={'18px'}>
        <CountPicker
          max={max - countInBasket}
          current={formik.values.variant.value}
          handler={(v: number) => {
            formik.setFieldValue('variant.value', v);
          }}
        />
        <Button
          visual={'solid'}
          textTransform={'uppercase'}
          w={'248px'}
          fontSize={'12px'}
          lineHeight={'14px'}
          onClick={() => {
            try {
              formik.handleSubmit();
            } catch (error) {
              console.log('error', error);
            } finally {
              console.log('finally');
              push('/basket/confirm');
            }
          }}
        >
          Купить в 1 клик
        </Button>
        <IconButton
          type="submit"
          aria-label="add-to-basket-icon"
          >
            <Image
              src="/basket.svg"
              alt="Basket icon"
              width={40}
              height={40}
              priority
              style={{
                cursor: 'pointer',
              }}
            />
          </IconButton>
        
      </HStack>
    </form>
  );
}

export default ProductFullViewForm;
