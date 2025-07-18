import {
  IContactsResponse,
  INewsResponse,
  IPrivacyResponse,
  IStartPageContent,
  IResponseItemWithDataMeta,
  IResponseData,
  INewsItem,
  IWarrantyResponse,
  IPaymentResponse,
} from '@apptypes/api';
import { cache } from 'react';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
};

export const getStartPageContent = cache(async () => {
  const response = await fetch(`${API_URL}/cms/api/web-content-start?populate=*`, {
    headers,
    next: {
      revalidate: 3600, // кэшируем на 1 час
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке контента для стартовой страницы.');

  const data: IStartPageContent = await response.json();
  console.log('Контент для стартовой страницы успешно получен!', data);

  return data;
});

export const getContacts = cache(async () => {
  const response = await fetch(
    `${API_URL}/cms/api/contact?populate[socials][populate][icon][fields]=url&populate[essential]populate=*&populate=*`,
    {
      headers,
      next: {
        revalidate: 3600, // кэшируем на 1 час
      },
    }
  );

  if (!response.ok) throw new Error('Ошибка при загрузке контактной информации.');

  const data: IContactsResponse = await response.json();
  console.log('Контактная информация успешно получена!');

  return data;
});

export const getNews = cache(async () => {
  const response = await fetch(`${API_URL}/cms/api/blogs?populate[cover][fields]=url&populate=*&populate[paragraph][populate]=paragraph`, {
    headers,
    next: {
      revalidate: 3600, // кэшируем на 1 час
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке новостей блога.');

  const data: INewsResponse = await response.json();
  console.log('Новости успешно получены! Записей добавлено: ', data.data.length);

  return data;
});

export const getPrivacy = cache(async () => {
  const response = await fetch(
    `${API_URL}/cms/api/privacy?populate[paragraphs][populate]=paragraph`,
    {
      headers,
      next: {
        revalidate: 3600, // кэшируем на 1 час
      },
    }
  );

  if (!response.ok) throw new Error('Ошибка при загрузке политики.');

  const data: IPrivacyResponse = await response.json();
  console.log('Данные для политики успешно получены!');

  return data;
});

export const getWarranty = cache(async () => {
  const response = await fetch(
    `${API_URL}/cms/api/warranty?populate[variant][populate]=*&populate=*`,
    {
      headers,
      next: {
        revalidate: 3600, // кэшируем на 1 час
      },
    }
  );

  if (!response.ok) throw new Error('Ошибка при загрузке гарантии.');

  const data: IWarrantyResponse = await response.json();
  console.log('Данные для гарантии успешно получены!');

  return data;
});
export const getPayments = cache(async () => {
  const response = await fetch(`${API_URL}/cms/api/payment?populate=*`, {
    headers,
    next: {
      revalidate: 3600, // кэшируем на 1 час
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке оплаты.');

  const data: IPaymentResponse = await response.json();
  console.log('Данные для оплаты успешно получены!');

  return data;
});

export const getNewsById = cache(async (id: string) => {
  const response = await fetch(
    `${API_URL}/cms/api/blogs/${id}?populate[cover][fields]=url&populate=*&populate[paragraph][populate]=paragraph`,
    {
      headers,
      next: {
        revalidate: 3600, // кэшируем на 1 час
      },
    }
  );

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error('Ошибка при загрузке новости.');
  }

  const data: IResponseItemWithDataMeta<IResponseData<INewsItem>> = await response.json();
  console.log('Новость успешно получена!');

  return data;
});
