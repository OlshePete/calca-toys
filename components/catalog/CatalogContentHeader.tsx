'use client';
import { Badge, Box, CloseButton, HTMLChakraProps, Text } from '@chakra-ui/react';
import { SPECIAL_LIST } from '@components/PageContents/CatalogContent';
import { FC, ReactNode } from 'react';

type TPriceVariant = 'start' | 'end'
interface CatalogContentHeaderProps extends HTMLChakraProps<'div'> {
  children: ReactNode;
  price:[number,number],
  priceLimits:[number,number],
  list: {
    label: string[];
    paramName: string;
  }[];
  specials: string[] | null;
  onDelete: (label: string, paramName: string) => void;
  onDeleteSpecial: (label: string, paramName: string) => void;
  onDeletePrice: (paramName: TPriceVariant) => void;
}
const colors = [
  '#F5EDFF',
  '#FFF3CA',
  '#FFE7EA',
  '#E5EFF8',
  '#F7E1FF',
  '#FFF6D6',
  '#FFEFF1',
  '#D9EAF7',
  '#F2D6FF',
];
const ColorBageItem:FC<{title: string, paramName: string}> = ({title, paramName}) => {
  if (paramName !== 'color') return <Text fontSize={'14px'}>{title[0].toUpperCase() + title.slice(1)}</Text>
  return (
    <Box
      width={'16px'}
      height={'16px'}
      background={title}
      borderRadius={'100%'}
    />
  )
}
const CatalogContentHeader: FC<CatalogContentHeaderProps> = ({ children, list, price, priceLimits, specials, onDeleteSpecial, onDeletePrice, onDelete, ...props }) => {
  const zeroBasedPriceLimit = [0, priceLimits[1]]
  const data = list.map((el) => [...el.label.map((item) => `${el.paramName === 'color' ? '#' : ''}${item}$$${el.paramName}`)]).flat();

  return (
    <Box w={'100%'} minH={'32px'} display={'flex'} justifyContent={'space-between'} {...props}>
      <Box
        minH={'36px'}
        maxHeight={'240px'}
        flexGrow={1}
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        gap={'8px'}
        overflowX={'auto'}
      >
          {
            price && price.map((value, index)=>{
              console.log('priceLimits',priceLimits)
              const isStart = index === 0
              const shouldRender = value !== zeroBasedPriceLimit[isStart?0:1]
              if (!shouldRender) return null
              const title = `${isStart ? 'от' : 'до'} ${value}`
              const paramName:TPriceVariant = isStart ? 'start' : 'end'
              const colorIndex = data.length + 1 + index 
              return <Badge
                key={paramName + title + index}
                h={'32px'}
                p={'8px 16px 10px 16px'}
                borderRadius={'23px'}
                bg={colors[colorIndex]}
                display={'flex'}
                alignItems={'center'}
                gap={'7px'}
              >
                <ColorBageItem title={title} paramName={paramName}/>
                {/* <CloseButton
                  onClick={() => onDeletePrice(paramName)}
                  _hover={{ background: 'transparent' }}
                  color={'#313131'}
                  width={'9px'}
                  height={'9px'}
                /> */}
              </Badge>
            })
          }
        {data &&
          data.map((label, index) => {
            const [title, paramName] = label.split('$$');
            const colorIndex = index % colors.length;
            return (
              <Badge
                key={title + index}
                h={'32px'}
                p={'8px 0px 10px 16px'}
                borderRadius={'23px'}
                bg={colors[colorIndex]}
                display={'flex'}
                alignItems={'center'}
                gap={'7px'}
              >
                <ColorBageItem title={title} paramName={paramName}/>
                <CloseButton
                  onClick={() => onDelete(title, paramName)}
                  _hover={{ background: 'transparent' }}
                  color={'#313131'}
                  width={'9px'}
                  height={'9px'}
                />
              </Badge>
            );
          })}
          {
            specials && specials.map((value, index)=>{
              console.log('priceLimits',priceLimits)
              const title = `${SPECIAL_LIST[value as keyof typeof SPECIAL_LIST]}`
              const paramName = 'special'
              const colorIndex = data.length + ( price ? price.length : 0 ) + 1 + index 
              return <Badge
                key={paramName + title + index}
                h={'32px'}
                p={'8px 0px 10px 16px'}
                borderRadius={'23px'}
                bg={colors[colorIndex]}
                display={'flex'}
                alignItems={'center'}
                gap={'7px'}
              >
                <ColorBageItem title={title} paramName={paramName}/>
                <CloseButton
                  onClick={() => onDeleteSpecial(value, paramName)}
                  _hover={{ background: 'transparent' }}
                  color={'#313131'}
                  width={'9px'}
                  height={'9px'}
                />
              </Badge>
            })
          }
      </Box>
      <Box minW={'280px'} alignSelf={'flex-start'}>
        {children}
      </Box>
    </Box>
  );
};

export default CatalogContentHeader;
