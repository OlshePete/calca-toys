"use client";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Service2PosterContent() {
  return (
    <Box
      sx={{
        maxH: "538px",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "100px 70px",
        borderRadius: "14px",
        color: "#313131",
        gap:'16px'
      }}
    >
      <VStack alignItems={"flex-start"} gap={0}>
        <Text
          variant={"banner_text"}
          color={"#F49AA5"}
          textTransform={"uppercase"}
          fontSize={16}
        >
          Подарочная упаковка
        </Text>
        <Heading variant={"sub_header"} color={"#313131"}
        lineHeight={"116%"}
          fontSize={50}>
          Подарок — это всегда
          небольшой секрет, тайна
        </Heading>
      </VStack>
      <Text variant={"banner_text"} color={"#565656"}
          fontSize={16}>
        Упаковкой для подарка могут служить красивые яркие подарочные пакеты,
        коробочки или упаковочная бумага
      </Text>
      <Button variant="solid" width={200} bg={"#F49AA5"} minH={"48px"}>
        каталог
      </Button>
    </Box>
  );
}

export default Service2PosterContent;
