"use client"
import React from 'react';
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import {Grid, GridItem, Heading} from "@chakra-ui/react";
import BasketItem from "@/components/Basket/BasketItem";
import BasketSummary from "@/components/Basket/BasketSummary";

const BasketWrapper = () => {
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
                    gap={'0px'}>
                    <GridItem minH={'530px'} colSpan={7}>
                        <BasketItem/>
                    </GridItem>
                    <GridItem
                        minH={'530px'}
                        colStart={9}
                        colEnd={13}
                    >
                       <BasketSummary/>
                    </GridItem>
                </Grid>
            </ContentContainer>
        </div>
    );
};

export default BasketWrapper;