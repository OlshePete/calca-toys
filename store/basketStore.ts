import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IBasket, IBasketCustomer, IBasketItem, IProductBasketVariant } from '@/types/basket';

interface BasketState {
  basket: IBasket;
  setItem: (item: Omit<IBasketItem, 'id'>) => void;
  removeById: (id: string) => void;
  clearAll: () => void;
  setCustomer: (customer: IBasketCustomer) => void;
  updateCountById: (id: string, variant: IProductBasketVariant) => void;
  // Добавим хелпер для проверки наличия товара
  hasItem: (id: string) => boolean;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set, get) => ({
      basket: { items: {}, customer: null },

      setItem: (item) => {
        const itemId = item.product.id;
        let value = item.variant[Object.keys(item.variant)[0]].value;

        if (value > 0) {
          set((state) => {
            const updatedBasket: IBasket = { ...state.basket };

            if (!updatedBasket.items[itemId]) {
              updatedBasket.items[itemId] = { id: String(itemId), ...item };
            } else {
              Object.keys(item.variant).forEach((key) => {
                const variant = item.variant[key];
                if (!updatedBasket.items[itemId].variant[variant.id]) {
                  updatedBasket.items[itemId].variant[variant.id] = variant;
                } else {
                  updatedBasket.items[itemId].variant[variant.id].value += variant.value;
                }
              });
            }

            value = value - 1;
            return { basket: updatedBasket };
          });
        }
      },

      updateCountById: (id, variant) => {
        set((state) => {
          if (!state.basket.items[id] || !state.basket.items[id].variant[variant.id]) return state;

          const newBasket: IBasket = { ...state.basket };
          newBasket.items[id].variant[variant.id].value += variant.value;

          // Удаляем вариант, если количество стало 0 или меньше
          if (newBasket.items[id].variant[variant.id].value <= 0) {
            delete newBasket.items[id].variant[variant.id];

            // Если у товара не осталось вариантов, удаляем товар полностью
            if (Object.keys(newBasket.items[id].variant).length === 0) {
              delete newBasket.items[id];
            }
          }

          return { basket: newBasket };
        });
      },

      removeById: (id) => {
        set((state) => ({
          basket: {
            ...state.basket,
            items: Object.keys(state.basket.items).reduce<Record<string, IBasketItem>>(
              (acc, key) => {
                const item = state.basket.items[key];
                if (item.id !== id) acc[item.id] = item;
                return acc;
              },
              {}
            ),
          },
        }));
      },

      clearAll: () => {
        set({ basket: { items: {}, customer: null } });
      },

      setCustomer: (customer) => {
        set((state) => ({
          basket: {
            ...state.basket,
            customer,
          },
        }));
      },

      // Хелпер для проверки наличия товара в корзине
      hasItem: (id) => {
        return !!get().basket.items[id];
      },
    }),
    {
      name: 'basket-storage', // уникальное имя для localStorage
      storage: createJSONStorage(() => localStorage),
      // Опционально: можно добавить миграции, если структура хранилища изменится
      // migrate: (persistedState, version) => { ... }
    }
  )
);

// Хелпер для работы с SSR
export const initializeBasket = () => {
  if (typeof window !== 'undefined') {
    useBasketStore.persist.rehydrate();
  }
};
