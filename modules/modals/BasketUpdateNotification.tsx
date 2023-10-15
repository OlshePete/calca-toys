'use client'
import { RootState } from '@/app/GlobalRedux/store';
import { BasketItem, Product } from '@/types';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function BasketUpdateNotification() {
  const { isOpen, onOpen, onClose,  } = useDisclosure()
  const dispatch = useDispatch();
  const basketItems: BasketItem[] = useSelector(
    (state: RootState) => state.basket.items
  );
  console.log('====================================');
  console.log(basketItems);
  console.log('====================================');
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
              basketItems && basketItems.map((item)=>{
                return <Box key={item.product.id}>
                  {item.product.name}
                  {/* {console.log(item.product)} */}
                  </Box>
              })
            }  
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BasketUpdateNotification