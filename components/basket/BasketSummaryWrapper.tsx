'use client'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, BoxProps, Heading, Icon, Text, useBreakpointValue } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
interface IProps extends BoxProps {
    children: ReactNode
}
const BasketSummaryWrapper: FC<IProps> = ({ children, ...props }) => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const label = 'Информация о заказе'
    return (
        <Box w={'100%'} px={6} {...props} >
            {isMobile ? (
                <Accordion allowToggle>
                    <AccordionItem border="none">
                        {({ isExpanded }) => (
                            <>
                                <AccordionButton
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    p={4}
                                    pl={0}
                                    _hover={{
                                        bg: '0,0,0,0'
                                    }}
                                >
                                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                                        <Heading variant={"post_header"} >{label}</Heading>
                                        <Text fontWeight={300} opacity={.3}>{isExpanded ? 'свернуть' : 'развернуть'}</Text>

                                    </Box>
                                    <Icon width="19px" height="7px" viewBox="0 0 21 9" fill="none" transition={'all .2s ease-in-out'} transform={isExpanded ? 'rotate(180deg)' : 'rotate(0)'}>
                                        <path
                                            d="M1 1L10.5 8L20 1"
                                            stroke="#313131"
                                            strokeLinecap="round"
                                        />
                                    </Icon>
                                </AccordionButton>
                                <AccordionPanel pb={4} px={0}>
                                    {children}
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                </Accordion>
            ) : children
            }
        </Box>
    )
}
export { BasketSummaryWrapper }