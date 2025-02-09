import { IAllProductsContent, IProductByIdContent } from "@/types/api";

const { API_TOKEN, API_URL } = process.env
const headers = {
  Authorization:
    `bearer ${API_TOKEN}`,
}

 const getAllProducts = async () => {
    const response = await fetch(`${API_URL}/api/tovars?populate[variant][populate][image][fields]`, {
        headers,
        next:{
            revalidate:60,
        }
    });
  
    if (!response.ok) throw new Error("Ошибка при загрузке списка товаров.");
    
    const data:IAllProductsContent = await response.json()
    console.log("Список товаров успешно получен!", JSON.stringify(data,null,2));
    
    return data;
  };
  const getProductById = async (id:number|string) => {
     const response = await fetch(`${API_URL}/api/tovars/${id}?populate[variant][populate][image][fields]`, {
         headers,
         next:{
             revalidate:60,
         }
     });
   
     if (!response.ok) throw new Error("Ошибка при загрузке списка товаров.");
     
     const data:IProductByIdContent = await response.json()
     console.log("Список товаров успешно получен!", JSON.stringify(data,null,2));
     
     return data;
   };
export { getAllProducts, getProductById }