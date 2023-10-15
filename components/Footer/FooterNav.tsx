import { FooterContactElement, FooterNavNextElement } from "@/types";
import React from "react";
import Link from "next/link";
import CustomStack from "../CustomStack/CustomStack";
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
            <CustomStack
              variant="column"
              gap={10}
              key={new Date().toString() + index}
            >
              {block?.map(({ label, link }, elIndex) => {
                return (
                  <Link
                    href={{
                      pathname: `/${link || "#"}`
                    }}
                    key={new Date().toString() + label + elIndex}
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
            </CustomStack>
          );
        })}
      <div>
        {
          contacts.map(({label, caption}, blIndex)=>{
            return (<CustomStack 
                key={new Date().toString() + blIndex + label}
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
            </CustomStack>)
          })
        }
      </div>
    </div>
  );
}

export default FooterNav;