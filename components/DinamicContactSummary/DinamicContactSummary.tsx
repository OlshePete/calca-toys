import { FooterContactElement, SummaryContactElement } from "@/types";
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
import React from "react";

const contacts: SummaryContactElement[] = [
  {
    label: ["ТК «Космос»", "г. Санкт-Петербург, ул. Типанова 27/39"],
    caption: "Адрес:",
    type: "address",
  },
  {
    label: "с 9:00 - 10:00 без выходных",
    caption: "Часы работы:",
  },
  {
    label: "+7 921 952-21-69",
    caption: "Телефон:",
    type: "phone",
  },
  {
    label: "Vellum.paper@yandex.ru",
    caption: "E-mail:",
    type: "mail",
  },
];
const oficialContacts: FooterContactElement[] = [
  {
    caption: "Полное наименование",
    label: "	Общество с ограниченной ответственностью «Интернет Решения»",
  },
  {
    caption: "Сокращённое наименование",
    label: "	ООО «Интернет Решения»",
  },
  {
    caption: "Фактический и юридический адреса",
    label:
      "	123112, г. Москва, Пресненская наб., д. 10, Помещение I, эт. 41, комн. 6.",
  }
];
function DinamicContactSummary() {
  
  return (
    <Box
      border={'1px solid rgba(0,0,0,.15)'}
      borderRadius={'14px'}
      height={'536px'}
      width={'400px'}
      p={'30px'}
    >
      <Tabs isLazy  variant='soft-rounded'>
        <TabList
      border={'1px solid rgba(0,0,0,.15)'}
      borderRadius={'49px'}
      p={'6px'}
      >
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            w="50%"
            textTransform={'uppercase'}
            fontWeight={500}
             _selected={{ color: 'white',bg:"#90BCE4"}}
          >
            Контакты
          </Tab>
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            w="50%"
            textTransform={'uppercase'}
            fontWeight={500}
             _selected={{ color: 'white',bg:"#90BCE4"}}
          >
            Реквизиты
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {contacts.map(({ label, caption }, index) => {
              return (
                <VStack key={`${index} - ${label}`} align={"flex-start"}>
                  {caption && <Text>{caption}</Text>}
                  {label && Array.isArray(label) ? (
                    label.map((l: string, i): React.ReactNode => {
                      return (
                        <Text textAlign={"left"} key={`${i}${index}`}>
                          {l}
                        </Text>
                      );
                    })
                  ) : (
                    <Text>{label}</Text>
                  )}
                </VStack>
              );
            })}
          </TabPanel>
          <TabPanel> {oficialContacts.map(({ label, caption }, index) => {
              return (
                <VStack key={`${index} - ${label}`} align={"flex-start"}>
                  {caption && <Text>{caption}</Text>}
                  {label && Array.isArray(label) ? (
                    label.map((l: string, i): React.ReactNode => {
                      return (
                        <Text textAlign={"left"} key={`${i}${index}`}>
                          {l}
                        </Text>
                      );
                    })
                  ) : (
                    <Text>{label}</Text>
                  )}
                </VStack>
              );
            })}</TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default DinamicContactSummary;
