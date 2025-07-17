import { IAllClients, IClientResponse } from '@/types/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getAllClients = async () => {
  const response = await fetch(`${API_URL}/cms/api/clients?populate=*`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке списка клиентов.');

  const data: IAllClients = await response.json();
  console.log('Список клиентов успешно получен!', data.data);

  return data;
};
const getClientById = async (id: string) => {
  const response = await fetch(`${API_URL}/cms/api/clients/${id.trim()}?populate=*`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Ошибка при загрузке списка клиентов.');

  const data: IClientResponse = await response.json();
  console.log(`Данные клиента ${id} успешно получены!`);

  return data;
};
export { getAllClients, getClientById };
