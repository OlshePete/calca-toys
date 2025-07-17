import { IAllServicesContent, ISearchedServicesContent, IServiceByIdContent } from '@/types/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getAllServices = async () => {
  const response = await fetch(`${API_URL}/cms/api/services?populate=*`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке списка услуг.');

  const data: IAllServicesContent = await response.json();
  console.log('Список услуг успешно получен! Добавлено услуг: ', data.data.length);

  return data;
};
const getServiceById = async (id: number | string) => {
  const response = await fetch(`${API_URL}/cms/api/services/${id}?populate=*`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error(`Ошибка при загрузке услуги. ${id}`);

  const data: IServiceByIdContent = await response.json();
  console.log('Товар успешно получен!', JSON.stringify(data, null, 2));

  return data;
};
const getServiceByIternal = async (internal: string) => {
  const response = await fetch(
    `${API_URL}/cms/api/services?populate[variants][populate][image][fields]=*&filters[internal][$eq]=${internal}&populate[image]=*`,
    {
      headers,
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) throw new Error(`Ошибка при загрузке услуги. ${await internal}`);

  const data: ISearchedServicesContent = await response.json();
  console.log('getServiceByIternal Товар успешно получен!', JSON.stringify(data, null, 2));

  return data;
};
export { getAllServices, getServiceById, getServiceByIternal };
