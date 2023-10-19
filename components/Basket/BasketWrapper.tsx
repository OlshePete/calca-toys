"use client"
import React, {useState} from 'react';
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import {Grid, GridItem, Heading} from "@chakra-ui/react";
import BasketItem from "@/components/Basket/BasketItem";
import {Product} from "@/types";
import BasketSummary from "@/components/Basket/BasketSummary";
import {number} from "yup";

type BasketWrapperProps = {
    basketItems: Product[]
}

const BasketWrapper: React.FC<BasketWrapperProps> = ({basketItems}) => {
    const [price, setPrice] = useState()
    const [discountPrice, setDiscountPrice] = useState()
    const [discount, setDiscount] = useState()
    const [total, setTotal] = useState()

    const totalQuantity = basketItems.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);

    const [quantity, setQuantity] = useState(1)


    return (
        <div
            className='section  fullH'
            style={{
                background: "#FEF7E6",
                padding: '110px 0'
            }}>
            <ContentContainer>
                <BreadCrumb/>
                <Heading
                    variant={"post_header"}>
                    Корзина
                </Heading>
                <Grid
                    templateColumns='repeat(12, 1fr)'
                >
                    <GridItem colSpan={8}>
                        {basketItems && basketItems.map((el, i) => (
                            <BasketItem
                                key={i}
                                basketItem={el}
                                quantity={quantity}
                                setQuantity={setQuantity}
                            />
                        ))}
                    </GridItem>
                    <GridItem colSpan={4}>
                        <BasketSummary
                            quantity={quantity}
                            price={price}
                            discountPrice={discountPrice}
                        />
                    </GridItem>
                </Grid>
            </ContentContainer>
        </div>
    );
};

export default BasketWrapper;