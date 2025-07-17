import { SummaryContactElement } from '@apptypes';
import { IContactsResponse } from '@apptypes/api';
import { Box, Tabs, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';
import CustomText from '../../ui/Text/CustomText';

const contacts: SummaryContactElement[] = [
  {
    caption: 'Адрес:',
    type: 'address',
  },
  {
    caption: 'Часы работы:',
    type: 'time',
  },
  {
    caption: 'Телефон:',
    type: 'phone',
  },
  {
    caption: 'E-mail:',
    type: 'email',
  },
];
const DinamicContactSummary: FC<{ contacts: IContactsResponse }> = ({
  contacts: propsContacts,
}) => {
  const contactsData = propsContacts.data.attributes;

  const renderContactContent = (type: string, label: string) => {
    switch (type) {
      case 'address':
        return (
          <>
            <CustomText visual="paragraph">{label}</CustomText>
            <Link
              href={`https://yandex.ru/maps/-/CHfCrS9h`}
              target="_blank"
              className="contacts_link"
              style={{}}
            >
              Посмотреть карту
            </Link>
          </>
        );
      case 'phone':
        return (
          <Link
            href={`tel:${label.replace(/[^0-9+]/g, '')}`}
            className="contacts_link"
            style={{ fontSize: '18px' }}
          >
            {label}
          </Link>
        );
      case 'email':
        return (
          <Link href={`mailto:${label}`} style={{ fontSize: '18px' }} className="contacts_link">
            {label}
          </Link>
        );
      default:
        return <CustomText visual="paragraph">{label}</CustomText>;
    }
  };

  return (
    <Box
      border={{ base: 'none', lg: '1px solid rgba(0,0,0,.15)' }}
      borderRadius={'14px'}
      height={{ base: '100%', lg: '536px' }}
      maxWidth={{ base: '100%', lg: '400px' }}
      minWidth={{ base: '100%', lg: '380px' }}
      p={{ base: '0', lg: '30px' }}
    >
      <Tabs.Root defaultValue={'contacts'}  display="flex" flexDirection="column" height="100%">
        <Tabs.List
          border={'1px solid rgba(0,0,0,.15)'}
          borderRadius={'49px'}
          // p={'6px'}
          flexShrink={0}
          overflow={'hidden'}
        >
          <Tabs.Trigger
            value='contacts'
            _focus={{ boxShadow: 'none' }}
            fontSize="12px"
            w="50%"
            h={"43px"}
            textTransform={'uppercase'}
            fontWeight={600}
            _selected={{ color: 'white', bg: '#90BCE4' }}
            p={'6px'}
            display={'flex'}
            justifyContent={'center'}
            cursor={'pointer'}
          >
            Контакты
          </Tabs.Trigger>
          <Tabs.Trigger
            value='essential'
            _focus={{ boxShadow: 'none' }}
            fontSize="12px"
            w="50%"
            h={"43px"}
            textTransform={'uppercase'}
            fontWeight={600}
            _selected={{ color: 'white', bg: '#90BCE4' }}
            p={'6px'}
            display={'flex'}
            justifyContent={'center'}
            cursor={'pointer'}
          >
            Реквизиты
          </Tabs.Trigger>
        </Tabs.List>
          <Tabs.Content value='contacts' 
          flex={1}
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#90BCE4',
              borderRadius: '2px',
            },
          }}>
            {contacts.map(({ type, caption }, index) => {
              const label = contactsData[type as keyof typeof contactsData] as string;
              return (
                <VStack key={`${index} - ${label}`} align={'flex-start'} mt={'20px'}>
                  {caption && <CustomText visual={'privacy_text'}>{caption}</CustomText>}
                  {label && renderContactContent(type, label)}
                </VStack>
              );
            })}
          </Tabs.Content>
          <Tabs.Content value='essential'
          flex={1}
          overflow="auto"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#90BCE4',
              borderRadius: '2px',
            },
          }}>
            {' '}
            {contactsData.essential.map((paragraph, index) => {
              const { content, title, id } = paragraph;
              return (
                <VStack
                  key={`${index} - ${title} - ${id}`}
                  align={'flex-start'} 
                  mt={'20px'}
                >
                  {title && <CustomText visual={'privacy_text'}>{title}</CustomText>}
                  {content && <CustomText visual={'paragraph'}>{content}</CustomText>}
                </VStack>
              );
            })}
          </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};

export default DinamicContactSummary;
