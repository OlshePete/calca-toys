import { IOrder, IOrderResponse } from '@/types/api';
import { IOrderData } from '@/types/order';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

const addOrder = async (orderData: IOrderData): Promise<IOrderResponse> => {
  const response = await fetch(`${API_URL}/cms/api/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      data: orderData,
    }),
  });

  if (!response.ok) {
    throw new Error('Ошибка при создании заказа.');
  }

  const data: IOrderResponse = await response.json();
  console.log('Заказ успешно создан!', JSON.stringify(data, null, 2));

  return data;
};

export { addOrder };
