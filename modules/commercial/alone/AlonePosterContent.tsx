'use client';
import { Box, Stack, VStack } from '@chakra-ui/react';
import Button from '../../../ui/Buttons/CustomButton';
import Heading from '../../../ui/Heading/CustomHeading';
import Text from '../../../ui/Text/CustomText';
import Link from 'next/link';
import React from 'react';

function AlonePosterContent() {
// Доделать адаптив
  return (
    <Box
      className='alone-poster-wrapper'       
      padding= {{
        base: '140px 20px 140px 10px',
        sm: '140px 40px 140px 40px',
        md: '70px'
      }}
    >
      <VStack alignItems={'flex-start'} gap={0} maxW={'50%'} >
        <Heading
          zIndex={1}
          visual={'main_header'}
          position={'relative'}
          bottom={{
            base: '100px',
            md: 0
          }}
        >
          НАДУЕМ ваши
        </Heading>
        <Heading
          zIndex={1}
          visual={'sub_header'}
          position={'relative'}
          bottom={{
            base: '100px',
            md: 0
          }}
        >
          шары гелием
        </Heading>
      </VStack>
      <Text visual={'banner_text'} fontSize={'16px'} maxW={{base:'360px', sm:'50%', md:'320px'}} zIndex={1}>
        Вы можете наполнить у нас свои шары гелием по низкой цене
      </Text>
      <Stack pt={'39px'}>
        <Link href={'/catalog/services/inflate'}>
          <Button visual="solid" width={200} bg={'#F49AA5'}>
            подробнее
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default AlonePosterContent;
