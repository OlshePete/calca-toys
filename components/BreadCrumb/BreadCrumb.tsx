"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbProps } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect } from 'react';
const labels = {
  'contacts':'Контакты',
  'catalog':'Каталог',
  'services':'Услуги',
  'product':'Товары',
  'news':'Новости',
  'toy':'Игрушки',
  'balloon':'Шары',
  'supplies':'Товары для праздника',
  'privacy':'Политика конфиденциальности',
  'warranty':'Гарантии качества',
  'basket':'Корзина',
  'confirm':'Оформление заказа',
  'decoration': 'Оформление шарами',
  'packing':'Упаковка',
  'inflate':'Надуем шары',
  'payments':'Способы оплаты'
}

interface IProps extends BreadcrumbProps {
  title?: string
}
const Breadcrumbs:FC<IProps> = ({title, ...props}) => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean)//.map(name=>labels[name as unknown as keyof typeof labels] ?? name); // Разделяем путь и удаляем пустые элементы
 
  return (
    <Breadcrumb pt={"44px"} {...props}>
      <BreadcrumbItem fontSize={'12px'}>
        <BreadcrumbLink href='/' color={'#939393'}>
        Главная
        </BreadcrumbLink>
      </BreadcrumbItem>
      {paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const isCurrentPage = index === paths.length - 1;
        const text = labels[path as unknown as keyof typeof labels] ?? title ??path
        return (
          <BreadcrumbItem key={href} isCurrentPage={isCurrentPage} fontSize={'12px'}>
            <BreadcrumbLink href={href} color={'#515151'} fontWeight={300} >{text}</BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;