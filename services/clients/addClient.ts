import { IAllClients, IClient, IClientResponse } from '@/types/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

const addClient = async (client: IClient) => {
  console.log(JSON.stringify({ text: '3', client, headers, API_URL }));
  const response = await fetch(`${API_URL}/cms/api/clients`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      data: client,
    }),
    next: {
      revalidate: 60,
    },
  });

  console.log('test test111 ', response);
  if (!response.ok) {
    console.log(JSON.stringify({ text: '4', response }));

    throw new Error('Ошибка при добавлении клиента.');
  }

  const data: IClientResponse = await response.json();
  console.log('Клиент успешно добавлен!', data.data);

  return data;
};

export { addClient };
