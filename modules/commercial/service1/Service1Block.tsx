import Image from 'next/image'
import React from 'react'
import Service1PosterContent from './Service1PosterContent'
import ImageAbsoluteWrapper from './ImageAbsoluteWrapper'
type Service1BlockProps = {
}

const Service1Block:React.FC<Service1BlockProps> = ()=> {
  return (
      <div style={{
        height:'598px',
        position:'relative',
        display:"flex",
        flexDirection:"column",
        justifyContent:'flex-end',
      }}>
        <ImageAbsoluteWrapper>

        <Image
        src={"https://storage.yandexcloud.net/calca-web/commercial1.png"}
        alt='commercial background'
        width={518}
        height={598}
        style={{
        }}
        />
        </ImageAbsoluteWrapper>

          <Service1PosterContent/> 
      </div>
  )
}

export default Service1Block