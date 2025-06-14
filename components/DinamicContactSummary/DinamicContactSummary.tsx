import { FooterContactElement, SummaryContactElement } from "@/types";
import { IContactsResponse } from "@/types/api";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

const contacts: SummaryContactElement[] = [
  {
    caption: "Адрес:",
    type: "address",
  },
  {
    caption: "Часы работы:",
    type: "time",
  },
  {
    caption: "Телефон:",
    type: "phone",
  },
  {
    caption: "E-mail:",
    type: "email",
  },
];
const DinamicContactSummary:FC<{contacts: IContactsResponse}> = ({contacts:propsContacts}) => {
  const contactsData = propsContacts.data.attributes
  console.log('contactsData',contactsData.essential)

  const renderContactContent = (type: string, label: string) => {
    switch (type) {
      case "address":
        return (
          <>
            <Text variant="paragraph">{label}</Text>
            <Link
              href={`https://yandex.ru/maps/-/CHfCrS9h`}
              target="_blank"
              className="contacts_link"
              style={{
              }}
            >
              Посмотреть карту
            </Link>
          </>
        );
      case "phone":
        return (
          <Link href={`tel:${label.replace(/[^0-9+]/g, "")}`}
          className="contacts_link" 
          style={{fontSize:'18px'}}
          >
            {label}
          </Link>
        );
      case "email":
        return (
          <Link href={`mailto:${label}`} 
          style={{fontSize:'18px'}}
          className="contacts_link">
            {label}
          </Link>
        );
      default:
        return <Text variant="paragraph">{label}</Text>;
    }
  };

  return (
    <Box
      border={{ base:'none', lg: '1px solid rgba(0,0,0,.15)'}}
      borderRadius={'14px'}
      height={{ base: '100%', lg: '536px' }}
      maxWidth={{ base: '100%', lg: '400px' }}
      minWidth={{ base: '100%', lg: '380px' }}
      p={{ base: '0', lg: '30px' }}

    >
      <Tabs isLazy variant='soft-rounded' display="flex" flexDirection="column"  height="100%">
        <TabList
          border={"1px solid rgba(0,0,0,.15)"}
          borderRadius={"49px"}
          p={"6px"}
          flexShrink={0}
        >
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            w="50%"
            textTransform={'uppercase'}
            fontWeight={500}
            _selected={{ color: 'white', bg: "#90BCE4" }}
          >
            Контакты
          </Tab>
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            w="50%"
            textTransform={'uppercase'}
            fontWeight={500}
            _selected={{ color: 'white', bg: "#90BCE4" }}
          >
            Реквизиты
          </Tab>
        </TabList>
        <TabPanels
          flex={1}
          overflow="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#90BCE4",
              borderRadius: "2px",
            },
          }}
>
          <TabPanel>
            {contacts.map(({ type, caption }, index) => {
              const label = contactsData[type as keyof typeof contactsData] as string
              return (
                <VStack key={`${index} - ${label}`} align={"flex-start"} mt={'20px'}>
                  {caption && <Text variant={'privacy_text'}>{caption}</Text>}
                  {label && renderContactContent(type, label)}
                </VStack>
              );
            })}
          </TabPanel>
          <TabPanel> {contactsData.essential.map((paragraph, index) => {
            const { content,title, id } = paragraph
            return (
              <VStack key={`${index} - ${title} - ${id}`} align={"flex-start"}  mt={index!==0 ? '20px':0}>
                {title && <Text variant={'privacy_text'}>{title}</Text>}
                {content && <Text variant={'paragraph'}>{content}</Text>}
              </VStack>
            );
          })}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default DinamicContactSummary;
