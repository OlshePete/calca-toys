'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Input,
  Field as ChakraField,
  Textarea,
  Checkbox,
  HStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import CustomButton from '../../ui/Buttons/CustomButton';
import Text from '../../ui/Text/CustomText';
import { toaster } from '@components/ui/toaster';
interface IFormValues {
  name: string;
  phone: string;
  email: string;
  comment: string;
  privacy: boolean;
}
const RUS_PHONE_REGEX =
  /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.string()
    .matches(RUS_PHONE_REGEX, 'Неверный формат телефона')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный формат email'),
  comment: Yup.string(),//.required('Обязательное поле'),
  privacy: Yup.boolean().oneOf([true], 'Необходимо дать согласие'),
});

const FeedbackForm = () => {
  const toast = toaster.create;
  const initialValues: IFormValues = {
    name: '',
    phone: '',
    email: '',
    comment: '',
    privacy: false,
  };
  const handleSubmit = async (values: IFormValues, { setSubmitting, resetForm }: any) => {
    console.log('values', values);

    try {
      const response = await fetch('/api/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...values, status: 'feedback' }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      const result = await response.json();
    console.log('result', result);

      toast({
        title: 'Успешно!',
        description: 'Ваша заявка отправлена',
        type: 'success',
        duration: 5000,
        closable: true,
      });

      resetForm();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: (error as Error).message || 'Произошла ошибка при отправке',
        type: 'error',
        duration: 5000,
        closable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Box
      maxW="100%"
      mt={8}
      pr={[0,0,0,'70px']}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={FeedbackSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, errors, setFieldError, setFieldValue, setFieldTouched }) => (
          <Form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
            }}
          >
            <ChakraField.Root>
              <ChakraField.Label htmlFor="name" className="feedback_form_label">
                Ваше имя <span style={{ color: 'red' }}>*</span>
              </ChakraField.Label>
              <Field
                as={Input}
                className="feedback_input"
                id="name"
                name="name"
                type="text"
                placeholder=""
              />
              <ChakraField.ErrorText>
                <ErrorMessage className="feedback_form_label error" name="name" component={Text} />
              </ChakraField.ErrorText>
            </ChakraField.Root>

            <HStack>
              <ChakraField.Root>
                <ChakraField.Label htmlFor="phone" className="feedback_form_label">
                  Телефон <span style={{ color: 'red' }}>*</span>
                </ChakraField.Label>
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
                <ErrorMessage className="feedback_form_label error" name="phone" component={Text} />
              </ChakraField.Root>

              <ChakraField.Root>
                <ChakraField.Label htmlFor="email" className="feedback_form_label">
                  E-mail
                </ChakraField.Label>
                <Field
                  as={Input}
                  className="feedback_input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder=""
                />
                <ErrorMessage className="feedback_form_label error" name="email" component={Text} />
              </ChakraField.Root>
            </HStack>

            <ChakraField.Root>
              <ChakraField.Label htmlFor="comment" className="feedback_form_label">
                Комментарий
              </ChakraField.Label>
              <Field
                as={Textarea}
                className="feedback_input"
                id="comment"
                name="comment"
                placeholder=""
              />
            </ChakraField.Root>

            <ChakraField.Root position={'relative'}>
              <Checkbox.Root id="privacy" name="privacy" className='feedback_form_checkbox'
                checked={values.privacy}
                onCheckedChange={(e) => setFieldValue('privacy',!!e.checked)}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control/>
                <Checkbox.Label>
                  Я даю согласие на обработку моих персональных данных в соответствии c{' '}
                  <Link href={'/privacy'} style={{ textDecoration: 'underline' }}>
                    политикой конфиденциальности
                  </Link>
                </Checkbox.Label>
              </Checkbox.Root>
              <ErrorMessage className="feedback_form_label error" name="privacy" component={Text} />
            </ChakraField.Root>  
          
            <CustomButton
              type="submit"
              visual={'outline_secondary'}
              loading={isSubmitting}
              borderRadius="full"
              label='ОТПРАВИТЬ'
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FeedbackForm;
