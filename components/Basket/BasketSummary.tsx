"use client"
import React from 'react';
import {Box, Button, Text} from "@chakra-ui/react";

type BasketSummaryProps = {
    quantity: any,
    price: any,
    discountPrice: any
}

const BasketSummary: React.FC<BasketSummaryProps> = ({quantity, price, discountPrice}) => {
    return (
        <Box style={{
            border: '1px solid #00000026',
            borderRadius: '8px',
            padding: '30px',
        }}>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <Text>Кол-во товара</Text>
                <Text>{quantity} шт.</Text>
            </Box>
            <hr/>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '20px',
                marginTop: '20px',
                alignItems: 'center',
            }}>
                <Text>Цена без скидки</Text>
                <Text>{price * quantity} Р</Text>
            </Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: '#F15B40',
                marginBottom: '20px',
                marginTop: '20px'
            }}>
                <Text color={'inherit'}>Скидка</Text>
                <Text color={'inherit'}>{(price - discountPrice) * quantity} Р</Text>
            </Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                marginTop: '20px'
            }}>
                <Text>Цена со скидкой</Text>
                <Text>{discountPrice * quantity} Р</Text>
            </Box>
            <hr/>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
                marginTop: '20px'
            }}>
                <Text>Итого</Text>
                <Text>{discountPrice * quantity} Р</Text>
            </Box>
            <hr/>
            <Button
                style={{
                    width: '100%',
                    backgroundColor: "#F49AA5",
                    marginTop: '30px',
                }}>
                Оформить заказ
            </Button>
        </Box>
    );
};

export default BasketSummary;