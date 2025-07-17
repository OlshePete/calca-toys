'use client';
import React, { FC, useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Input,
  FormLabel,
  FormControl,
  Button,
  Textarea,
  Text,
  Checkbox,
  HStack,
  Heading,
  RadioGroup,
  Stack,
  Radio,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import { useBasketStore } from '@/store/basketStore';
import { IOrderData } from '@/types/order';
import { useRouter } from 'next/navigation';

interface IFormValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
  consent: boolean;
  paymentFormat: 'card' | 'cash' | null;
}
// Схема валидации с использованием Yup
const RUS_PHONE_REGEX =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const CustomerFormSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.string()
    .matches(RUS_PHONE_REGEX, 'Неверный формат телефона')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный формат email'),
  consent: Yup.boolean().oneOf([true], 'Необходимо дать согласие'),
  paymentFormat: Yup.string()
    .oneOf(['card', 'cash'], 'Необходимо выбрать форму оплаты')
    .required('Необходимо выбрать форму оплаты'),
});

const CustomerForm: FC<{ setSubmitRef: (ref: HTMLButtonElement) => void }> = ({ setSubmitRef }) => {
  const { basket, clearAll } = useBasketStore();
  const toast = useToast();
  const { push } = useRouter();

  const initialValues: IFormValues = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    consent: false,
    paymentFormat: null,
  };
  const submitBtn = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (submitBtn && submitBtn.current && setSubmitRef && typeof setSubmitRef === 'function')
      setSubmitRef(submitBtn.current);
  }, [submitBtn]);
  const submitHandler = async (values: IFormValues, { setSubmitting, resetForm }: any) => {
    try {
      // 1. Создаем клиента
      const clientResponse = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: values.email,
          comment: values.comment,
          privacy: values.consent,
          status: 'process',
        }),
      });

      if (!clientResponse.ok) {
        throw new Error('Ошибка при создании клиента');
      }
      // TODO описать типы dto
      const clientData = await clientResponse.json();
      const clientId = clientData.data.id;

      if (!clientId) {
        throw new Error('Не удалось получить ID клиента');
      }
      // 2. Создаем заказ
      const orderResponse = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          comment: values.comment,
          status: 'pending',
          paymentMethod: values.paymentFormat,
          client: String(clientId),
          items: Object.values(basket.items)
            .map((item, index) => {
              const { product, variant } = item;
              const result = Object.values(variant).map((element, elemIndex) => {
                return {
                  product: String(product.id),
                  value: element.value,
                  variant: String(element.id),
                };
              });
              return result;
            })
            .flat(),
        } as IOrderData),
      });

      if (!orderResponse.ok) {
        throw new Error('Ошибка при создании заказа');
      }

      const orderData = await orderResponse.json();
      // 3. Показываем уведомление об успехе
      toast({
        title: 'Успешно! Ваш заказ оформлен!',
        description: `Номер вашего заказа ${orderData.data.id}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // 4. Сбрасываем форму
      resetForm();
      clearAll();
      push('/');
    } catch (error) {
      toast({
        title: 'Ошибка',
        description:
          (error as Error).message || 'Произошла ошибка при оформлении заказа, попробуйте заново!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Box
      maxW="100%"
      mx="auto"
      p={4}
      sx={{
        '& *': {
          borderColor: '#D9D9D9',
        },
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={CustomerFormSchema}
        onSubmit={(values, helpers) => {
          submitHandler(values, helpers);
        }}
      >
        {({ isSubmitting, values, errors, setFieldValue, setFieldError, setFieldTouched }) => {
          return (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
              }}
            >
              <FormControl>
                <FormLabel htmlFor="name" className="feedback_form_label">
                  Ваше имя <span style={{ color: 'red' }}>*</span>
                </FormLabel>
                <Field
                  as={Input}
                  className="feedback_input"
                  h="44px"
                  id="name"
                  fontSize="13px"
                  name="name"
                  type="text"
                  borderRadius="full"
                  placeholder=""
                />
                <ErrorMessage className="feedback_form_label error" name="name" component={Text} />
              </FormControl>
              <HStack>
                <FormControl>
                  <FormLabel htmlFor="phone" className="feedback_form_label">
                    Телефон <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
                  <PhoneInput
                    country={'ru'}
                    specialLabel=""
                    inputClass="phoneInput"
                    value={values.phone}
                    onChange={(phone) => {
                      setFieldValue('phone', phone);
                      if (errors.phone && RUS_PHONE_REGEX.test(phone)) {
                        setFieldError('phone', undefined);
                      }
                    }}
                    onBlur={() => setFieldTouched('phone', true)}
                    inputStyle={{
                      border: '1px solid #D9D9D9',
                      background: 'transparent',
                      width: '100%',
                      height: '44px',
                      fontSize: '13px',
                      fontWeight: 300,
                      borderRadius: '24px',
                      paddingLeft: '16px',
                    }}
                    disableDropdown={true}
                    buttonStyle={{
                      display: 'none',
                    }}
                  />
                  <ErrorMessage
                    className="feedback_form_label error"
                    name="phone"
                    component={Text}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="email" className="feedback_form_label">
                    E-mail <span style={{ color: 'red' }}>*</span>
                  </FormLabel>
                  <Field
                    as={Input}
                    className="feedback_input"
                    h="44px"
                    id="email"
                    name="email"
                    type="email"
                    borderRadius="full"
                    placeholder=""
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px blue.500',
                    }}
                  />
                  <ErrorMessage
                    className="feedback_form_label error"
                    name="email"
                    component={Text}
                  />
                </FormControl>
              </HStack>
              <FormControl>
                <FormLabel htmlFor="comment" className="feedback_form_label">
                  Комментарий
                </FormLabel>
                <Field
                  as={Textarea}
                  className="feedback_input"
                  h="180px"
                  id="comment"
                  name="comment"
                  borderRadius="lg"
                  placeholder=""
                />
                <ErrorMessage
                  className="feedback_form_label error"
                  name="comment"
                  component={Text}
                />
              </FormControl>

              <FormControl>
                <Field as={Checkbox} id="consent" name="consent" className="feedback_form_checkbox">
                  Я даю согласие на обработку моих персональных данных в соответствии c{' '}
                  <Link href={'/privacy'} style={{ textDecoration: 'underline' }}>
                    политикой конфиденциальности
                  </Link>
                </Field>
                <ErrorMessage
                  className="feedback_form_label error"
                  name="consent"
                  component={Text}
                />
              </FormControl>
              <Heading variant={'post_header'} mb={'28px'} pt={'40px'}>
                Способы оплаты
              </Heading>

              <FormControl>
                <RadioGroup
                  name="paymentFormat"
                  onChange={(value: 'card' | 'cash') => setFieldValue('paymentFormat', value)}
                  value={values.paymentFormat ?? undefined}
                >
                  <Stack direction="column" spacing={4}>
                    <Checkbox
                      value="card"
                      className="confirm_form_checkbox"
                      isChecked={values.paymentFormat === 'card'}
                      onChange={() => {
                        if (values.paymentFormat === 'card') {
                          setFieldValue('paymentFormat', null);
                        } else {
                          setFieldValue('paymentFormat', 'card');
                        }
                      }}
                    >
                      Картой на сайте
                    </Checkbox>
                    <Checkbox
                      value="cash"
                      className="confirm_form_checkbox"
                      isChecked={values.paymentFormat === 'cash'}
                      onChange={() => {
                        if (values.paymentFormat === 'cash') {
                          setFieldValue('paymentFormat', null);
                        } else {
                          setFieldValue('paymentFormat', 'cash');
                        }
                      }}
                    >
                      Наличные/картой при получении
                    </Checkbox>
                  </Stack>
                </RadioGroup>
                <ErrorMessage
                  className="feedback_form_label error"
                  name="paymentFormat"
                  component={Text}
                />
              </FormControl>
              <Button
                hidden
                ref={submitBtn}
                type="submit"
                variant={'outline_secondary'}
                // colorScheme="teal"
                isLoading={isSubmitting}
                borderRadius="full"
                // width="full"
              >
                ОТПРАВИТЬ
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default CustomerForm;
