import { IWebMeta } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getStartPageMetaDate = async () => {
    console.log('API_TOKEN',API_TOKEN);
    console.log('API_URL',API_URL);
    
    const response = await fetch(`${API_URL}/api/web-setting`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) {
      console.log(`Ошибка при загрузке мета информации. ${JSON.stringify({1:response.status})}`);
      return null
    }
    
    const data:IWebMeta = await response.json()
    console.log("Мета информация успешно получена!", data);
    
    return data;
  };
export { getStartPageMetaDate }