"use client"
import React, {useState} from 'react';
import {Box, Button, Image, Text} from '@chakra-ui/react'
import {Product} from "@/types";
import {AddIcon, DeleteIcon, MinusIcon} from '@chakra-ui/icons'

const basketItem: Product = {
    id: 123123,
    type: 'balloon',
    name: 'Red baloon',
    price: 1000,
    discount_price: 800,
    height: 35,
    width: 25,
    previewComment: 'preview comment',
    mustHave: false,
    variants: [
        {
            image: 'https://i.etsystatic.com/19549347/r/il/0eae3c/1837539739/il_570xN.1837539739_ly99.jpg',
            value: 1,
            label: "red baloon",
            color: "red"
        }
    ],
    comment: 'comment on this product',
    productDescription: 'product description',
    productCharacteristic: 'product characteristic',
    stock: [
        {
            label: 'stock',
            color: 'red',
            inStock: 5
        }
    ],
    article: 'TP-213EW'
}

const BasketItem = () => {
    const [quantity, useQuantity] = useState(1)

    return (
        <Box style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '40px',
            marginBottom: '40px'
        }}>
            <Box>
                <Image
                    boxSize='178px'
                    objectFit='cover'
                    src={basketItem.variants[0].image}
                    alt='no image'
                />
            </Box>
            <Box style={{
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginLeft: '30px'
            }}>
                <Box>
                    <Text
                        fontSize={'14px'}
                        fontWeight={400}
                        lineHeight={'20px'}
                    >
                        Артикул: {basketItem.article}</Text>
                    <Text
                        fontSize={'16px'}
                        fontWeight={600}
                        lineHeight={'22px'}
                    >{basketItem.name}</Text>
                    <Text
                        fontSize={'14px'}
                        fontWeight={400}
                        lineHeight={'22px'}
                    >
                        Количество шаров: {basketItem.variants[0].value} шт
                    </Text>
                </Box>
                <Box
                    style={{
                        width: '100%',
                        height: '40px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Box
                        style={{
                            width: '126px',
                            border: '1px solid lightblue',
                            borderRadius: '20px',
                            height: '40px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <Button disabled={quantity === 1} variant={'text'} onClick={() => useQuantity(quantity - 1)}>
                            <MinusIcon/>
                        </Button>
                        <Box>
                            <Text
                                fontSize={'14px'}
                                fontWeight={500}
                                lineHeight={'16px'}
                            >
                                {quantity}
                            </Text>
                        </Box>
                        <Button variant={'text'} onClick={() => useQuantity(quantity + 1)}>
                            <AddIcon/>
                        </Button>
                    </Box>
                    <Button
                        variant={'text'}
                    >
                        <Text
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'22px'}
                            style={{
                                color: '#F49AA5',
                                textDecoration: 'underline',
                            }}>
                            Добавить грузик +
                        </Text>
                    </Button>
                </Box>
            </Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Text
                        fontSize={'18px'}
                        fontWeight={600}
                        lineHeight={'22px'}
                    >
                        {basketItem.discount_price} Р
                    </Text>
                    <Text
                        style={{
                            textDecoration: "line-through",
                            textDecorationColor: "red",
                            color: "#7B7B7B"
                        }}
                        fontSize={'16px'}
                        fontWeight={500}
                        lineHeight={'20px'}
                    >
                        {basketItem.price} Р
                    </Text>
                </Box>
                <Button style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%'
                }}>
                    <DeleteIcon/>
                </Button>
            </Box>
        </Box>
    )
        ;
};

export default BasketItem;