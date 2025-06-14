"use client";

import { ProductFullViewProps } from "@/types";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Icon,
} from "@chakra-ui/react";



export default function ProductInfoAccordion({product}:ProductFullViewProps) {
  const {productDescription,productCharacteristic} = product.data.attributes
  return (
    <Accordion allowMultiple width="100%" maxW="lg">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
        <AccordionButton
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
          _hover={{
            bg:'0,0,0,0'
          }}
        >
          <Text variant="info_accordion_btn">Описание</Text>
          <Icon width="19px" height="7px" viewBox="0 0 21 9" fill="none" transition={'all .2s ease-in-out'} transform={isExpanded?'rotate(180deg)':'rotate(0)'}>
            <path
              d="M1 1L10.5 8L20 1"
              stroke="#313131"
              strokeLinecap="round"
            />
          </Icon>
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text color="gray.600">
            {productDescription}
          </Text>
        </AccordionPanel>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
          _hover={{
            bg:'0,0,0,0'
          }}
            >
              <Text variant="info_accordion_btn">Характеристика</Text>
              <Icon width="19px" height="7px" viewBox="0 0 21 9" fill="none" transition={'all .2s ease-in-out'} transform={isExpanded?'rotate(180deg)':'rotate(0)'}>
                <path
                  d="M1 1L10.5 8L20 1"
                  stroke="#313131"
                  strokeLinecap="round"
                />
              </Icon>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                {productCharacteristic}
              </Text>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
        <AccordionButton
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
          _hover={{
            bg:'0,0,0,0'
          }}
        >
          <Text variant="info_accordion_btn">Оплата</Text>
          <Icon width="19px" height="7px" viewBox="0 0 21 9" fill="none" transition={'all .2s ease-in-out'} transform={isExpanded?'rotate(180deg)':'rotate(0)'}>
            <path
              d="M1 1L10.5 8L20 1"
              stroke="#313131"
              strokeLinecap="round"
            />
          </Icon>
        </AccordionButton>
        <AccordionPanel pb={4}>
          <Text color="gray.600">
            Условия оплаты
          </Text>
        </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
