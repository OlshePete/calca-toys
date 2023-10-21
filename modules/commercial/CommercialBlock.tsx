import ContentContainer from '@/components/ContentContainer/ContentContainer'
import Image from 'next/image'
import React from 'react'
import PosterContent from './PosterContent'

function CommercialBlock() {
  return (
    <ContentContainer>
      <div style={{
        height:'598px',
        position:'relative',
        display:"flex",
        flexDirection:"column",
        justifyContent:'flex-end',
      }}>
        <Image
        src={"https://storage.yandexcloud.net/calca-web/commercial1.png"}
        alt='commercial background'
        width={518}
        height={598}
        style={{
          position:"absolute",
          bottom:0,
          right:'130px'
        }}
        />
        <PosterContent/>
      </div>
    </ContentContainer>
  )
}

export default CommercialBlock