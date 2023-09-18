import { Container } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import ContentContainer from '../ContentContainer/ContentContainer'
import FooterNav from './FooterNav'
import FooterSummary from './FooterSummary'

function Footer() {
  return (
    <footer>
      <ContentContainer>
        <FooterSummary/>
        <FooterNav/>
      </ContentContainer>
    </footer>
  )
}

export {Footer}