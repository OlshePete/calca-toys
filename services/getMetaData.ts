import { IWebMeta } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getStartPageMetaDate = async () => {
   console.log(API_TOKEN);
   
    const response = await fetch(`http://cms:1337/api/web-setting`, {
        headers,
        next:{
            revalidate:60,
        }
    });
    const response2 = await fetch(`http://cms:1337/cms/api/web-setting`, {
        headers,
        next:{
            revalidate:60,
        }
    });
    const response3 = await fetch(`http://cms:1337/cms/api/web-settings`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error(`Ошибка при загрузке мета информации. ${JSON.stringify({1:response.status, 2:response2.status,3:response3.status, })}`);
    
    const data:IWebMeta = await response.json()
    console.log("Мета информация успешно получена!", data);
    
    return data;
  };
export { getStartPageMetaDate }