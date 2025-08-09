'use client';

import { ProductFullViewProps } from '@apptypes';
import {
  Accordion,
  Icon,
} from '@chakra-ui/react';
import Text from '../../ui/Text/CustomText';
import ExpandArrow from '../../ui/icons/ExpandArrow';
import { useState } from 'react';
  type TKeys = 'description' | 'charact' | 'payment'

const items:{
  label:string,
  value:TKeys
}[] = [
  {
    label:'Описание',
    value:'description',
  },
  {
    label:'Характеристика',
    value:'charact',
  },
  {
    label:'Условия оплаты',
    value:'payment',
  },
]
const values = items.reduce<Record<string,string>>((a,item)=>{a[item.value]=item.label;return a},{})
export default function ProductInfoAccordion({ product }: ProductFullViewProps) {
  const { productDescription, productCharacteristic } = product.data.attributes;
  const dataMap:Record<TKeys, string> = {
    'description':productDescription,
    'charact':productCharacteristic,
    'payment':"Условия оплаты",
  }
  const [mainValue, setMainValue] = useState<TKeys[]>([])
  return (
    <Accordion.Root multiple  width="100%" maxW="lg" value={mainValue} onValueChange={(e)=>setMainValue(e.value as TKeys[])}>
      {
        items.map(({value, label})=>{
          return<Accordion.Item value={value}>
              <Accordion.ItemTrigger
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={4}
                    _hover={{
                      bg: '0,0,0,0',
                    }}>
                    <Text visual="info_accordion_btn">{label}</Text>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody pb={4}>
                      <Text color="gray.600">{dataMap[value]}</Text>
                </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        })
      }


      {/* <Accordion.Item value='description'>
        <Accordion.ItemTrigger
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{
                bg: '0,0,0,0',
              }}
              base={{
                outline:"1px solid red"
              }}
              >
              <Text visual="info_accordion_btn">Описание</Text>
              <Icon
                width="19px"
                height="7px"
                viewBox="0 0 21 9"
                fill="none"
                transition={'all .2s ease-in-out'}
                // transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}
              >
                <path d="M1 1L10.5 8L20 1" stroke="#313131" strokeLinecap="round" />
              </Icon>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody pb={4}>
                  <Text color="gray.600">{productDescription}</Text>
            </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
     <Accordion.Item value='charact'>
        <Accordion.ItemTrigger
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{
                bg: '0,0,0,0',
              }}>
              <ExpandArrow
                width="19px"
                height="7px"
                fill="none"
                transition={'all .2s ease-in-out'}
                // transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}
              />
              <Text visual="info_accordion_btn">Характеристика</Text>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody  pb={4} >
              <Text color="gray.600">{productCharacteristic}</Text>

          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item> */}
    </Accordion.Root>
  );
}
