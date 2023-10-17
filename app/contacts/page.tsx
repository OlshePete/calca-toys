'use client'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import DinamicContactSummary from '@/components/DinamicContactSummary/DinamicContactSummary'
import FeedbackForm from '@/modules/forms/FeedbackForm'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function ContactsPage() {
  return (
    <div className='section  fullH'  style={{background:"#FEF7E6",padding:'110px 0' }}>
     <ContentContainer>
      <Heading variant={"post_header"}>Контакты</Heading>
      <Grid templateColumns='repeat(12, 1fr)' gap={'0px'}>
        <GridItem   minH={'530px'} colSpan={7}>
          <Heading variant={'post_header'} textTransform={'none'} fontSize={'20px'} fontWeight={800}>Обратная связь</Heading>
          <Text maxW={'80%'}>Если у вас есть какие-либо вопросы, пожалуйста, заполните форму обратной связи
          и наш менеджер с вами свяжется</Text>
          <FeedbackForm/>
        </GridItem>
        <GridItem   minH={'530px'} colStart={9} colEnd={13}>
          <DinamicContactSummary/>
        </GridItem>
      </Grid>
     </ContentContainer>
    </div>
  )
}
