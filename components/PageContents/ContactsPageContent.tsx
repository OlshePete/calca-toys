'use client'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import DinamicContactSummary from '@/components/DinamicContactSummary/DinamicContactSummary'
import FeedbackForm from '@/modules/forms/FeedbackForm'
import { IContactsResponse } from '@/types/api'
import { Grid, GridItem, Heading, Stack, Text, Box } from '@chakra-ui/react'
import { FC } from 'react'

const ContactsPageContent: FC<{ contacts: IContactsResponse }> = ({ contacts }) => {
  return (
    <ContentContainer>
        <Heading as="h1" variant="post_header" mb={6}>Контакты</Heading>
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(12, 1fr)' }}
          gap={{ base: 8, lg: 0 }}
          as="section"
        >
          <GridItem 
            order={{ base: 1, lg: 2 }}
            colSpan={{ base: 12, lg: 4 }}
            colStart={{ lg: 9 }}
            colEnd={{ lg: 13 }}
            as="aside"
            role="complementary"
            aria-label="Контактная информация"
          >
            <DinamicContactSummary contacts={contacts}/>
          </GridItem>

          <GridItem
            order={{ base: 2, lg: 1 }}
            colSpan={{ base: 12, lg: 8 }}
            minH={{ base: 'auto', lg: '530px' }}
            p={{ base: '0 30px', lg: '0' }}
            as="section"
            role="main"
          >
            <Stack spacing={6}>
              <Heading 
                as="h2"
                variant="privacy_header" 
                textTransform="none" 
                fontSize="20px" 
                fontWeight={800}
              >
                Обратная связь
              </Heading>
              <Text maxW={{ base: '100%', lg: '80%' }}>
                Если у вас есть какие-либо вопросы, пожалуйста, заполните форму обратной связи
                и наш менеджер с вами свяжется
              </Text>
              <Box as="section" aria-label="Форма обратной связи">
                <FeedbackForm />
              </Box>
            </Stack>
          </GridItem>
        </Grid>
    </ContentContainer>
  )
}

export default ContactsPageContent