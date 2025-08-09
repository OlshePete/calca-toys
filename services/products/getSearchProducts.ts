import { IAllProductsContent } from '@apptypes/api';
import qs from 'qs';

interface ISearchParams {
  type?: string;
  tag?: {
    title?: string;
  };
  material?: string;
  color?: string;
  page?: string; 
  [key: string]: string | { title?: string } | undefined; 
}

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getSearchProducts = async (
  type: string,
  params: ISearchParams,
  categoryParamKeys: string[]
) => {
  // Формируем query-строку с параметрами фильтрации
  // console.log('$#$#$#', JSON.stringify({ params, type, categoryParamKeys } as unknown));
  // Получаем список параметров, которые есть в categoryParamKeys
  const categoryParams = Object.keys(params).filter((key) => {
    return categoryParamKeys.includes(key);
  });
  console.log('test6', params, type, categoryParamKeys);

  // Формируем фильтры
  const materialFilters = params?.material
    ? params.material.split(',').map((material) => material.trim())
    : [];
  const colorFilters = params?.color
      ? params.color.split(',').map((color) => color.trim().toUpperCase())
      : [];
  const tagFilters = categoryParams.map((param) => {
    const paramValues = params[param] 
      ? String(params[param]).split(',').map(v => v.trim())
      : [];
    return {
      tags: {
        category: {
          paramName: { $eq: param },
        },
        title: paramValues.length > 0 ? { $in: paramValues } : undefined,
      },
    };
  }).filter(filter => filter.tags.title !== undefined);

  const variantColorFilter = colorFilters.length > 0
    ? {
        variant: {
          color: { $in: colorFilters }
        }
      }
    : undefined;

  // Определяем текущую страницу и количество элементов на странице
  const page = params.page ? parseInt(params.page, 10) : 1;
  const pageSize = 15;

  const query = qs.stringify(
    {
      filters: {
        $and: [
          type ? { type: { internal: { $eq: type } } } : undefined,
          materialFilters.length > 0
            ? {
                materials: {
                  title: { $in: materialFilters },
                },
              }
            : undefined,
          ...tagFilters,
          variantColorFilter,
        ].filter(Boolean),
      },
      populate: {
        type: '*',
        variant: {
          populate: {
            image: {
              fields: ['url'],
            },
          },
        },
        materials: '*',
        tags: {
          populate: {
            category: '*',
          },
        },
        connected: {
          populate: {
            variant: {
              populate: {
                image: {
                  fields: ['*'],
                },
              },
            },
          },
        },
      },
      pagination: {
        page: page,
        pageSize: pageSize,
      },
    },
    {
      encodeValuesOnly: true, // Убирает лишние символы из query-строки
    }
  );

  console.log('test1', `${API_URL}/cms/api/tovars?${query}`);

  const response = await fetch(`${API_URL}/cms/api/tovars?${query}`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    console.log('error response', response);
    throw new Error('Ошибка при загрузке списка товаров.');
  }

  const data: IAllProductsContent = await response.json();
  console.log(
    'Поиск товаров успешно завершен! Найдено товаров: ',
    data?.data.length
  );

  return data;
};

export default getSearchProducts;
