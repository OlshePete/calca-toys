'use client';
import { FC } from 'react';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import DinamicContactSummary from '@components/DinamicContactSummary/DinamicContactSummary';
import FeedbackForm from '@modules/forms/FeedbackForm';
import { Grid, GridItem, Stack, Text, Box } from '@chakra-ui/react';
import { IContactsResponse } from '@apptypes/api';
import CustomHeading from '../../ui/Heading/CustomHeading';
import Breadcrumbs from '@components/BreadCrumb/BreadCrumb';

const ContactsPageContent: FC<{ contacts: IContactsResponse }> = ({ contacts }) => {
  return (
    <ContentContainer>
      <Breadcrumbs />
      <CustomHeading as="h1" visual="post_header" mb={6} label='Контакты' pt={'60px'}/>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
        gap={'8px'}
        as="section"
      >
        <GridItem
          order={{ base: 1, lg: 2 }}
          colSpan={{ base: 12, lg: 4 }}
          colStart={{ lg: 9 }}
          colEnd={{ lg: 13 }}
          p={{ base: '0 30px', lg: '0' }}
          as="aside"
          role="complementary"
          aria-label="Контактная информация"
        >
          <DinamicContactSummary contacts={contacts} />
        </GridItem>
        <GridItem
          order={{ base: 2, lg: 1 }}
          colSpan={{ base: 12, lg: 8 }}
          minH={{ base: 'auto', lg: '530px' }}
          p={{ base: '0 30px', lg: '0' }}
          as="section"
          role="main"
        >
          <Stack>
            <CustomHeading
              as="h2"
              visual="privacy_header"
              textTransform="none"
              fontSize={20}
              fontWeight={800}
            >
              Обратная связь
            </CustomHeading>
            <Text maxW={{ base: '100%', lg: '80%' }}>
              Если у вас есть какие-либо вопросы, пожалуйста, заполните форму обратной связи и наш
              менеджер с вами свяжется
            </Text>
            <Box as="section" aria-label="Форма обратной связи">
              <FeedbackForm />
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </ContentContainer>
  );
};

export default ContactsPageContent;
