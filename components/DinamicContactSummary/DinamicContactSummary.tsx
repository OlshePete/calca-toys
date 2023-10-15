import { FooterContactElement, SummaryContactElement } from "@/types";
import {
  HStack,
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
    caption: "Юридический адрес",
    label:
      "	123112, г. Москва, Пресненская наб., д. 10, Помещение I, эт. 41, комн. 6.",
  },
  {
    caption: "Фактический адрес (офис)",
    label:
      "	123112, Москва, Пресненская наб., 10, блок С, комплекс «Башня на набережной»",
  },
  {
    caption: "ИНН/КПП",
    label: "	7704217370 / 770301001",
  },
  {
    caption: "ОГРН",
    label: "	1027739244741",
  },
  {
    caption: "ОКАТО",
    label: "	45286575000",
  },
  {
    caption: "ОКПО",
    label: "	55185357",
  },
  {
    caption: "ОКВЭД	Основной:",
    label:
      " 47.91 «Торговля розничная по почте или по информационно-коммуникационной сети Интернет»",
  },
  {
    caption: "доп.:",
    label:
      " 41.20, 46.12.22, 46.18.2, 46.48.2 , 46.49.31, 46.72.23, 47.61, 47.63.1, 47.63.2, 47.64 , 47.65, 47.77, 47.77.2, 47.79.1, 47.79.2, 47.91.1, 47.91.2, 47.91.3, 47.91.4, 53.20.3, 73.11, 82.99",
  },
  {
    caption: "Дата регистрации",
    label: " до 01.07.2002 г.	05.09.2000",
  },
  {
    caption: "Дата присвоения ОГРН",
    label: "	24.09.2002",
  },
  {
    caption: "Реквизиты банка",
    label: "	АО «РАЙФФАЙЗЕНБАНК»",
  },
  {
    caption: "БИК:",
    label: " 044525700",
  },
  {
    caption: "Корр./с.:",
    label: " 30101810200000000700 ",
  },
  {
    caption: "Р/с. RUB:",
    label: " 40702810100002400756",
  },
  {
    caption: "Генеральный директор",
    label: "	Гейль Александр Владимирович",
  },
];
function DinamicContactSummary() {
  return (
    <div>
      <Tabs isLazy>
        <TabList>
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            fontWeight="bold"
            w="50%"
          >
            Контакты
          </Tab>
          <Tab
            _focus={{ boxShadow: "none" }}
            fontSize="xs"
            fontWeight="bold"
            w="50%"
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
    </div>
  );
}

export default DinamicContactSummary;
