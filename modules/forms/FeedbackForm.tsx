'use client'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Box, Input, FormLabel, FormControl, Button, Textarea, Text, Checkbox, HStack, useToast } from '@chakra-ui/react';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import { IClient, IClientBase } from '@/types/api';

interface IFormValues {
  name: string,
  phone: string,
  email: string,
  comment: string,
  privacy: boolean,
}
const RUS_PHONE_REGEX = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.string()
    .matches(RUS_PHONE_REGEX, 'Неверный формат телефона')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный формат email'),
  comment: Yup.string().required('Обязательное поле'),
  privacy: Yup.boolean().oneOf([true], 'Необходимо дать согласие'),
});

const FeedbackForm = () => {
  const toast = useToast();
  const initialValues:IFormValues = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    privacy: false,
  }
  const handleSubmit = async (values: IFormValues, { setSubmitting, resetForm }: any) => {
    console.log('values',values);
    
    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...values, status:'feedback'}),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      const result = await response.json();
      
      toast({
        title: 'Успешно!',
        description: 'Ваша заявка отправлена',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      resetForm();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: (error as Error).message || 'Произошла ошибка при отправке',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box maxW="100%"
    mt={8} p={4} sx={{
      "& *": {
        borderColor: '#D9D9D9'
      }
    }}>
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, errors, setFieldError, setFieldValue, setFieldTouched }) => (
          <Form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px'
          }}>
            {/* Остальная часть формы остается без изменений */}
            <FormControl>
              <FormLabel htmlFor="name" className="feedback_form_label">Ваше имя <span style={{ color: 'red' }}>*</span></FormLabel>
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
                <FormLabel htmlFor="phone" className="feedback_form_label">Телефон <span style={{ color: 'red' }}>*</span></FormLabel>
                <PhoneInput
                  country={'ru'}
                  specialLabel=''
                  inputClass='phoneInput'
                  value={values.phone}
                  onChange={(phone) => {
                    setFieldValue('phone', phone)
                    if (errors.phone && RUS_PHONE_REGEX.test(phone)) {
                      setFieldError('phone', undefined)
                    }
                  }}
                  onBlur={() => setFieldTouched('phone', true)}
                  inputStyle={{
                    border: '1px solid #D9D9D9',
                    background: "transparent",
                    width: '100%',
                    height: '44px',
                    fontSize: '13px',
                    fontWeight: 300,
                    borderRadius: '24px',
                    paddingLeft: '16px',
                  }}
                  disableDropdown={true}
                  buttonStyle={{
                    display: "none"
                  }}
                />
                <ErrorMessage className="feedback_form_label error" name="phone" component={Text} />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="email" className="feedback_form_label">E-mail <span style={{ color: 'red' }}>*</span></FormLabel>
                <Field
                  as={Input}
                  className="feedback_input"
                  h="44px"
                  id="email"
                  name="email"
                  type="email"
                  borderRadius="full"
                  placeholder=""
                />
                <ErrorMessage className="feedback_form_label error" name="email" component={Text} />
              </FormControl>
            </HStack>

            <FormControl>
              <FormLabel htmlFor="comment" className="feedback_form_label">Комментарий</FormLabel>
              <Field
                as={Textarea}
                className="feedback_input"
                h="44px"
                id="comment"
                name="comment"
                borderRadius="lg"
                placeholder=""
              />
              <ErrorMessage className="feedback_form_label error" name="comment" component={Text} />
            </FormControl>

            <FormControl>
              <Field
                as={Checkbox}
                id="privacy"
                name="privacy"
                className="feedback_form_checkbox"
              >
                Я даю согласие на обработку моих персональных данных в соответствии c <Link href={'/privacy'} style={{ textDecoration: 'underline' }}>политикой конфиденциальности</Link>
              </Field>
              <ErrorMessage className="feedback_form_label error" name="privacy" component={Text} />
            </FormControl>

            <Button
              type="submit"
              variant={'outline_secondary'}
              isLoading={isSubmitting}
              borderRadius="full"
            >
              ОТПРАВИТЬ
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FeedbackForm;