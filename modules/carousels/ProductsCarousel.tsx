'use client';
import React from 'react';
import { ProductsCarouselProps } from '@apptypes';
import BaseCarousel from './BaseCarousel';

function ProductsCarousel({ label, products, ...props }: ProductsCarouselProps) {
  return (
    <BaseCarousel
      label={label}
      products={products}
      {...props}
    />
  )
}

export default ProductsCarousel;