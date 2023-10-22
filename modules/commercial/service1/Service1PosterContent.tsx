'use client'
import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Service1PosterContent() {
  return (
    <Box 
    sx={{
      bg:"#90BCE4",
      h:'456px',
      display:"flex",
      flexDirection:'column',
      justifyContent:'space-between',
        padding:"70px",
        borderRadius:"14px",
        gap:"16px" ,
        height:'100%'
    }}
    >
      <VStack alignItems={'flex-start'}gap={0} maxW={'50%'}>

      <Heading variant={'main_header'} fontSize={'90px'} lineHeight={'90px'}>НАДУЕМ ваши</Heading>
      <Heading variant={'sub_header'} fontSize={'63px'}  lineHeight={'63px'}>шары гелием</Heading>
      </VStack>
      <Text variant={'banner_text'} fontSize={'16px'}  >Вы можете наполнить у нас свои шары гелием
по низкой цене</Text>
<Stack pt={"39px"}>

      <Button variant="solid" width={200} bg={"#F49AA5"}>подробнее</Button>
</Stack>
    </Box>
  )
}

export default Service1PosterContent