import Image from 'next/image'
import React from 'react'
import AlonePosterContent from './AlonePosterContent'
import ImageAbsoluteWrapper from './ImageAbsoluteWrapper'
type AloneBlockProps = {
  internal?: string | null
}

const AloneBlock:React.FC<AloneBlockProps> = ({internal})=> {
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
        />
        </ImageAbsoluteWrapper>
          <AlonePosterContent/> 
      </div>
  )
}

export default AloneBlock 