import Image from 'next/image'
import React from 'react'
import Service2PosterContent from './Service2PosterContent'
type Service2BlockProps = {
}

const Service2Block:React.FC<Service2BlockProps> = ()=> {
  return (
      <div style={{
        height:'538px',
      background:"#E1ECEE",
        borderRadius:"14px",
        // position:'relative',
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:'flex-end',
      }}>
        <Image
        src={"https://storage.yandexcloud.net/calca-web/commercial2.png"}
        alt='commercial2 background'
        width={585}
        height={538}
        style={{
          flexGrow:1,
          width:'min(50%,585px)',
          objectFit:'cover',
          objectPosition:' right center',
          // position:"absolute",
          bottom:0,
          right:0
        }}
        />
          <Service2PosterContent/>
      </div>
  )
}

export default Service2Block