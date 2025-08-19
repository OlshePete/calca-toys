'use client';
import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { IAllProductsContent, IProduct, IResponseData } from '@apptypes/api';

// Тип для данных, которые возвращает parseProductsData
interface IProducts {
  products: IResponseData<IProduct>[];
}

// Создаем контекст
const ProductsContext = createContext<IProducts | null>(null);

// Провайдер для контекста
interface ProductsProviderProps {
  children: ReactNode;
  products: IAllProductsContent;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
  products: initialProducts,
}) => {
  const [products, setProducts] = useState(initialProducts.data);
  useEffect(()=>{console.log('rerendered 2')})
  const value = useMemo(() => {
    return {
      products,
      setProducts,
    };
  }, [products, setProducts]);
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

// Хук для использования контекста
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within an ProductsProvider');
  }
  return context;
};
