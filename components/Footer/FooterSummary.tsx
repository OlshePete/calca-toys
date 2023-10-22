import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomStack from '../CustomStack/CustomStack'
import CustomText from '@/ui/typographies/CustomText'

function FooterSummary() {
  return (
    <div  className='footer-summary'>
      <Link href={'/'}>
            <Image
              src="/logo.svg"
              alt="Calca Logo"
              width={69}
              height={69}
              priority
            /></Link>
            <CustomStack variant="column" gap={16}>
            <CustomText fontSize={14} style={{
              maxWidth:'108px',
              lineHeight:'20px',
            }}>
              Мы&nbsp;принимаем к оплате:
            </CustomText>
            <CustomStack variant="row" gap={16} style={{
              alignItems:'center'
            }}>

            <Image
              src="/masterCard.svg"
              alt="masterCard Logo"
              width={41}
              height={24}
              priority
            />
            <Image
              src="/visa.svg"
              alt="visa Logo"
              width={43}
              height={24}
              priority
            />
            <Image
              src="/mir.svg"
              alt="mir Logo"
              width={43}
              height={24}
              priority
            />
            </CustomStack>
            </CustomStack>
            <CustomText style={{whiteSpace:'nowrap', fontSize:'14px', lineHeight:"22px", letterSpacing:'-0.14px', color:"#515151"}}>
              © 2023 «Vellum.paper» все права защищены 
            </CustomText>
            </div>
  )
}

export default FooterSummary