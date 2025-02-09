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