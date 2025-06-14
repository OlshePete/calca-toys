"use client";
import { Box, Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function ListPosterContent() {
  return (
    <Box
      sx={{
        maxH: "538px",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        padding: "100px 70px",
        borderRadius: "14px",
        color: "#313131",
        gap:'16px'
      }}
    >
      <VStack alignItems={"flex-start"} gap={'4px'}>
        <Text
          variant={"banner_text"}
          color={"#F49AA5"}
          textTransform={"uppercase"}
          fontSize={16}
        >
          Подарочная упаковка
        </Text>
        <Heading variant={"sub_header"} color={"#313131"}
        lineHeight={"58px"}
          fontSize={50} style={{
        letterSpacing:0,
      }}>
          Подарок — это всегда
          небольшой секрет, тайна
        </Heading>
      </VStack>
      <Text variant={"banner_text"} color={"#565656"}
          fontSize={16}>
        Упаковкой для подарка могут служить красивые яркие подарочные пакеты,
        коробочки или упаковочная бумага
      </Text>
      <Stack pt={"39px"}>
      <Link
        href={'/catalog/services/decoration'}
      >
      <Button variant="solid" width={200} bg={"#F49AA5"} minH={"48px"}>
        каталог
      </Button>
      </Link>
      </Stack>
    </Box>
  );
}

export default ListPosterContent; 