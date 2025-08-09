'use client';
import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import BasketItem from '../BasketItem/BasketItem';
import Link from 'next/link';
import ProductsCarousel from '@modules/carousels/ProductsCarousel';
import { IProduct, IResponseData } from '@apptypes/api';
import { useBasketStore } from '@store/basketStore';
import Heading from '../../ui/Heading/CustomHeading';
import Button from '../../ui/Buttons/CustomButton';
import Text from '../../ui/Text/CustomText';


interface IBasketContentProps {}

const BasketContent: FC<IBasketContentProps> = ({}) => {
  const { basket } = useBasketStore();
  const itemsColSpan = useBreakpointValue({ base: 12, sm: 12, md: 12, xl: 7 });
  const summaryWidth = useBreakpointValue({ base: '100%', sm: '100%', md: '100%', xl: '400px' });
  const summaryColStart = useBreakpointValue({ base: 1, sm: 1, md: 1, xl: 9 });
  const summaryColSpan = useBreakpointValue({ base: 12, sm: 12, md: 12, xl: 5 });
  // const itemContainerPadding = useBreakpointValue({ base: 6, sm:6, md: 0, xl: 0 })

  // Подсчёт общего количества товаров
  const count = Object.values(basket.items).reduce<number>((acc, item) => {
    const values = Object.values(item.variant).reduce<number>(
      (acc, variant) => acc + variant.value,
      0
    );
    return acc + values;
  }, 0);

  // Расчёт общей стоимости
  const { totalPrice, totalDiscount, totalWithoutDiscount } = Object.values(basket.items).reduce(
    (acc, item) => {
      const product = item.product.attributes;
      const variants = Object.values(item.variant);

      variants.forEach((variant) => {
        const quantity = variant.value;
        const price = product.discount_price || product.price;
        const originalPrice = product.price;

        acc.totalWithoutDiscount += originalPrice * quantity;
        acc.totalPrice += price * quantity;
        acc.totalDiscount += (originalPrice - price) * quantity;
      });

      return acc;
    },
    { totalPrice: 0, totalDiscount: 0, totalWithoutDiscount: 0 }
  );
  const connectedProducts = Object.values(basket.items).reduce<IResponseData<IProduct>[]>(
    (acc, item) => {
      const connected = item.product.attributes.connected?.data ?? [];
      acc.push(...connected);
      return acc;
    },
    []
  );
  return (
    <>
      <Heading visual={'post_header'} mb={'40px'} pt={'60px'}>
        Корзина{count > 0 && ` (${count})`}
      </Heading>

      <Grid templateColumns="repeat(12, 1fr)" gap={'0px'}>
        <GridItem minH={'530px'} colSpan={itemsColSpan}>
          {Object.keys(basket.items).length > 0 ? (
            <List.Root>
              {Object.values(basket.items).map((item) => (
                <React.Fragment key={item.id}>
                  {Object.values(item.variant).length > 0 && (
                    <List.Item display={'flex'} flexDirection={'column'} gap={'24px'}>
                      {Object.values(item.variant).map((variant, key) => (
                        <BasketItem
                          key={`basket product ${item.id} ${key}`}
                          item={item}
                          variant={variant}
                        />
                      ))}
                    </List.Item>
                  )}
                </React.Fragment>
              ))}
            </List.Root>
          ) : (
            <Text visual={'product_text_sub'}>
              Здесь пока пусто, самое время найти что-то подходящее в{' '}
              <Link href={'/catalog'}>Каталоге</Link>
            </Text>
          )}
        </GridItem>

        <GridItem
          w={summaryWidth}
          minH={'530px'}
          colStart={summaryColStart}
          colSpan={summaryColSpan}
          colEnd={13}
        >
          <VStack
            w={summaryWidth}
            p={'36px 30px'}
            position={'relative'}
            right={2}
            borderRadius={'14px'}
            gap={'16px'}
            boxShadow="md"
          >
            <Box
              display={'flex'}
              w={'100%'}
              justifyContent={'space-between'}
              borderBottom={'1px solid #eee'}
              pb={'16px'}
            >
              <Text>Кол-во товара</Text>
              <Text fontWeight="bold">{count} шт.</Text>
            </Box>

            <VStack w={'100%'} borderBottom={'1px solid #eee'} gap={'16px'} pb={'16px'}>
              <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
                <Text>Цена без скидки</Text>
                <Text>{totalWithoutDiscount.toFixed(2)} ₽</Text>
              </Box>

              <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
                <Text>Скидка</Text>
                <Text color="red.500">-{totalDiscount.toFixed(2)} ₽</Text>
              </Box>

              <Box display={'flex'} w={'100%'} justifyContent={'space-between'}>
                <Text>Цена со скидкой</Text>
                <Text fontWeight="bold">{totalPrice.toFixed(2)} ₽</Text>
              </Box>
            </VStack>

            <Box
              display={'flex'}
              w={'100%'}
              justifyContent={'space-between'}
              borderBottom={'1px solid #eee'}
              pb={'16px'}
            >
              <Text fontWeight="bold">Итого:</Text>
              <Text fontWeight="bold" fontSize="lg">
                {totalPrice.toFixed(2)} ₽
              </Text>
            </Box>
            <Link
              href={'/basket/confirm'}
              style={{
                width: '100%',
              }}
            >
              <Button
                visual={'outline_secondary'}
                width={'100%'}
                fontWeight={300}
                fontSize={'14px'}
                height={'55px'}
              >
                оформить заказ
              </Button>
            </Link>
          </VStack>
        </GridItem>
      </Grid>
      {connectedProducts.length > 0 && (
        <ProductsCarousel
          label="С этим товаром покупают"
          products={connectedProducts}
          withButton={false}
          mt={'44px'}
        />
      )}
    </>
  );
};

export default BasketContent;
