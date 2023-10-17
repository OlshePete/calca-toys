'use client'
import { ProductPreviewProps } from "@/types";
import { Box, Heading, Icon, Select, Text } from "@chakra-ui/react";
import Image from "next/image";
import React,{useState} from "react";

import { ColorPicker } from "chakra-color-picker"; 
import { color } from "framer-motion";
import { useRouter } from "next/navigation";


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

function ProductPreview({ product }: ProductPreviewProps) {
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
  } = product;
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const router = useRouter();

const handleColorChange = (value:string) => {
    setCurrentIndex(p=>variants.findIndex(v=>v.color===value.slice(1)))
  };
  return (
    <Box
      className="product-sm"
      onClick={()=>{
        console.log('click',id);
        router.push('/product/'+id)
      }}
      style={{
        margin: 0,
        position: "relative",
        width: "270px",
        display: "flex",
        height: "464px",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "16px",
      }}
    >
      {
        variants &&  <Image
          alt={name}
          src={variants[currentIndex].image}
          width={270}
          height={320}
          style={{
            borderRadius: "14px",
            objectFit: "cover",
            minWidth: "270px",
            minHeight: "320px",
            maxWidth: "270px",
            maxHeight: "320px",
          }}
        />
      }
     
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: "4px",
        }}
      >
        <Text variant={"product_name"}>
          {name}
          {variants && variants.map(v=>v.color).length > 1 ? ` - ${variants.map(v=>v.label).join(", ")}` : ""}
        </Text>

        {previewComment && <Text variant={"product_text_sub"}>{previewComment}</Text>}
        {!previewComment && (height || width) && (
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
      </div>

      <Image
        src="/basket.svg"
        alt="BasketItem icon"
        width={44}
        height={44}
        priority
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      />
      {mustHave && (
        <Image
          src="/mustHave.svg"
          alt="Must Have icon"
          width={44}
          height={44}
          priority
          style={{
            position: "absolute",
            top: "16px",
            left: "17px",
          }}
        />
      )}
      {discount_price && (
        <>
          <Image
            src="/discount.svg"
            alt="Must Have icon"
            width={44}
            height={44}
            priority
            style={{
              position: "absolute",
              top: "16px",
              left: mustHave?`${44+17}px`:"17px",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: "29px",
              left: mustHave?`${44+24}px`:"24px",
              fontSize: "12px",
              color: "#FFF",
              fontWeight: 500,
            }}
          >{`-${(((price - discount_price) / price) * 100).toFixed(0)}%`}</p>
        </>
      )}
      {
        variants && variants.map(v=>v.color).length > 1  && <Box position={'absolute'} top={'22px'} right={'16px'} 
        className="color_picker"
        >
          <ColorPicker onChange={handleColorChange} colors={variants.map(v=>"#"+v.color)}/>
          <Icon width="16px" height="7px" viewBox="0 0 16 7" fill={'none'}>
              <path d="M1 1L8 6L15 1" stroke="#313131" stroke-linecap="round"/>
          </Icon>
        </Box>
      }
    </Box>
  );
}

export default ProductPreview;
