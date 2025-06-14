import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FooterCustomStack from '../CustomStack/FooterCustomStack'
import CustomText from '@/ui/typographies/CustomText'
import { getStartPageMetaDate } from '@/services/getMetaData'

async function FooterSummary() {
  const content = await getStartPageMetaDate()
  const name = content?.data.attributes.name;
  const internal = content?.data.attributes.internal;
  const year = new Date().getFullYear()
  return (
    <div className='footer-summary' style={{background:'transparent'}}>
      <Link href={'/'}>
        <Image
          src="/logo.svg"
          alt="Calca Logo"
          width={69}
          height={69}
          priority
        />
      </Link>
      <FooterCustomStack direction="column" gap={16}>
        <CustomText 
          fontSize={14} 
          maxWidth={{ base:'120px', lg:'100%' }}
          lineHeight={'20px'}

        >
          Мы&nbsp;принимаем к&nbsp;оплате:
        </CustomText>
        <FooterCustomStack 
          direction={{base:'column',lg:"row"}} 
          gap={16} 
          alignItems={'center'}
        >
          <Image
            src="/masterCard.svg"
            alt="masterCard Logo"
            width={41}
            height={24}
          />
          <Image
            src="/visa.svg"
            alt="visa Logo"
            width={43}
            height={24}
          />
          <Image
            src="/mir.svg"
            alt="mir Logo"
            width={43}
            height={24}
          />
        </FooterCustomStack>
      </FooterCustomStack>
      <CustomText style={{ whiteSpace: 'nowrap', fontSize: '14px', lineHeight: "22px", letterSpacing: '-0.14px', color: "#515151" }}>
        © {year} «{internal ?? name ?? ''}» все права защищены
      </CustomText>
    </div>
  )
}

export default FooterSummary