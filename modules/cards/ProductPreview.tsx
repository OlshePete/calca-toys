import { ProductPreviewProps } from "@/types";
import CustomText from "@/ui/typographies/CustomText";
import CustomTitle from "@/ui/typographies/CustomTitle";
import Image from "next/image";
import React from "react";

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
    rebate = 0,
    comment,
    colors,
    img,
  } = product;
  return (
    <div
      className="product-sm"
      style={{
        margin:0,
        position: "relative",
        width: "270px",
        display: "flex",
        height: "464px",
        flexDirection: "column",
        justifyContent:"space-between",
        gap:'16px'
      }}
    >
      <Image
        alt={name}
        src={img}
        width={270}
        height={320}
        style={{
          borderRadius: "14px",
        objectFit: 'cover',
        minWidth:'270px',
        minHeight:'320px',
        maxWidth:'270px',
        maxHeight:'320px',

        }}
      />
      <div
      style={{
        flexGrow:1,
        display: "flex",
        flexDirection: "column",
        justifyContent:'space-between',
        paddingBottom:'4px',
      }}
      >
        <CustomText color={"brand.100"} fontSize={16}>
          {name}{colors?` - ${colors.map(c=>c.label).join(', ')}`:""}
        </CustomText>
   
          
         {comment && <CustomText color={"brand.200"} fontSize={14}>{comment}</CustomText>}
        {!comment && (height || width) && (
          <CustomText color={"brand.200"} fontSize={14}>
            {_getSizes(height, width)}
          </CustomText>
        )}
        <CustomText color={"brand.200"} fontSize={18}>{price} ₽</CustomText>
     
      </div>

      <Image
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
      {mustHave && <Image
        src="/mustHave.svg"
        alt="Must Have icon"
        width={44}
        height={44}
        priority
        style={{
          position: "absolute",
          top: '16px',
          left: '17px',
        }}
      />}
    </div>
  );
}

export default ProductPreview;
