'use client'
import { ChildrenComponentProps } from '@/types'
import { Container } from '@chakra-ui/react'
import React from 'react'

function ContentContainer({children}:ChildrenComponentProps) {
  return (
    <Container maxW={'1170px'}>
      {children}
    </Container>
  )
}

export default ContentContainer