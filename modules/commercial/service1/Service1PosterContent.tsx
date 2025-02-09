'use client'
import { Box, Button, Heading, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'

function Service1PosterContent() {
  const padding = useBreakpointValue(
   { base: "140px 20px 140px 10px", md: "70px" },
   {
     // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
     // (Defaults to 'base')
     fallback: "md",
   }
 );
 const bottom = useBreakpointValue(
  { base: "100px", md: "0px" },
  {
    fallback: "md",
  }
);
  return (
    <Box
      sx={{
        bg: "#90BCE4",
        maxHeight: '456px',
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding:padding,
        borderRadius: "14px",
        gap: "16px",
      }}
    >
      <VStack alignItems={'flex-start'} gap={0} maxW={'50%'}>

        <Heading variant={'main_header'} style={{
          position:'relative',
          bottom:bottom
        }}>НАДУЕМ ваши</Heading>
        <Heading variant={'sub_header'}   style={{
          position:'relative',
          bottom:bottom
        }}>шары гелием</Heading>
      </VStack>
      <Text variant={'banner_text'} fontSize={'16px'} maxW={'360px'}  >Вы можете наполнить у нас свои шары гелием
        по низкой цене</Text>
      <Stack pt={"39px"}>
        <Button variant="solid" width={200} bg={"#F49AA5"}>подробнее</Button>
      </Stack>
    </Box>
  )
}

export default Service1PosterContent