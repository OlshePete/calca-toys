import ContentContainer from '@/components/ContentContainer/ContentContainer'
import React from 'react'
import Service1Block from './service1/Service1Block'
import Service2Block from './service2/Service2Block'
type CommercialWrapperProps = {
    variant: "service1" | "service2"
}

const CommercialWrapper:React.FC<CommercialWrapperProps> = ({variant="service1"})=> {
  return (
    <ContentContainer>
        {
          variant==="service1" ?<Service1Block/> :<Service2Block/> 
        }
        
    </ContentContainer>
  )
}

export default CommercialWrapper