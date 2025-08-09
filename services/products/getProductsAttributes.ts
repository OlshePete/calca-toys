import { IProductsTypesContent } from '@apptypes/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getProductTypes = async () => {
  const response = await fetch(`${API_URL}/cms/api/types?populate[image]=*`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке списка типов товаров.');

  const data: IProductsTypesContent = await response.json();
  console.log('Список типов товаров успешно получен! Добавлено типов: ', data.data.length);

  return data;
};
export { getProductTypes };
