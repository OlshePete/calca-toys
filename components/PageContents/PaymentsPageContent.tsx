"use client";
import { FC } from "react";
import { IContactsResponse, IPaymentResponse } from "@/types/api";
import { Box, Grid, GridItem, Heading, Icon, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import DinamicContactSummary from "../DinamicContactSummary/DinamicContactSummary";

interface IProps {
  contacts: IContactsResponse,
  content: IPaymentResponse,
  links: {
    phones: string[];
    emails: string[];
  }
}
const CustomListIcon = () => {
  return <Icon>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 0L8.52186 1.32036L10.5 0.937822L11.1578 2.84221L13.0622 3.5L12.6796 5.47814L14 7L12.6796 8.52186L13.0622 10.5L11.1578 11.1578L10.5 13.0622L8.52186 12.6796L7 14L5.47814 12.6796L3.5 13.0622L2.84221 11.1578L0.937822 10.5L1.32036 8.52186L0 7L1.32036 5.47814L0.937822 3.5L2.84221 2.84221L3.5 0.937822L5.47814 1.32036L7 0Z" fill="#90BCE4" />
    </svg>
  </Icon>
}

import React from 'react';

interface ContactLinksProps {
  text: string;
  phoneLinkPrefix?: string;
  emailLinkPrefix?: string;
  className?: string;
  parsedContacts: {
    phones:string[],
    emails:string[],
  },
}


const PaymentsPageContent: FC<IProps> = ({ contacts, content: contentProps, links }) => {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL
  const { title, subtitle, content, formats, variants } = contentProps.data.attributes
  return (
    <>
      <Heading variant={"post_header"} pt={"60px"} pb={"40px"}>
        {title.toUpperCase()}
      </Heading>

      <Grid templateColumns="repeat(12, 1fr)" gap={"0px"}>
        <GridItem minH={"530px"} colSpan={7} display={'flex'} flexDirection={'column'} gap={'8px'}>

          <Heading
            variant={"privacy_header"}
            textTransform={"uppercase"}
            fontSize={"16px"}
            fontWeight={500}
          >
            {subtitle}
          </Heading>
          <Text variant={"privacy_text"}>
            {content}
          </Text>
          <List>
            {
              formats && formats.map((format, index) => {
                return <ListItem>
                  <ListIcon as={CustomListIcon} color='green.500' />
                  {format.content}
                </ListItem>
              })
            }
          </List>
          {
            variants && variants.map((variant, index) => {
              return <Box key={index + variant.title}>
                <Heading
                  variant={"privacy_header"}
                  textTransform={"uppercase"}
                  fontSize={"16px"}
                  fontWeight={500}
                >
                  {variant.title}
                </Heading>
                <Text variant={"privacy_text"}>
                  {variant.content}
                </Text>

              </Box>
            })
          }
          {/* <Heading
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
            </Text>*/}
        </GridItem>
        <GridItem minH={"530px"} colStart={9} colEnd={13}>
          <DinamicContactSummary contacts={contacts} />
        </GridItem>
      </Grid>
    </>
  );
}
export default PaymentsPageContent