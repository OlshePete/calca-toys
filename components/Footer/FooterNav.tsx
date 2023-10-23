import { FooterContactElement, FooterNavNextElement } from "@/types";
import React from "react";
import Link from "next/link";
import CustomStack from "../CustomStack/CustomStack";
import CustomText from "@/ui/typographies/CustomText";
const data: FooterNavNextElement[][] = [
  [
    {
      label: "Каталог",
    },
    {
      label: "Шары",
      link: "catalog",
    },
    {
      label: "Игрушки",
      link: "catalog",
    },
    {
      label: "Упаковка",
      link: "catalog",
    },
    {
      label: "Товары для праздника",
      link: "catalog",
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
const contacts: FooterContactElement[] = [
  {
    label: "Контакты",
  },
  {
    label: ["ТК «Космос»", "г. Санкт-Петербург", "ул. Типанова 27/39"],
    caption: "Адрес:",
  },
  {
    label: "с 9:00 - 10:00 без выходных",
    caption: "Часы работы:",
  },
  {
    label: "+7 921 952-21-69",
    caption: "Телефон:",
  },
];
function FooterNav() {
  return (
    <div className="footer-nav">
      {data &&
        data.map((block, index) => {
          return (
            <CustomStack
              variant="column"
              gap={10}
              key={new Date().toString() + index}
            >
              {block?.map(({ label, link }, elIndex) => {
                if (!link)
                  return (
                    <CustomText
                      key={new Date().toString() + label + elIndex}
                      style={{
                        listStyleType: "none",
                        lineHeight: "20px",
                        fontSize: "16px",
                        fontWeight: 500,
                        maxWidth: "150px",
                      }}
                    >
                      {label}
                    </CustomText>
                  );
                return (
                  <Link
                    href={{
                      pathname: `/${link || "#"}`,
                    }}
                    key={new Date().toString() + label + elIndex}
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <CustomText
                      style={{
                        lineHeight: "20px",
                        fontSize: "14px",
                        fontWeight: 400,
                        maxWidth: "150px",
                      }}
                    >
                      {label}
                    </CustomText>
                  </Link>
                );
              })}
            </CustomStack>
          );
        })}
      <CustomStack variant="column" gap={6}>
        {contacts.map(({ label, caption }, blIndex) => {
          return (
            <CustomStack
              key={new Date().toString() + blIndex + label}
              variant="column"
              gap={6}
            >
              {caption && (
                <CustomText
                  style={{
                    fontSize: "14px",
                    color: "rgba(0, 0, 0, 0.75)",
                    lineHeight: "22px",
                  }}
                >
                  {caption}
                </CustomText>
              )}
              {Array.isArray(label) ? (
                label.map((text) => (
                  <CustomText
                    style={{
                      fontSize: "16px",
                      lineHeight: "22px",
                      fontWeight: blIndex === 0 ? 500 : 400,
                    }}
                    key={text + new Date().toDateString()}
                  >
                    {text}
                  </CustomText>
                ))
              ) : (
                <CustomText
                  style={{
                    fontSize: "16px",
                    lineHeight: "22px",
                    fontWeight: blIndex === 0 ? 500 : 400,
                  }}
                >
                  {label}
                </CustomText>
              )}
              1
            </CustomStack>
          );
        })}
      </CustomStack>
    </div>
  );
}

export default FooterNav;
