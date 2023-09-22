
import { CountPicker } from "@/ui/inputs/CountPicker";
import { Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function ProductFullViewForm({ max }: { max: number }) {
  return (
    <div>
      <HStack gap={'18px'}>

     <CountPicker max={max} handler={(v:string)=>{console.log(v)}}/>
     <Button variant={'solid'} textTransform={'uppercase'} w={'248px'} fontSize={'12px'} lineHeight={'14px'}>
      Купить в 1 клик
     </Button>
      <Image
          src="/basket.svg"
          alt="Basket icon"
          width={40}
          height={40}
          priority
          style={{
            cursor:'pointer'
          }}
        />
      </HStack>

    </div>
  );
}

export default ProductFullViewForm;
