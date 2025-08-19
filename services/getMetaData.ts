import { IWebMeta } from '@apptypes/api';

const { API_TOKEN, API_URL } = process.env;
const headers = {
  Authorization: `bearer ${API_TOKEN}`,
};

const getStartPageMetaDate = async () => {
  // Return null during build if API_URL is not defined
  if (!API_URL) {
    console.log('API_URL not defined, returning null for metadata during build');
    return null;
  }

  const response = await fetch(`${API_URL}/cms/api/web-setting`, {
    headers,
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    console.log(`Ошибка при загрузке мета информации. ${JSON.stringify({ 1: response.status })}`);
    return null;
  }

  const data: IWebMeta = await response.json();
  console.log('Мета информация успешно получена!');

  return data;
};
export { getStartPageMetaDate };
