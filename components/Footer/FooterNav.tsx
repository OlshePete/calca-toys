import { FooterNavNextElement } from "@/types";
import React from "react";
import Link from "next/link";
import { getContacts } from "@/services/getContent";
import FooterCustomStack from "../CustomStack/FooterCustomStack";
import CustomText from "@/ui/typographies/CustomText";
import { IContacts } from "@/types/api";
import Image from "next/image";
import CustomContactBox from "./CustomContactBox";
import { Box } from "@chakra-ui/react";

const data: FooterNavNextElement[][] = [
  [
    {
      label: "Каталог",
      link: "catalog",
    },
    {
      label: "Шары",
      link: "catalog/balloon",
    },
    {
      label: "Игрушки",
      link: "catalog/toy",
    },
    {
      label: "Упаковка",
      link: "catalog/services/packing",
    },
    {
      label: "Товары для праздника",
      link: "catalog/supplies",
    },
  ],
  [
    {
      label: "Информация",
    },
    {
      label: "Новости",
      link: "news",
    },
    {
      label: "Вакансии",
      link: "news",
      query: { type: "job" }
    },
    {
      label: "Контакты и реквизиты",
      link: "contacts",
    },
  ],
  [
    {
      label: "Помощь",
    },
    {
      label: "Способы оплаты",
      link: "payments",
    },
    {
      label: "Гарантии и качество",
      link: "warranty",
    },
    {
      label: "Политика конфиденциальности",
      link: "privacy",
    },
  ],
];

async function FooterNav() {
  const contacts = await getContacts()
  
  const API_URL = process.env.API_URL
  const blockNames:Pick<IContacts,'address' & 'time' & 'phone'> = {
    address:'Адрес',
    time:'Часы работы',
    phone:'Телефон'
  }
  return (
  <Box
    as="nav"
    gap={2}
    display={'flex'}
    py={6}
    bg="transparent"
  >
      {data && data.map((block, index, arr) => {
        const isLast = index === arr.length-1
        return (
          <FooterCustomStack
            key={new Date().toString() + index}
            width={'30%'}
            display={{ base:'none', sm:'none',md:isLast?'none':'flex', lg:'flex' }}
            flexGrow={2}
            direction="column"
            gap={10}
            variant='links'
          >
            {block?.map(({ label, link, query }, elIndex) => {
              if (!link)
                return (
                  <CustomText
                    key={new Date().toString() + label + elIndex}
                    variant={'post_text'}
                    style={{
                      fontSize: "18px",
                    }}
                  >
                    {label}
                  </CustomText>
                );
              return (
                <Link
                  href={{
                    pathname: `/${link}`,
                    query
                  }}
                  key={new Date().toString() + label + elIndex}
                  style={{
                    listStyleType: "none",
                  }}
                  className="hover:text-primary transition-colors"
                  aria-label={`Перейти к разделу ${label}`}
                >
                  <CustomText
                    variant={'post_text'}
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    {label}
                  </CustomText>
                </Link>
              );
            })}
          </FooterCustomStack>
        );
      })}
      <CustomContactBox flexGrow={1} variant="">
        <FooterCustomStack
          direction="column"
          gap={6}
          display={'flex'} 
          flexDirection={'column'}
          padding={2}
        >
          {Object.keys(blockNames).map((key,index)=>{
            const text = contacts.data.attributes[key as keyof typeof blockNames]
            return <React.Fragment key={key}>
              <CustomText
                style={{
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.75)",
                  lineHeight: "22px",
                }}
              >
                {blockNames[key as keyof typeof blockNames]}
              </CustomText>
              <CustomText
                style={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  fontWeight: index === 0 ? 500 : 400,
                }}
              >
                {text}
              </CustomText>
            </React.Fragment>
          })}
          <FooterCustomStack 
            direction="row" 
            gap={8} 
            display={'flex'} 
            flexWrap={'wrap'} 
            marginTop={4} 
          >
            {contacts.data.attributes.socials.map((item,index)=>{
              return <Link 
                key={item.title + index} 
                href={item.link} 
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Перейти на страницу ${item.title}`}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  alt={`${item.title} иконка`}
                  width={28}
                  height={28}
                  src={`${API_URL}/cms${item.icon.data.attributes.url}`}
                />
              </Link>
            })}
          </FooterCustomStack>
        </FooterCustomStack>
      </CustomContactBox>
    </Box>
  );
}

export default FooterNav;
