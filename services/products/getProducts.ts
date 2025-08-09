import { IAllProductsContent, IProductByIdContent } from '@apptypes/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getAllProducts = async () => {
  const response = await fetch(
    `${API_URL}/cms/api/tovars?populate[variant][populate][image][fields]&populate[tags][populate][category]=*&populate[connected][populate][variant][populate][image][fields]=*&populate[materials][populate]=*&populate[type]=*`,
    {
      headers,
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) throw new Error('Ошибка при загрузке списка товаров.');

  const data: IAllProductsContent = await response.json();
  console.log('Список товаров успешно получен! Добавлено товаров: ', data.data.length);

  return data;
};
const getProductById = async (id: number | string) => {
  const response = await fetch(
    `${API_URL}/cms/api/tovars/${id}?populate[variant][populate][image][fields]&populate[tags][populate][category]=*&populate[connected][populate][variant][populate][image][fields]=*&populate[type]=*`,
    {
      headers,
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) throw new Error('Ошибка при загрузке списка товаров.');

  const data: IProductByIdContent = await response.json();
  console.log('Список товаров успешно получен!', JSON.stringify(data, null, 2));

  return data;
};
export { getAllProducts, getProductById };
