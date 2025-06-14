import { IAllProductsContent } from '@/types/api';
import * as qs from 'qs';

interface ISearchParams {
    type?: string;
    tag?: {
        title?: string;
    };
    material?: string;
    page?: string; // Параметр страницы
    [key: string]: string | { title?: string } | undefined; // Динамические параметры
}

const { API_TOKEN, API_URL } = process.env;
const headers = {
    Authorization: `bearer ${API_TOKEN}`,
};

const getSearchProducts = async (type: string, params: ISearchParams, categoryParamKeys: string[]) => {
    // Формируем query-строку с параметрами фильтрации
    console.log("$#$#$#", JSON.stringify({params,type, categoryParamKeys} as unknown));
    // Получаем список параметров, которые есть в categoryParamKeys
    const categoryParams = Object.keys(params).filter((key) => {
        return categoryParamKeys.includes(key);
    });
    console.log('test6', params?.material);

    // Разделяем строку materials на массив
    const materialFilters = params?.material
        ? params.material.split(',').map((material) => material.trim())
        : [];

    // Формируем фильтры для tags
    const tagFilters = categoryParams.map((param) => {
        return {
            tags: {
                category: {
                    paramName: { $eq: param }, // Проверяем, что paramName совпадает
                },
                title: { $eq: params[param] }, // Сравниваем title с значением из params
            },
        };
    });

    // Определяем текущую страницу и количество элементов на странице
    const page = params.page ? parseInt(params.page, 10) : 1; // По умолчанию страница 1
    const pageSize = 15; // Офсет (количество элементов на странице)

    const query = qs.stringify(
        {
            filters: {
                $and: [
                    type ? { type: { internal: { $eq: type } } } : undefined, // Фильтр по типу
                    materialFilters.length > 0
                        ? {
                              materials: {
                                  title: { $in: materialFilters }, // Фильтр по материалам с использованием $in
                              },
                          }
                        : undefined,
                    ...tagFilters, // Добавляем фильтры для tags
                ].filter(Boolean), // Убираем undefined
            },
            populate: {
                type: '*',
                variant: {
                    populate: {
                        image: {
                            fields: ['url'], // Указываем поля, которые нужно получить
                        },
                    },
                },
                materials: '*',
                tags: {
                    populate: {
                        category: '*', // Включаем поле category внутри каждого tag
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
                page: page, // Текущая страница
                pageSize: pageSize, // Количество элементов на странице
            },
        },
        {
            encodeValuesOnly: true, // Убирает лишние символы из query-строки
        }
    );

    console.log("test1", `${API_URL}/cms/api/tovars?${query}`);

    const response = await fetch(`${API_URL}/cms/api/tovars?${query}`, {
        headers,
        next: {
            revalidate: 60,
        },
    });

    if (!response.ok) {
        console.log('error response',response)
        throw new Error("Ошибка при загрузке списка товаров.")
    };

    const data: IAllProductsContent = await response.json();
    console.log(
        "Поиск товаров успешно завершен! Найдено товаров: получен! 99999",
        JSON.stringify(data?.data[0],null,4)
    );

    return data;
};

export default getSearchProducts;