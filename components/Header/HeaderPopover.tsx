import { Box, Button, Icon, Image, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, VStack } from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { IAllCategoryNames } from "@/types/api";

interface IProps {
    label: string,
    categoryNames:  IAllCategoryNames | undefined,
    category:string,

}

const HeaderPopover: FC<IProps> = ({ label, categoryNames, category }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const closeBtn = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const currentCategories = category && categoryNames?.data?.filter((c, i) =>c.attributes.type===category)
  const [currentIndex, setIndex] = useState(0)
  const activeCategoryTile = categoryNames?.data.find(cat=>cat.id === currentIndex)?.attributes.title
  function onClose () {
    closeBtn.current?.click()
  }
    return <Popover>
        <PopoverTrigger>
            <Button
                variant={'header_link'}
                borderRadius={0}
                minHeight={'100%'}
                _hover={{
                    textDecoration: 'underline'
                }}
            >{label}</Button>
        </PopoverTrigger>
        <PopoverContent width="712px" maxWidth="712px" height={'450px'} bg={'#E1ECEE'}
            position={'absolute'} left={0}
        >
            <PopoverBody
                w={'100%'}
                maxW={'100%'}
                h={'100%'}
                maxH={'100%'}
                padding={'40px 40px 45px 40px'}
            >
                {label}
                <PopoverCloseButton ref={closeBtn}/>
                <PopoverHeader>
                    <Box 
                        display={'flex'} 
                        h={'100%'} 
                        w={'100%'}
                        maxH={'100%'}
                        overflow={'hidden'}
                    >
                    <VStack width={'240px'} minW={'240px'}>
                        {
                        currentCategories && currentCategories.map((category, i) => {
                            return <Button
                            variant={'header_popper_category'}
                            className={i === currentIndex ? 'active_category' : ''}
                            key={category.id}
                            onClick={() => setIndex(i)}
                            >
                            <Image
                                src={`${API_URL}/cms${category.attributes.icon.data.attributes.url}`}
                                alt="Product avaliable in stock"
                                bg={'transparent'}
                                p={'2px'}
                                position={'absolute'}
                                left={0}
                            />
                            {category.attributes.title}
                            <Icon
                                position={'absolute'}
                                className='expand_icon'
                                right={0}
                                width="19px"
                                height="8px"
                                viewBox="0 0 21 10"
                                fill="none"
                                transition={'all .2s ease-in-out'}
                                transform={'rotate(-90deg)'}>
                                <path
                                d="M1 1L10.5 8L20 1"
                                stroke="#313131"
                                strokeLinecap="round"
                                />
                            </Icon>
                            </Button>
                        })
                        }
                        <Button
                        variant={'header_popper_category'}
                        className='to_catalog'
                        onClick={()=>{
                            router.push(`/catalog/${category}`)
                            onClose()
                        }}
                        >
                        ВЕСЬ КАТАЛОГ
                        </Button>
                    </VStack>
                    <Box
                        height={'100%'}
                        minHeight={'100%'}
                        display={'flex'}
                        flexDirection={'column'}
                        flexWrap={'wrap'}
                        flexGrow={1}
                        px={'40px'}
                        gap={'14px'}
                    >
                        {
                        currentCategories && currentCategories[currentIndex] && currentCategories[currentIndex]?.attributes.tags.data.map((variant, variantIndex) => {
                            if (variantIndex > 12) return null
                            return <Button
                            key={variant.id}
                            variant={'header_popper_category'}
                            className='only_text'
                            onClick={()=>{
                                router.push(`/catalog/${category}?holiday=${variant.attributes.title}`)
                                onClose()
                            }}
                            >
                            {variant.attributes.title}
                            </Button>
                        })
                        }
                        {currentCategories && <Button
                        variant={'header_popper_category'}
                        className='only_text to_catalog'
                            onClick={()=>{
                                router.push(`/catalog/${category}`)
                                onClose()
                            }}>
                        {activeCategoryTile}
                        </Button>}
                    </Box>
                    </Box>
                </PopoverHeader>
            </PopoverBody>
        </PopoverContent>
    </Popover>
}
export { HeaderPopover }