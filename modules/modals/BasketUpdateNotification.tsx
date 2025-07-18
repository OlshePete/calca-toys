'use client';
import { useBasketStore } from '@/store/basketStore';
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function BasketUpdateNotification() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {basket} = useBasketStore()
  const basketItems = Object.values(basket.items ?? {})
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {basketItems &&
              basketItems.map((item) => {
                return (
                  <Box key={item.product.id}>
                    {item.product.attributes.name}
                  </Box>
                );
              })}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasketUpdateNotification;
