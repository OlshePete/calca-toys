import { create } from 'zustand';
import { IProductByIdContent } from '@/types/api';
interface IViewedItem extends IProductByIdContent {}
interface IViewedState {
  viewed: IViewedItem[];
  addViewedItem: (item: IViewedItem) => void;
  removeById: (id: number) => void;
  clearAll: () => void;
}

export const useViewedStore = create<IViewedState>((set) => ({
  viewed: [],
  addViewedItem: (item) => {
    if (typeof window === 'undefined') return;
    set((state) => {
      const isInState = state.viewed.find((i) => i.data.id === item.data.id);

      const newState: typeof state = {
        ...state,
        viewed: isInState ? state.viewed : [...state.viewed, item],
      };

      return newState;
    });
  },

  removeById: (id) => {
    if (typeof window === 'undefined') return;

    set((state) => ({
      viewed: state.viewed.filter((item) => item.data.id === id),
    }));
  },
  clearAll: () => {
    if (typeof window === 'undefined') return;
    set({ viewed: [] });
  },
}));
