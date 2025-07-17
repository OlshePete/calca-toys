'use client';
import {
  Accordion,
  Box,
  BoxProps,
  Button,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
interface IProps extends BoxProps {
  children: React.ReactNode;
}
const BasketSummaryWrapper: FC<IProps> = ({ children, ...props }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const label = 'Информация о заказе';
  const [value, setValue] = useState<[typeof label] | []>()
  const isExpanded = (value && value[0]===label)
  return (
    <Box w={'100%'} px={6} {...props}>
      {isMobile ? (
        <Accordion.Root allowToggle value={value} onValueChange={(e:{value:typeof value}) => setValue(e.value)}>
          {/* @ts-ignore */}
          <Accordion.Item key={label} value={label} >
            <Accordion.ItemTrigger>
              <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                  pl={0}
                  _hover={{
                    bg: '0,0,0,0',
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                    <Heading >{label}</Heading>
                    <Text fontWeight={300} opacity={0.3}>
                      {isExpanded ? 'свернуть' : 'развернуть'}
                    </Text>
                  </Box>
                  <Icon
                    width="19px"
                    height="7px"
                    viewBox="0 0 21 9"
                    fill="none"
                    transition={'all .2s ease-in-out'}
                    transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}
                  >
                    <path d="M1 1L10.5 8L20 1" stroke="#313131" strokeLinecap="round" />
                  </Icon>
                </Button>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody><Box> {children}</Box></Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      ) : (
        children
      )}
    </Box>
  );
};
export { BasketSummaryWrapper };

            {/* {({ isExpanded }) => (
              <>
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={4}
                  pl={0}
                  _hover={{
                    bg: '0,0,0,0',
                  }}
                >
                  <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                    <Heading variant={'post_header'}>{label}</Heading>
                    <Text fontWeight={300} opacity={0.3}>
                      {isExpanded ? 'свернуть' : 'развернуть'}
                    </Text>
                  </Box>
                  <Icon
                    width="19px"
                    height="7px"
                    viewBox="0 0 21 9"
                    fill="none"
                    transition={'all .2s ease-in-out'}
                    transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}
                  >
                    <path d="M1 1L10.5 8L20 1" stroke="#313131" strokeLinecap="round" />
                  </Icon>
                </Button>
                <AccordionPanel pb={4} px={0}>
                  {children}
                </AccordionPanel>
              </>
            )} */}