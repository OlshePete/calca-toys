'use client';
import { Box, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Text from '../../../ui/Text/CustomText';
import Heading from '../../../ui/Heading/CustomHeading';
import Button from '../../../ui/Buttons/CustomButton';
function ListPosterContent() {
  return (
    <Box
      maxH={'538px'}
      display={'flex'}
      flexGrow={1}
      flexDirection={'column'}
      padding={{
        base: '20px 10px',
        sm: '30px 16px',
        md: '40px 60px',
        xl: '100px 70px'
      }}
      borderRadius={'14px'}
      color={'#313131'}
      gap={'16px'}
    >
      <VStack alignItems={'flex-start'} gap={'4px'}>
        <Text visual={'banner_text'} color={'#F49AA5'} textTransform={'uppercase'} fontSize={{
          base: '16px'
        }}>
          Подарочная упаковка
        </Text>
        <Heading
          visual={'sub_header'}
          color={'#313131'}
          lineHeight={{
            base: '26px',
            sm: '32px',
            md: '48px',
            xl: '50px',
          }}
          fontSize={{
            base: '26px',
            sm: '32px',
            md: '48px',
            xl: '50px',
          }}
          style={{
            letterSpacing: 0,
          }}
        >
          Подарок — это всегда небольшой секрет, тайна
        </Heading>
      </VStack>
      <Text visual={'banner_text'} color={'#565656'} fontSize={16}>
        Упаковкой для подарка могут служить красивые яркие подарочные пакеты, коробочки или
        упаковочная бумага
      </Text>
      <Stack pt={{
        base: '39px',
        sm: '10px',
        md: 0,
        xl: '39px'
      }}>
        <Link href={'/catalog/services/decoration'}>
          <Button visual="solid" width={200} bg={'#F49AA5'} minH={'48px'}>
            каталог
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default ListPosterContent;
