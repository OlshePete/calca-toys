import { useBasketStore } from "@/store/basketStore";
import { Box, BoxProps, List, ListItem, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";
import BasketItem from "../BasketItem/BasketItem";
import { BasketSummaryWrapper } from "./BasketSummaryWrapper";

interface BasketSummaryProps extends BoxProps {
    children: React.ReactNode;
}

const BasketSummary: FC<BasketSummaryProps> = ({ children, ...props }) => {
    const { basket } = useBasketStore();
    const isMobile = useBreakpointValue({ base: true, md: false })

    const { totalPrice, totalDiscount, totalWithoutDiscount } = Object.values(basket.items).reduce(
        (acc, item) => {
            const product = item.product.attributes;
            const variants = Object.values(item.variant);

            variants.forEach(variant => {
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

    // Подсчёт общего количества товаров
    const count = Object.values(basket.items).reduce<number>((acc, item) => {
        const values = Object.values(item.variant).reduce<number>((acc, variant) => acc + variant.value, 0);
        return acc + values;
    }, 0);
    return (
        <Box
            boxShadow="md"
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            paddingTop={isMobile?'44px':"0"}
            {...props}
        >
            <BasketSummaryWrapper>
                {Object.keys(basket.items).length > 0 ? (
                    <List spacing={3} maxH={360} overflow={'hidden'} overflowY={'auto'} className="withScroll">
                        {Object.values(basket.items).map((item) => (
                            <React.Fragment key={item.id}>
                                {Object.values(item.variant).length > 0 && (
                                    <ListItem display={'flex'} flexDirection={'column'} gap={'24px'}>
                                        {Object.values(item.variant).map((variant, key) => (
                                            <BasketItem
                                                isConfirm={true}
                                                key={`basket product ${item.id} ${key}`}
                                                item={item}
                                                variant={variant}
                                            />
                                        ))}
                                    </ListItem>
                                )}
                            </React.Fragment>
                        ))}
                    </List>
                ) : (
                    <Text variant={'product_text_sub'}>
                        Здесь пока пусто, самое время найти что-то подходящее в {' '}
                        <Link href={'/catalog'}>Каталоге</Link>
                    </Text>
                )}
                    <VStack
                        w={isMobile?'100%':'400px'}
                        p={"36px 30px"}
                        position={'relative'}
                        right={2}
                        borderRadius={'14px'}
                        gap={'16px'}
                    >
                        <Box display={'flex'} w={'100%'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} pb={'16px'}>
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

                        <Box display={'flex'} w={'100%'} justifyContent={'space-between'} borderBottom={'1px solid #eee'} pb={'16px'}>
                            <Text fontWeight="bold">Итого:</Text>
                            <Text fontWeight="bold" fontSize="lg">{totalPrice.toFixed(2)} ₽</Text>
                        </Box>
                    </VStack>
            </BasketSummaryWrapper>
            {children}
        </Box>
    );
}

export default BasketSummary;