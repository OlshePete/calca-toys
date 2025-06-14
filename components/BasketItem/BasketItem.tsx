import { _getSizes } from "@/modules/cards/ProductPreview"
import { useBasketStore } from "@/store/basketStore"
import { IBasketItem, IProductBasketVariant } from "@/types/basket"
import { CountPicker } from "@/ui/inputs/CountPicker"
import { Box, Button, HStack, Icon, IconButton, Text, useBreakpointValue, VStack } from "@chakra-ui/react"
import Image from "next/image"
import { FC } from "react"

interface IProps {
    item: IBasketItem,
    variant: IProductBasketVariant,
    isConfirm?:boolean,
}

const BasketItem: FC<IProps> = ({ item, variant, isConfirm=false }) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    const isMobile = useBreakpointValue({ base: true, md: false })
    const { updateCountById, removeById } = useBasketStore();
    const { id, product } = item
    const { name, article, width, height, previewComment, discount_price, price } = product.attributes
    const { id: variantId, value } = variant
    const variantData = Object.values(item.product.attributes.variant).find(el => el.id === variantId)

    // Получаем текущее количество этого варианта в корзине
    const currentCount = value;
    const stock = variantData?.stock ?? 0;

    const handleCountChange = (newValue: number) => {
        updateCountById(id, {
            ...variant,
            value: newValue - currentCount // передаем разницу
        });
    };

    const handleRemove = () => {
        // Если это последний вариант товара, удаляем товар полностью
        if (Object.keys(item.variant).length === 1) {
            removeById(id);
        } else {
            // Иначе удаляем только этот вариант
            updateCountById(id, {
                ...variant,
                value: -currentCount // уменьшаем количество до 0
            });
        }
    };
    
    return (
        <HStack
            key={variant.id}
            width={isMobile?'calc(100% - 32px)':undefined}
            paddingBottom={isConfirm?'26px':'40px'}
            borderBottom={'1px solid rgba(0,0,0,.15)'}
            sx={{
                "& > img": {
                    borderRadius: '9px',
                    minWidth: isConfirm || isMobile?'100px':'170px',
                    width: isConfirm|| isMobile?'100px':'170px',
                    height: isConfirm|| isMobile?'120px':'200px',
                    objectFit: 'cover'
                },
            }}
        >
            {variantData && variantData.image?.data?.attributes?.url && isMobile && (
                <Image
                    alt='product small pict'
                    height={120}
                    width={90}
                    src={`${API_URL}/cms${variantData.image.data.attributes.url}`}
                />
            )}
            {variantData && variantData.image?.data?.attributes?.url && !isMobile &&(
                <Image
                    alt='product small pict'
                    height={204}
                    width={170}
                    src={`${API_URL}/cms${variantData.image.data.attributes.url}`}
                />
            )}

            <VStack w={'100%'} h={isConfirm?'120px':'200px'} pl={isConfirm?'0px':'30px'}  >
                <Box  w={'100%'} flexGrow={1} display={'flex'} flexDirection={isConfirm?'column':'row'} justifyContent={'space-between'}>
                    <Box >
                        <Text flexGrow={1}  fontSize={isConfirm?'12px':'14px'}>Артикул: {article}</Text>
                        <Text flexGrow={1}  fontSize={isConfirm?'14px':'16px'}>{name}</Text>
                    </Box>
                    <Box pt={isConfirm?'0px':'24px'} w={'fit-content'}>
                        {!previewComment && (height || width) && (
                            <Text variant={"product_text_sub"}  fontSize={isConfirm?'12px':'14px'}>{_getSizes(height, width)}</Text>
                        )}
                        {!discount_price ? (
                            <Text variant={"product_text"}>{price} ₽</Text>
                        ) : (
                            <Box display={"flex"} gap={"4px"} flexDirection={'column'}>
                                <Text variant={"product_text"} fontSize={isConfirm?'16px':'18px'}>{discount_price} ₽</Text>
                                <Text variant={"price_text"} className="crossed" fontSize={isConfirm?'16px':'18px'}>
                                    {price} ₽
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Box>

              {!isConfirm &&  <Box position={'relative'} w={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <CountPicker
                        max={stock}
                        current={currentCount}
                        handler={handleCountChange}
                    />
                    <Button
                        onClick={()=>{alert()}}
                        position={isMobile?'absolute':'inherit'}
                        top={isMobile?-8:0}
                        variant={'ghost'}
                        fontSize={'14px'}
                        p={0}
                        h={'fit-content'}
                        fontWeight={300}
                        color={'#F49AA5'}
                        textDecoration={'underline'}
                        textUnderlineOffset={'4px'}
                        _hover={{background:'transparent'}}
                        rightIcon={ <Icon
                                    width={"16px"}
                                    height={"16px"}
                                    viewBox={"0 0 16 16"}
                                    fill={"#F49AA5"}
                                    >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M8.56825 0.5C8.56825 0.223858 8.34439 0 8.06825 0C7.7921 0 7.56825 0.223858 7.56825 0.5V7.56841H0.5C0.223858 7.56841 0 7.79227 0 8.06841C0 8.34455 0.223858 8.56841 0.5 8.56841H7.56825V15.5C7.56825 15.7761 7.79211 16 8.06825 16C8.34439 16 8.56825 15.7761 8.56825 15.5V8.56841H15.5C15.7761 8.56841 16 8.34455 16 8.06841C16 7.79227 15.7761 7.56841 15.5 7.56841H8.56825V0.5Z"
                                        fill="#F49AA5"
                                    />
                                    </Icon>} 
                    >
                    Добавить грузик
                    </Button>
                    <IconButton
                        onClick={handleRemove}
                        aria-label='remove basket item'
                        bg={'#90BCE4'}
                        icon={<Image
                            src="/trash.svg"
                            alt="Basket icon"
                            width={16}
                            height={16}
                            priority
                        />}
                    />
                </Box>}
            </VStack>
            {isConfirm && <Text fontSize={20} pr={isMobile?12:0}>{value}</Text>}
        </HStack>
    )
}

export default BasketItem