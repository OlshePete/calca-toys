'use client'
import React, { createContext, useContext, ReactNode, useMemo } from 'react';
import { IAllProductsContent } from '@/types/api';

// Тип для данных, которые возвращает parseProductsData
interface IAvailableSettings {
  colors: string[];
  tags: Record<string, string[]>;
}

// Создаем контекст
const AvailableSettingsContext = createContext<IAvailableSettings | null>(null);

// Провайдер для контекста
interface AvailableSettingsProviderProps {
  children: ReactNode;
  products: IAllProductsContent;
}

export const AvailableSettingsProvider: React.FC<AvailableSettingsProviderProps> = ({ children, products }) => {
  // Функция parseProductsData
  const parseProductsData = (data: IAllProductsContent): IAvailableSettings => {
    const colorsSet = new Set<string>();
    const tagsSet = new Set<string>();

    data.data.forEach((product) => {
      product.attributes.variant.forEach((variant) => {
        if (variant.color) {
          colorsSet.add(variant.color);
        }
      });

      product.attributes.tags.data.forEach((tag) => {
        console.log('test provider 0',`${tag.attributes.category.data.attributes.paramName}#${tag.attributes.title}`);
        
        tagsSet.add(`${tag.attributes.category.data.attributes.paramName}#${tag.attributes.title}`);
      });
    });

    return {
      colors: Array.from(colorsSet),
      tags: Array.from(tagsSet).reduce<Record<string, string[]>>((acc, tag) => {
        const [group, value] = tag.split('#');
        if(!acc[group]) acc[group] = [value];
          else acc[group].push(value)
        console.log('test provider 1',acc);

        return acc;
      }, {}),
    };
  };

  // Вычисляем availableSettings
  const availableSettings = useMemo(() => parseProductsData(products), [products]);

  return (
    <AvailableSettingsContext.Provider value={availableSettings}>
      {children}
    </AvailableSettingsContext.Provider>
  );
};

// Хук для использования контекста
export const useAvailableSettings = () => {
  const context = useContext(AvailableSettingsContext);
  if (!context) {
    throw new Error('useAvailableSettings must be used within an AvailableSettingsProvider');
  }
  return context;
};