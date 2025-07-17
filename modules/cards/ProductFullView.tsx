'use client';
import { ProductFullViewProps } from '@/types';
import { Badge, Box, Grid, GridItem, Text, HStack, VStack, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ProductInfoAccordion from '../accordions/ProductInfoAccordion';
import ProductsCarousel from '../carousels/ProductsCarousel';
import { useViewedStore } from '@/store/viewedStore';
import ProductFullViewForm from '../forms/ProductFullViewForm';
import AvailableInStock from '@components/AvailableInStock';
import { useBasketStore } from '@/store/basketStore';

function _getSizes(h?: number, w?: number): string {
  let str = '';
  if (h) {
    str = `${h}`;
    if (w) str += ` x ${w}`;
  } else {
    if (w) str = `${w}`;
  }
  if (str.length > 0) str += ' см';
  return str;
}

function ProductFullView({ product }: ProductFullViewProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const id = product.data.id;
  const {
    name,
    price,
    height,
    width,
    mustHave,
    discount_price,
    previewComment,
    variant: variants,
    comment,
    article,
    connected,
  } = product.data.attributes;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { viewed, addViewedItem } = useViewedStore();
  const { basket } = useBasketStore();
  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    lg: "repeat(2, 1fr)"
  })
  const colSpan = useBreakpointValue({
    base: 2,
    lg: 1
  })
  const inBasket =
    Object.values(basket.items).find(
      (item) =>
        item.product.id === id &&
        Object.values(item.variant)
          .map((variant) => variant.id)
          .includes(currentIndex)
    )?.variant[currentIndex].value ?? 0;
  const stock = variants[currentIndex].stock - inBasket;

  useEffect(() => {
    if (product) addViewedItem(product);
  }, [product]);

  return (
    <div style={{ paddingTop: '44px' }}>
      <Text fontSize={14} fontWeight={400} lineHeight={'22px'}>
        Артикул: {article}
      </Text>
      <Grid templateColumns={templateColumns} h={'auto'} gap={6} >
        <GridItem w="100%" colSpan={colSpan}>
          <Box position="relative" width="100%" height="703px" borderRadius="14px" overflow="hidden">
            <Image
              alt={name}
              src={`${API_URL}/cms` + variants[currentIndex].image.data.attributes.url}
              fill
              sizes="(max-width: 768px) 100%, 600px"
              style={{
                objectFit: 'cover',
              }}
            />
          </Box>
        </GridItem>
        <GridItem w="100%" minH="703" display={'flex'} flexDirection={'column'} gap={'20px'}>
          <HStack gap={'8px'}>
            {mustHave && <Badge>Хит продаж</Badge>}
            {discount_price && (
              <Badge variant={'discount'}>
                {`-${(((price - discount_price) / price) * 100).toFixed(0)}%`}
              </Badge>
            )}
          </HStack>
          <VStack align={'flex-start'}>
            <Text variant={'full_product_name'}>
              {name} {variants && variants[currentIndex].name}
            </Text>
            {previewComment && (
              <Text variant={'full_product_text'} color={'#515151'}>
                {previewComment}
              </Text>
            )}

            {(height || width) && (
              <Text variant={'full_product_text'} color={'#515151'}>
                Размер: {_getSizes(height, width)}
              </Text>
            )}
          </VStack>

          {!discount_price ? (
            <Text variant={'product_text'}>{price} ₽</Text>
          ) : (
            <Box display={'flex'} gap={'24px'}>
              <Text variant={'product_text'}>{discount_price} ₽</Text>
              <Text variant={'product_text'} className="crossed">
                {discount_price} ₽
              </Text>
            </Box>
          )}
          <HStack gap={'24px'}>
            {variants &&
              variants.map(({ image, name, color }, index) => {
                return (
                  <Image
                    key={name + index + '-' + id}
                    alt={name}
                    src={`${API_URL}/cms` + image.data.attributes.url}
                    width={100}
                    height={130}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      transition: 'all .2s ease',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      objectFit: 'cover',
                      width: '100px',
                      height: '130px',
                      border: currentIndex === index ? '3px solid #71BBFF' : 'none',
                    }}
                  />
                );
              })}
          </HStack>
          <ProductFullViewForm
            max={stock}
            item={product.data}
            currentVariant={variants[currentIndex]}
          />
          <AvailableInStock stock={stock} />
          <Text variant={'full_product_text'}>{comment}</Text>
          <ProductInfoAccordion product={product} />
        </GridItem>

        {connected && connected.data.length > 0 && (
          <GridItem colSpan={2} w="100%" minH="560" paddingTop="110px">
            <ProductsCarousel
              label="С этим товаром покупают"
              products={connected.data}
              dinamicMarginLeft={false}
            />
          </GridItem>
        )}
        {viewed.length > 0 && (
          <GridItem colSpan={2} w="100%" minH="560" paddingTop="110px">
            <ProductsCarousel
              label="Недавно просмотренные"
              products={viewed.map((item) => item.data)}
              dinamicMarginLeft={false}
            />
          </GridItem>
        )}
      </Grid>
    </div>
  );
}

export default ProductFullView;
