'use client'
import { Badge, Box, CloseButton, HTMLChakraProps, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import SortSelect from "../SortSelect/SortSelect";

interface ICheckBoxProps extends HTMLChakraProps<"div"> {
    list:{
        label: string[];
        paramName: string;
    }[],
    onDelete:(label:string, paramName:string )=>void;
}
const options = {
    price_inc: 'цена по возрастанию',
    price_dec: 'цена по убыванию'
}
const colors = [
    '#F5EDFF', '#FFF3CA', '#FFE7EA', '#E5EFF8',
    "#F7E1FF", "#FFF6D6", "#FFEFF1", "#D9EAF7",
    "#F2D6FF"
]
const CatalogContentHeader: FC<ICheckBoxProps> = ({ list, onDelete, ...props }) => {
    const data = list.map(el=>([...el.label.map(item=>`${item}#${el.paramName}`)])).flat()
    const [sortValue, setSortValue] = useState<keyof typeof options>('price_inc')
    return (
        <Box w={'100%'} minH={'32px'} display={'flex'} justifyContent={'space-between'}  {...props}>
            <Box minH={'36px'} maxHeight={'240px'} flexGrow={1} display={'flex'} flexWrap={'wrap'} alignItems={'center'} gap={'8px'} overflowX={'auto'}>
                {
                    data && data.map((label,index) => {
                        const [title, paramName] = label.split("#")
                        const colorIndex = index % colors.length;
                        
                        return <Badge key={title+index} h={'32px'} borderRadius={'23px'} bg={colors[colorIndex]} display={'flex'} alignItems={'center'} gap={'7px'}>
                            <Text fontSize={'14px'}>{title[0].toUpperCase() + title.slice(1)}</Text>
                            <CloseButton  onClick={()=>onDelete(title,paramName)} _hover={{background:'transparent'}} color={'#313131'} width={'9px'} height={'9px'}/>
                        </Badge >
                    })
                }
            </Box>
            <Box minW={'273px'} alignSelf={'flex-start'}>
                <SortSelect
                    onChange={(v) => setSortValue(v as keyof typeof options)}
                    options={{
                        price_inc: 'возрастанию цены',
                        price_dec: 'убыванию цены'
                    }}
                    value={sortValue}
                    sx={{
                        w: '274px',
                        h: '100%',
                        alignItems: 'flex-end',
                        "& .chakra-select": {
                            width: 'auto!important',
                            paddingRight: "8px!important",
                            lineHeight: '100%'
                        },
                        "& .chakra-select__icon-wrapper": {
                            right: 0
                        }
                    }}
                />
            </Box>
        </Box>
    );
};

export default CatalogContentHeader;