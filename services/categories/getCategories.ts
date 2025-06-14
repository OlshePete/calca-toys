import { IAllCategoryNames, TProductType } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getAllCategoryName = async () => {
    const response = await fetch(`${API_URL}/cms/api/categories?populate[icon][fields][0]=url&populate[tags]=*`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error("Ошибка при загрузке списка категорий.");
    
    const data:IAllCategoryNames = await response.json()
    console.log("Список категорий успешно получен! Добавлено категорий: ", data.data.length);
    
    return data;
  };
  const getCategoryNameByType = async (type:TProductType) => {
     const response = await fetch(`${API_URL}/cms/api/categories?filters[type][$eq]=${type}&populate[icon][fields][0]=url&populate[tags]=*`, {
         headers,
         next:{
             revalidate:60,
         }
     });
   
     if (!response.ok) throw new Error(`Ошибка при загрузке списка (${type}) категорий.`);
     
     const data:IAllCategoryNames = await response.json()
     console.log(`Список категорий (${type}) успешно получен! Добавлено категорий: `, data.data.length);
     
     return data;
   };
export { getAllCategoryName, getCategoryNameByType}