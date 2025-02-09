import { IMainCarouselContent, IStartPageContent } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getMainCarouselContent = async () => {
    const response = await fetch(`${API_URL}/api/main-carousels?populate=*`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error("Ошибка при загрузке контента для стартовой блока.");
    
    const data:IMainCarouselContent = await response.json()
    console.log("Контент для стартовой страницы успешно получен!", data.data.length);
    
    return data;
  };
export { getMainCarouselContent }