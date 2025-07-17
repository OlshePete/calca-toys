'use client';
import { HStack, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
const AvailableInStock: FC<{ stock: number }> = ({ stock }) => {
  return (
    <HStack gap={'12px'} alignItems={'center'}>
      {stock > 0 && (
        <Image
          src="/check.svg"
          alt="Product avaliable in stock"
          bg={'#27AE60'}
          borderRadius={'100%'}
          p={'2px'}
        />
      )}
      <Text fontSize={'14px'}>
        {stock > 0 ? `Есть в наличии (на складе: ${stock})` : 'Товар закончился'}
      </Text>
    </HStack>
  );
};

export default AvailableInStock;
