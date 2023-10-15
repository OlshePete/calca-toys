import { addBasketItem } from "@/app/GlobalRedux/Feature/basket/basketSlice";
import { BasketItem, NewBasketElementFormValues, OneVariantBasketItem } from "@/types";
import { CountPicker } from "@/ui/inputs/CountPicker";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function ProductFullViewForm({ max, item }: { max: number; item: OneVariantBasketItem }) {
  //  const [count, setCount] = useState<number>(1)
  const dispatch = useDispatch();
  const initialValues: NewBasketElementFormValues = {
    ...item,
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log("form submitted"), dispatch(addBasketItem(values));
    },
  });
  console.log("formik",formik.values)
  return (
    <form onSubmit={formik.handleSubmit}>
      <HStack gap={"18px"}>
        <CountPicker
          max={max}
          current={formik.values.variant.value ?? 1}
          handler={(v: string) => {
            formik.setFieldValue("variant.value", Number(v));
          }}
        />
        <Button
          variant={"solid"}
          textTransform={"uppercase"}
          w={"248px"}
          fontSize={"12px"}
          lineHeight={"14px"}
        >
          Купить в 1 клик
        </Button>
        <IconButton
          type="submit"
          aria-label="add-to-basket-icon"
          icon={
            <Image
              src="/basket.svg"
              alt="Basket icon"
              width={40}
              height={40}
              priority
              style={{
                cursor: "pointer",
              }}
            />
          }
        />
      </HStack>
    </form>
  );
}

export default ProductFullViewForm;
