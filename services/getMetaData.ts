import { IWebMeta } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getStartPageMetaDate = async () => {
    const response = await fetch(`http://cms:1337/api/web-setting`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error(`Ошибка при загрузке мета информации. ${JSON.stringify(response)}`);
    
    const data:IWebMeta = await response.json()
    console.log("Мета информация успешно получена!", data);
    
    return data;
  };
export { getStartPageMetaDate }