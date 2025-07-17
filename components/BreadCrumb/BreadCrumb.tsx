'use client';

import { Breadcrumb, BreadcrumbRootProps } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

const labels = {
  contacts: 'Контакты',
  catalog: 'Каталог',
  services: 'Услуги',
  product: 'Товары',
  news: 'Новости',
  toy: 'Игрушки',
  balloon: 'Шары',
  supplies: 'Товары для праздника',
  privacy: 'Политика конфиденциальности',
  warranty: 'Гарантии качества',
  basket: 'Корзина',
  confirm: 'Оформление заказа',
  decoration: 'Оформление шарами',
  packing: 'Упаковка',
  inflate: 'Надуем шары',
  payments: 'Способы оплаты',
};

interface IProps extends BreadcrumbRootProps {
  title?: string;
}
const Breadcrumbs: FC<IProps> = ({ title, ...props }) => {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <Breadcrumb.Root pt={'44px'} {...props}>
      <Breadcrumb.List>
        <Breadcrumb.Item fontSize={'12px'}>
          <Breadcrumb.Link href="/" color={'#939393'}>
            Главная
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`;
          const isCurrentPage = index === paths.length - 1;
          const text = labels[path as unknown as keyof typeof labels] ?? title ?? path;
          return (
            <React.Fragment key={href}>
              <Breadcrumb.Separator fontSize={'12px'} display={'flex'}>
                /
              </Breadcrumb.Separator>
              <Breadcrumb.Item key={href} fontSize={'12px'} >
                {
                  isCurrentPage ?
                    <Breadcrumb.CurrentLink color={'brand.200'} fontWeight={600}>
                      {text}
                    </Breadcrumb.CurrentLink>
                    :
                    <Breadcrumb.Link href={href} color={'brand.400'}>
                      {text}
                    </Breadcrumb.Link>
                }
              </Breadcrumb.Item>
            </React.Fragment>
          );
        })}
      </Breadcrumb.List>

    </Breadcrumb.Root>
  );
};

export default Breadcrumbs;
