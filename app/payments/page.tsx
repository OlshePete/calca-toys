'use client'
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import DinamicContactSummary from "@/components/DinamicContactSummary/DinamicContactSummary";
import { Grid, GridItem, Heading, Icon, Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
const CustomListIcon = () => {
  return <Icon>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M7 0L8.52186 1.32036L10.5 0.937822L11.1578 2.84221L13.0622 3.5L12.6796 5.47814L14 7L12.6796 8.52186L13.0622 10.5L11.1578 11.1578L10.5 13.0622L8.52186 12.6796L7 14L5.47814 12.6796L3.5 13.0622L2.84221 11.1578L0.937822 10.5L1.32036 8.52186L0 7L1.32036 5.47814L0.937822 3.5L2.84221 2.84221L3.5 0.937822L5.47814 1.32036L7 0Z" fill="#90BCE4"/>
</svg>
  </Icon>
}
export default function PaymentsPage() {
  return (
    <div className='section  fullH'  style={{background:"#FEF7E6",padding:'110px 0' }}>
     <ContentContainer>
      <BreadCrumb />
        <Heading variant={"post_header"} pt={"60px"} pb={"40px"}  style={{
          fontFamily:'TS Remarker',

        }}>СПОСОБЫ ОПЛАТЫ</Heading>
        <Grid templateColumns="repeat(12, 1fr)" gap={"0px"}>
          <GridItem minH={"530px"} colSpan={7} display={'flex'} flexDirection={'column'} gap={'8px'}>

            <Heading
              variant={"privacy_header"}
              textTransform={"uppercase"}
              fontSize={"16px"}
              fontWeight={500}
            >
             КАКИЕ СПОСОБЫ ОПЛАТЫ Я МОГУ ИСПОЛЬЗОВАТЬ ДЛЯ ЗАКАЗОВ
В ИНТЕРНЕТ МАГАЗИНЕ?
            </Heading>
            <Text variant={"privacy_text"}>
         Мы хотим, чтобы покупка товаров в Интернете была быстрой и легкой, поэтому мы принимаем следующие способы оплаты:
            </Text>
            <List>
              <ListItem >
    <ListIcon as={CustomListIcon} color='green.500' />Visa, Mastercard, Maestro</ListItem>
              <ListItem >
    <ListIcon as={CustomListIcon} color='green.500' />Google Pay</ListItem>
              <ListItem >
    <ListIcon as={CustomListIcon} color='green.500' />PayPal</ListItem>
            </List>
            <Heading
              variant={"privacy_header"}
              textTransform={"uppercase"}
              fontSize={"16px"}
              fontWeight={500}
            >
              Могу ли я оплатить свой заказ несколькими способами?
            </Heading>
            <Text variant={"privacy_text"}>
              Нет, оплата заказов не может быть разделена между несколькими способами оплаты
            </Text>
            <Heading
              variant={"privacy_header"}
              textTransform={"uppercase"}
              fontSize={"16px"}
              fontWeight={500}
            >
              Возможна оплата банковским переводом для юридических
лиц?
            </Heading>
            <Text variant={"privacy_text"}>
             Для оплаты необходимо запросить счет, обратившись в службу поддержки: <a className="content-link" href="mailto:vellum.paper@yandex.ru">vellum.paper@yandex.ru</a>
            </Text>
            <Heading
              variant={"privacy_header"}
              textTransform={"uppercase"}
              fontSize={"16px"}
              fontWeight={500}
            >
              Остались вопросы по оплате?
            </Heading>
            <Text variant={"privacy_text"}>
             Можете их задать по телефону <a className="content-link" href="tel:+79219522169">+7 921 952-21-69</a> либо написать нам на почту<a className="content-link" href="mailto:vellum.paper@yandex.ru"> vellum.paper@yandex.ru</a>
            </Text>
          </GridItem>
          <GridItem minH={"530px"} colStart={9} colEnd={13}>
            <DinamicContactSummary />
          </GridItem>
        </Grid>
     </ContentContainer>
    </div>
  )
}
