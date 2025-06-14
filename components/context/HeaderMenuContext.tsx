'use client'
import React, { createContext, useContext, ReactNode, useMemo, useState, useEffect, useRef } from 'react';

interface IHeaderMenu {
    activeCategory: string | null;
    setActiveCategory: (category: string | null) => void;
}

const HeaderMenuContext = createContext<IHeaderMenu | null>(null);

interface HeaderMenuProviderProps {
    children: ReactNode;
    initialCategory?: string;
}

export const HeaderMenuProvider: React.FC<HeaderMenuProviderProps> = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const isFirstRender = useRef(true);
    const handleSetActiveCategory = (category: string | null) => {
        if (typeof window !== 'undefined') {
            setActiveCategory(category)
        }
    }
    useEffect(()=>{
      if (!isFirstRender.current) {
      }
      isFirstRender.current = false;
    }, [activeCategory]);

    const availableSettings = useMemo(() =>({
        activeCategory,
        setActiveCategory: handleSetActiveCategory
    }), [activeCategory, setActiveCategory]);

  return (
    <HeaderMenuContext.Provider value={availableSettings}>
      {children}
    </HeaderMenuContext.Provider>
  );
};

// Хук для использования контекста
export const useHeaderMenu = () => {
  const context = useContext(HeaderMenuContext);
  if (!context) {
    throw new Error('useHeaderMenu must be used within an HeaderMenuProvider');
  }
  return context;
};