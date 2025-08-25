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
  ISubscribeResponse,
} from '@apptypes/api';
import { cache } from 'react';


export const getContacts = cache(async () => {
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning empty contact data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: null, meta: undefined } as unknown as IContactsResponse;
  }
  
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
  
  const { NEXT_PUBLIC_API_URL:API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  console.log('API_URL not defined, returning empty news data for build', API_URL, JSON.stringify({env:process.env,api:API_URL}));
  if (!API_URL) {
    console.log('API_URL not defined, returning empty news data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: [] } as INewsResponse;
  }
  try {
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
  } catch (error) {
    console.warn('Не удалось получить новости (build-safe fallback). Причина:', API_URL, error);
    return { data: [] } as INewsResponse;
  }
});

export const getPrivacy = cache(async () => {
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning empty privacy data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: null, meta: undefined } as unknown as IPrivacyResponse;
  }
  
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
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning empty warranty data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: null, meta: undefined } as unknown as IWarrantyResponse;
  }
  
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
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning empty payment data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: null, meta: undefined } as unknown as IPaymentResponse;
  }
  
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
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return null during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning null for news by id during build', JSON.stringify({env:process.env,api:API_URL}));
    return null;
  }
  try {
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
  } catch (error) {
    console.warn(`Не удалось получить новость id=${id} (build-safe fallback). Причина:`, error);
    return null;
  }
});

export const getSubscribeData = cache(async () => {
  
  const { API_TOKEN, API_URL } = process.env;
  console.log('######____',JSON.stringify({env:API_TOKEN,api:API_URL}))
  const headers = {
    Authorization: `bearer ${API_TOKEN}`,
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
  };
  // Return empty data during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning empty subscribe data for build', JSON.stringify({env:process.env,api:API_URL}));
    return { data: null, meta: undefined } as unknown as ISubscribeResponse;
  }
  
  const response = await fetch(`${API_URL}/cms/api/subscribe?populate=*`, {
    headers,
    next: {
      revalidate: 3600, // кэшируем на 1 час
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке данных для блока подписки.');

  const data: ISubscribeResponse = await response.json();
  console.log('Данные для блока подписки получены!');

  return data;
});