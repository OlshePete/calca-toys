"use client";
import {
  Product,
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
  HStack,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ColorPicker } from "chakra-color-picker";
import { color } from "framer-motion";
import ProductInfoAccordion from "../accordions/ProductInfoAccordion";
import ProductFullViewForm from "../forms/ProductFullViewForm";
import { useLocalStorage } from "@/hooks/UseLocalStorage";
import ProductsCarousel from "../carousels/ProductsCarousel";
import { RootState } from "@/app/GlobalRedux/store";
import { clearBasket } from "@/app/GlobalRedux/Feature/basket/basketSlice";
import { addViewedItem } from "@/app/GlobalRedux/Feature/viewed/viewedSlice";

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
  const id = product.data.id
  const {
    name,
    price,
    height,
    width,
    mustHave,
    discount_price,
    previewComment,
    variant:variants,
    comment,
    article,
    connected,
  } = product.data.attributes;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewed: Product[] = useSelector(
    (state: RootState) => state.viewed.items
  );
  const dispatch = useDispatch();
  console.log("viewed", viewed);

  const handleColorChange = (value: string) => {
    setCurrentIndex((p) =>
      variants.findIndex((v) => v.color === value.slice(1))
    );
  };
  // const [value,setValue] = useLocalStorage('viewed',[product])
  useEffect(() => {
    if (product) dispatch(addViewedItem(product));
  }, [product]);

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
            src={"https://calca-toys.ru/cms"+variants[currentIndex].image.data.attributes.url}
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
        <GridItem
          w="100%"
          minH="703"
          display={"flex"}
          flexDirection={"column"}
          gap={"20px"}
        >
          <HStack gap={"8px"}>
            {mustHave && <Badge>Хит продаж</Badge>}
            {discount_price && (
              <Badge variant={"discount"}>
                {`-${(((price - discount_price) / price) * 100).toFixed(0)}%`}
              </Badge>
            )}
          </HStack>
          <VStack align={"flex-start"}>
            <Text variant={"full_product_name"}>
              {name}
              {variants && variants.map((v) => v.color).length > 1
                ? ` - ${variants.map((v) => v.name).join(", ")}`
                : ""}
            </Text>
            {previewComment && (
              <Text variant={"full_product_text"} color={"#515151"}>
                {previewComment}
              </Text>
            )}

            {(height || width) && (
              <Text variant={"full_product_text"} color={"#515151"}>
                {_getSizes(height, width)}
              </Text>
            )}
          </VStack>

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
          <HStack gap={"24px"}>
            {variants &&
              variants.map(({ image, name, color }, index) => {
                return (
                  <Image
                    key={name + index + "-" + id}
                    alt={name}
                    src={"https://calca-toys.ru/cms"+image.data.attributes.url}
                    width={100}
                    height={130}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      transition: "all .2s ease",
                      borderRadius: "14px",
                      cursor: "pointer",
                      objectFit: "cover",
                      width: "100px",
                      height: "130px",
                      border:
                        currentIndex === index ? "3px solid #71BBFF" : "none",
                    }}
                  />
                );
              })}
          </HStack>
          {/* <ProductFullViewForm max={stock[currentIndex].inStock} item={{
            product:product,
            variant:{
              ...variants[currentIndex],
              value:1
            },
          }} /> */}
          <Text variant={"full_product_text"}>{comment}</Text>
          <ProductInfoAccordion product={product} />
        </GridItem>

        {/* {connected && (
          <GridItem
            colSpan={2}
            w="100%"
            minH="560"
            // display={"flex"}
            // flexDirection={"column"}
            // gap={"20px"}
          >
            <ProductsCarousel
              label="С этим товаром покупают"
              products={connected}
            />
          </GridItem>
        )} */}
        {/* <GridItem
          colSpan={2}
          w="100%"
          minH="560"
          // display={"flex"}
          // flexDirection={"column"}
          // gap={"20px"}
        >
          <ProductsCarousel label="Недавно просмотренные" products={viewed} />
        </GridItem> */}
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
              <path d="M1 1L8 6L15 1" stroke="#313131" strokeLinecap="round"/>
          </Icon>
        </Box>
      } */}
    </div>
  );
}

export default ProductFullView;
