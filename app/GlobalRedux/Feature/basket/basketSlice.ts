'use client';

import { Basket, BasketItem, OneVariantBasketItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Basket = {
  items: [],
  customer: null
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasketItem: (state, action) => {
      const newItem: OneVariantBasketItem = action?.payload
      const prev = state.items.find(i => i.product.id === newItem.product.id)
      if (newItem) {
        if (prev) {
          const alreadyHasThatVariant = prev.variants.find(v => v.label === newItem.variant.label)
          const newVariants = alreadyHasThatVariant ? prev.variants.map(v => {
            if (v.label === newItem.variant.label) return {
              ...v,
              value: v.value + newItem.variant.value
            }
            return v
          }) : [...prev.variants, newItem.variant]
          state.items = state.items
            .map((el) => {
              if (el.product.id === newItem.product.id) {
                return {
                  ...el,
                  variants: [...newVariants]
                }
              }
              return el
            })
        } else {
          state.items = [...state.items, {
            ...newItem,
            variants: [newItem.variant]
          }]
        }
      }

    },
    clearBasket: (state) => { state = initialState }
  }
})

export const { addBasketItem, clearBasket } = basketSlice.actions;

export default basketSlice.reducer;