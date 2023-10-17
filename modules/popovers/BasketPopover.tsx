'use client'
import { Button, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

function BasketPopover() {
  return (
    <Popover>
    <PopoverTrigger>
      <IconButton
      aria-label='basket icon'
      icon={<Image
                src="/basket.svg"
                alt="BasketItem icon"
                width={40}
                height={40}
                priority
              />}
      />
    </PopoverTrigger>
    <PopoverContent>
      <PopoverCloseButton />
      <PopoverHeader>Confirmation!</PopoverHeader>
      <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    </PopoverContent>
</Popover>
  )
}

export default BasketPopover