'use client';

import { BasketItem, Product, Viewed } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Viewed = {
  items: []
}

export const viewedSlice = createSlice({
  name: 'viewed',
  initialState,
  reducers: {
    addViewedItem: (state, action) => {
      const newItem: Product = action?.payload
      const filtered = state.items.filter(i => i.id !== newItem.id)
      state.items = [newItem, ...filtered]
    },
    addViewedItems: (state, action) => {
      const newItem: Product[] = action?.payload
      state.items = [...newItem]
    },
    clearViewed: (state) => { state = initialState }
  }
})

export const { addViewedItem, addViewedItems, clearViewed } = viewedSlice.actions;

export default viewedSlice.reducer;