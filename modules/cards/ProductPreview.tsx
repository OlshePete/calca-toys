'use client';
import { Box, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

// import { ColorPicker } from 'chakra-color-picker';
import { useRouter } from 'next/navigation';
import { ProductPreviewProps } from '@apptypes';
import { useBasketStore } from '@store/basketStore';
import { IBasketItem } from '@apptypes/basket';
import Text from '../../ui/Text/CustomText';
import Button from '../../ui/Buttons/CustomButton';
export function _getSizes(h?: number, w?: number): string {
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

function ProductPreview({ product }: ProductPreviewProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const id = product.id;
  const {
    name,
    price,
    height,
    width,
    mustHave,
    discount_price,
    previewComment,
    variant: variants,
  } = product.attributes;
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setItem } = useBasketStore();

  const router = useRouter();

  const handleColorChange = (value: string) => {
    setCurrentIndex((p) => variants.findIndex((v) => v.color === value.slice(1)));
  };

  const handleMoveToBasket: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    if (typeof window === 'undefined') return;
    const basketItem: Omit<IBasketItem, 'id'> = {
      product: product,
      variant: {
        [variants[currentIndex].id]: {
          id: variants[currentIndex].id,
          value: 1,
        },
      },
    };
    if (window) setItem(basketItem);
  };

  return (
    <Box
      className="product-sm"
      onClick={() => {
        router.push('/product/' + id);
      }}
      _hover={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(-4px)',
        borderColor: '#a0a0a0',
      }}
      style={{
        cursor: 'pointer',
        margin: 0,
        position: 'relative',
        width: '270px',
        display: 'flex',
        height: '464px',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '16px',
      }}
    >
      {variants && (
        <Image
          alt={name}
          src={`${API_URL}/cms` + variants[currentIndex].image.data.attributes.url}
          width={270}
          height={320}
          style={{
            borderRadius: '14px',
            objectFit: 'cover',
            minWidth: '270px',
            minHeight: '340px',
            maxWidth: '270px',
            maxHeight: '340px',
          }}
        />
      )}

      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4px',
        }}
      >
        <Text visual={'product_name'} maxH={'44px'} minH={'44px'}>
          {name} {variants && variants[currentIndex].name}
        </Text>

        {previewComment && <Text visual={'product_text_sub'}>{previewComment}</Text>}
        {!previewComment && (height || width) && (
          <Text visual={'product_text_sub'}>{_getSizes(height, width)}</Text>
        )}
        {
          price && (
            <Box display={'flex'} gap={'24px'} alignItems={'flex-end'}>
              {discount_price && <Text visual={'product_text'}>{discount_price} ₽</Text>}
              <Text visual={'product_text'} className={discount_price ? 'crossed' : ''}>
                {price} ₽
              </Text>
            </Box>
          )
          // : (
          //   <Text variant={"product_text"}>{price} ₽</Text>
          // )
        }
        <Button
          className="basket_icon"
          onClick={handleMoveToBasket}
          position={'absolute'}
          right={'4px'}
          bottom={'4px'}
        >
          <Image src="/basket.svg" alt="Basket icon" width={44} height={44} priority />
        </Button>
      </div>

      {mustHave && (
        <Image
          src="/mustHave.svg"
          alt="Must Have icon"
          width={44}
          height={44}
          priority
          style={{
            position: 'absolute',
            top: '16px',
            left: '17px',
          }}
        />
      )}
      {discount_price && (
        <>
          <Image
            src="/discount.svg"
            alt="Must Have icon"
            width={44}
            height={44}
            priority
            style={{
              position: 'absolute',
              top: '16px',
              left: mustHave ? `${44 + 17}px` : '17px',
            }}
          />
          <p
            style={{
              position: 'absolute',
              top: '29px',
              left: mustHave ? `${44 + 24}px` : '24px',
              fontSize: '12px',
              color: '#FFF',
              fontWeight: 500,
            }}
          >{`-${(((price - discount_price) / price) * 100).toFixed(0)}%`}</p>
        </>
      )}
      {variants && variants.map((v) => v.color).length > 1 && (
        <Box
          position={'absolute'}
          top={'22px'}
          right={'16px'}
          className="color_picker"
          onClick={(event) => {
            const target = event.currentTarget.children?.[0] as HTMLButtonElement;
            if (target && target !== event.target) target.click();
            event.stopPropagation();
          }}
        >
          {/* <ColorPicker onChange={handleColorChange} colors={variants.map((v) => '#' + v.color)} /> */}
          <Icon width="16px" height="7px" viewBox="0 0 16 7" fill={'none'}>
            <path d="M1 1L8 6L15 1" stroke="#313131" strokeLinecap="round" />
          </Icon>
        </Box>
      )}
    </Box>
  );
}

export default ProductPreview;
