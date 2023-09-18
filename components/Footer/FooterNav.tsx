import { FooterContactElement, FooterNavNextElement } from "@/types";
import React from "react";
import FooterStack from "./FooterStack";
import Link from "next/link";
const data: FooterNavNextElement[][] = [
  [
    {
      label: "Каталог",
      link: "catalog",
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
      link: "catalog",
    },
    {
      label: "Новости",
      link: "catalog",
    },
    {
      label: "Вакансии",
      link: "catalog",
    },
    {
      label: "Контакты и реквизиты",
      link: "catalog",
    },
  ],
  [
    {
      label: "Помощь",
      link: "catalog",
    },
    {
      label: "Способы оплаты",
      link: "catalog",
    },
    {
      label: "Гарантии и качество",
      link: "catalog",
    },
    {
      label: "Политика конфиденциальности",
      link: "catalog",
    },
  ],
];
const contacts:FooterContactElement[] = [
  {
    label:'Контакты',
  },
  {
    label:["ТК «Космос»", 'г. Санкт-Петербург','ул. Типанова 27/39'],
    caption:"Адрес:"
  },
  {
    label:"с 9:00 - 10:00 без выходных",
    caption:"Часы работы:"
  },
  {
    label:"+7 921 952-21-69",
    caption:"Телефон:"
  },
]
function FooterNav() {
  return (
    <div className="footer-nav">
      {data &&
        data.map((block, index) => {
          return (
            <FooterStack
              variant="column"
              gap={10}
              key={new Date().toLocaleTimeString()}
            >
              {block?.map(({ label, link }, elIndex) => {
                return (
                  <Link
                    href={{
                      pathname: `/${link || "#"}`
                    }}
                    key={new Date().toLocaleTimeString() + label}
                    style={{
                      listStyleType: "none",
                      fontSize: elIndex === 0 ? "16px" : "14px",
                      maxWidth: "150px",
                    }}
                  >
                    {label}
                  </Link>
                );
              })}
            </FooterStack>
          );
        })}
      <div>
        {
          contacts.map(({label, caption}, blIndex)=>{
            return (<FooterStack 
                key={new Date().toLocaleTimeString()}
                variant="column"
                gap={12}
              >
               {
                caption && <span style={{fontSize:'14px'}}>{caption}</span>
               }
               {
                Array.isArray(label) ? label.map((text)=><span  style={{fontSize:'16px', fontWeight:blIndex===0?500:400}} key={text+new Date().toDateString()}>{text}</span>) :<span   style={{fontSize:'16px', fontWeight:blIndex===0?500:400}}>{label}</span>
               }
               <span>{}</span>
            </FooterStack>)
          })
        }
      </div>
    </div>
  );
}

export default FooterNav;
