import { IStartPageContent } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getStartPageContent = async () => {
    const response = await fetch(`${API_URL}/api/web-content-start?populate=*`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error("Ошибка при загрузке контента для стартовой страницы.");
    
    const data:IStartPageContent = await response.json()
    console.log("Контент для стартовой страницы успешно получен!", data);
    
    return data;
  };
export { getStartPageContent }