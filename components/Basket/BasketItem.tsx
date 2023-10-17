"use client"
import React from 'react';
import {
    Box,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/react'

const basketItem = {
    _id: '8768ASD',
    art: '62-HFT',
    title: 'Item',
    subTitle: 'Subtitle with much letters',
    price: 6000,
    quantity: 1,
    image: 'https://i.etsystatic.com/19549347/r/il/0eae3c/1837539739/il_570xN.1837539739_ly99.jpg'
}

const BasketItem = () => {
    return (
        <Box>
            <Image
                boxSize='178px'
                objectFit='cover'
                src={basketItem.image}
                alt='no image'
            />
            <Box>
                <Text>(6xl) In love with React & Next</Text>
                <Text>(6xl) In love with React & Next</Text>
                <Text>(6xl) In love with React & Next</Text>
                <NumberInput size='sm' defaultValue={15} min={10}>
                    <NumberInputField/>
                    <NumberInputStepper>
                        <NumberIncrementStepper
                            bg='green.200'
                            _active={{ bg: 'green.300' }}
                            children='+'
                        />
                        <NumberDecrementStepper
                            bg='pink.200'
                            _active={{ bg: 'pink.300' }}
                            children='-'
                        />
                    </NumberInputStepper>
                </NumberInput>
            </Box>
        </Box>
    );
};

export default BasketItem;