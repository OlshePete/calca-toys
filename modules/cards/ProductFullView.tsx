"use client";
import {
  ProductColor,
  ProductFullViewProps,
  ProductPreviewProps,
} from "@/types";
import {
  Badge,
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

import { ColorPicker } from "chakra-color-picker";
import { color } from "framer-motion";

function _getSizes(h?: number, w?: number): string {
  let str = "";
  if (h) {
    str = `${h}`;
    if (w) str += ` x ${w}`;
  } else {
    if (w) str = `${w}`;
  }
  if (str.length > 0) str += " см";
  return str;
}

function ProductFullView({ product }: ProductFullViewProps) {
  const {
    id,
    name,
    price,
    height,
    width,
    mustHave,
    discount_price,
    previewComment,
    variants,
    article,
  } = product;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleColorChange = (value: string) => {
    setCurrentIndex((p) =>
      variants.findIndex((v) => v.color === value.slice(1))
    );
  };
  return (
    <div style={{}}>
      <Text fontSize={14} fontWeight={400} lineHeight={"22px"}>
        {" "}
        Артикул: {article}
      </Text>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="703">
          <Image
            alt={name}
            src={variants[currentIndex].image}
            width={600}
            height={703}
            style={{
              borderRadius: "14px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </GridItem>
        <GridItem w="100%" minH="703">
          {mustHave && <Badge>Хит продаж</Badge>}
          {discount_price && (
            <Badge variant={"discount"}>
              {`-${(((price - discount_price) / price) * 100).toFixed(0)}%`}
            </Badge>
          )}
          <Text variant={"product_name"} textTransform={"uppercase"}>
            {name}
            {variants && variants.map((v) => v.color).length > 1
              ? ` - ${variants.map((v) => v.label).join(", ")}`
              : ""}
          </Text>
          {previewComment && (
            <Text variant={"product_text_sub"}>{previewComment}</Text>
          )}

          {(height || width) && (
            <Text variant={"product_text_sub"}>{_getSizes(height, width)}</Text>
          )}
          {!discount_price ? (
            <Text variant={"product_text"}>{price} ₽</Text>
          ) : (
            <Box display={"flex"} gap={"24px"}>
              <Text variant={"product_text"}>{discount_price} ₽</Text>
              <Text variant={"product_text"} className="crossed">
                {discount_price} ₽
              </Text>
            </Box>
          )}
        </GridItem>
      </Grid>

      {/*  <Image
        src="/basket.svg"
        alt="Basket icon"
        width={44}
        height={44}
        priority
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
      {
        colors && <Box position={'absolute'} top={'22px'} right={'16px'} 
        className="color_picker"
        >
          <ColorPicker onChange={handleColorChange} colors={colors.map((c:ProductColor)=>"#"+c.color)}/>
          <Icon width="16px" height="7px" viewBox="0 0 16 7" fill={'none'}>
              <path d="M1 1L8 6L15 1" stroke="#313131" stroke-linecap="round"/>
          </Icon>
        </Box>
      } */}
    </div>
  );
}

export default ProductFullView;
