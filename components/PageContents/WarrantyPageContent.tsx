"use client";
import DinamicContactSummary from "@/components/DinamicContactSummary/DinamicContactSummary";
import { IContactsResponse, IWarrantyResponse } from "@/types/api";
import { Grid, GridItem, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface IProps {
  contacts: IContactsResponse,
  content: IWarrantyResponse
}

const WarrantyPageContent: FC<IProps> = ({ contacts, content }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const { title, subtitle, variant, attention } = content.data.attributes
  return (
    <>
      <Heading
        variant={"post_header"}
        pt={"60px"}
        pb={"40px"}
      >
        {title.toUpperCase()}
      </Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={"0px"}>
        <GridItem
          minH={"530px"}
          colSpan={7}
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
        >
          <Heading
            variant={"privacy_header"}
            textTransform={"uppercase"}
            fontSize={"16px"}
            fontWeight={500}
          >
            {subtitle}
          </Heading>
          <List spacing={'22px'} pt={'28px!important'}>
            {
              variant && variant.map((item, index) => {
                return <ListItem key={index} display={"flex"} alignItems={"center"} gap={"33px"} >
                  <Image
                    alt={item.content}
                    src={`${API_URL}/cms${item.image.data.attributes.url}`}
                    width={90}
                    height={90}
                  />
                  <Text flexGrow={1}>
                    {item.content}
                  </Text>
                </ListItem>
              })
            }


          </List>
          <Text variant={"privacy_text"} pt={'40px!important'}>
            {attention}
          </Text>
        </GridItem>
        <GridItem minH={"530px"} colStart={9} colEnd={13}>
          <DinamicContactSummary contacts={contacts} />
        </GridItem>
      </Grid>
    </>
  );
}
export default WarrantyPageContent