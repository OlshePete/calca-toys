import ProductPreview from '@modules/cards/ProductPreview';
import { IProduct, IResponseData, TSortProdcutVariant } from '@apptypes/api';
import { Box, HTMLChakraProps } from '@chakra-ui/react';
import { FC, useEffect, useMemo, useState } from 'react';
interface IProps extends HTMLChakraProps<'div'> {
  products: IResponseData<IProduct>[];
  sortValue: TSortProdcutVariant;
  params: Record<string, string[]> | null
}
const SORT_HANDLER_MAP:Record<TSortProdcutVariant,(a:number,b:number)=>number> = {
  'price_inc':(a,b)=>a-b,
  'price_dec':(a,b)=>b-a,
}
function sortProduct(products:IResponseData<IProduct>[], sortValue:TSortProdcutVariant):IResponseData<IProduct>[] {
  return products.sort((a,b)=>{
    const priceA = a.attributes.price
    const priceB = b.attributes.price
    return SORT_HANDLER_MAP[sortValue](priceA,priceB)
  })
}
const ContentItems: FC<IProps> = ({ products, sortValue, params, ...props }) => {
  const [value, setValue] = useState<TSortProdcutVariant>(sortValue)
  const sortedProducts = sortProduct(products, value)
  const hasParams = useMemo(()=>{
    console.log('пересчет', params, params && Object.values(params).every(({length})=>length===0))
    return params && Object.values(params).some(({length})=>length>0)
  },[params, sortedProducts])

  useEffect(()=>{
    if(value!==sortValue) setValue(sortValue)
  },[sortValue])
0
  return (
    <Box {...props}>
      {products &&
        sortedProducts.map((product) => {
          return (
            <ProductPreview
              key={product.id + 'content item' + product.attributes.name}
              product={product}
            />
          );
        })}

        {
          sortedProducts.length === 0 && <Box w={'100%'} h={'420px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {
            hasParams ?
            'По заданным условиям товаров не найдено! Сбрость фильтры?' :
            'К сожалению, в выбранной категории товаров пока нет'
          }
            
          </Box >
        }
    </Box>
  );
};
export default ContentItems;
