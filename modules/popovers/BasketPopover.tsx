'use client'
import { useBasketStore } from '@/store/basketStore'
import { Button, Heading, HStack, IconButton, List, ListItem, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text, UnorderedList, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

function BasketPopover() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const { basket } = useBasketStore()
  const { push } = useRouter()
  const pathname = usePathname()
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (!pathname.includes('basket') && Object.keys(basket.items).length > 0 && triggerRef.current) {
      triggerRef.current.click();
      setTimeout(() => triggerRef?.current?.click(), 1600)
    }
  }, [basket])
  console.log('basket', basket);
  const handleMoveToBasket = () => {
    triggerRef?.current?.click();
    push('/basket')
  }
  const handleMoveToBasketConfirm = () => {
    triggerRef?.current?.click();
    push('/basket/confirm')
  }
  return (
    <Popover
      placement='bottom-start'
    >
      <PopoverTrigger 
      >
        <IconButton
          display={useBreakpointValue({ base: 'none', lg: 'inherit' })}
          ref={triggerRef}
          aria-label='basket icon'
          mr={'20px'}
          bg={'transparent'}
          icon={<Image
            src="/basket.svg"
            alt="Basket icon"
            width={40}
            height={40}
            priority
          />}
        />
      </PopoverTrigger>
      <PopoverContent width={'420px'} bg={'#FEF7E6'} p={'0 2rem 2rem'} boxShadow={"0 4px 10px rgba(0, 0, 0, 0.1)"}>
        <PopoverHeader><Heading variant={'privacy_header'}>Корзина</Heading></PopoverHeader>
        <PopoverBody >
          {Object.keys(basket.items).length === 0 && <Text textTransform={'none'}>корзина пуста</Text>}
          {Object.keys(basket.items).length > 0 && <List spacing={3} >
            {
              basket.items && Object.values(basket.items).map((item, i) => {
                const baseName = item.product.attributes.name
                return <React.Fragment key={item.id}>
                  {
                    Object.values(item.variant).length > 0 && (
                      <ListItem display={'flex'} flexDirection={'column'} gap={'24px'}>
                        {
                          Object.values(item.variant).map((variant, key) => <HStack key={variant.id}>
                            <Image
                              alt='product small pict'
                              height={60}
                              width={40}
                              src={`${API_URL}/cms${item.product.attributes.variant[key].image.data.attributes.url}`}
                            />
                            <Text
                              flexGrow={1}
                              variant={'product_name'}
                            >
                              {baseName}{" "}{item.product.attributes.variant[key].name}
                            </Text>
                            <Text variant={'product_text'}>{variant.value}</Text>
                          </HStack>)
                        }
                      </ListItem>
                    )
                  }
                </React.Fragment>
              })
            }
            {
              Object.keys(basket.items).length > 0 && <HStack gap={'20px'} >
                <Link href={'/basket'}>
                  <Button
                    mt={'2rem'}
                    height={'44px'}
                    variant={"outline_secondary"}
                    bg={'transparent'}
                    color={'#313131'}
                    width={'160px'}
                    fontSize={'11px'}
                    onClick={handleMoveToBasket}
                  >
                    Перейти в корзину
                  </Button>
                </Link>
                <Link href={'/basket/confirm'}>
                  <Button
                    mt={'2rem'}
                    variant={"outline_secondary"}
                    className={'opposite'}
                    height={'44px'}
                    width={'160px'}
                    fontWeight={300}
                    fontSize={'11px'}
                  >
                    Оформить заказ
                  </Button>
                </Link>
              </HStack>
            }
          </List>}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default BasketPopover