'use client'
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'
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
        borderRadius:"14px"
    }}
    >
      <VStack alignItems={'flex-start'} pb="16px">

      <Heading variant={'main_header'}>НАДУЕМ ваши</Heading>
      <Heading variant={'sub_header'}>шары гелием</Heading>
      </VStack>
      <Text variant={'banner_text'}>Вы можете наполнить у нас свои шары гелием
по низкой цене</Text>
      <Button variant="solid" width={200} bg={"#F49AA5"}>подробнее</Button>
    </Box>
  )
}

export default Service1PosterContent