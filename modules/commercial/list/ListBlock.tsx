import Image from 'next/image'
import React from 'react'
import ListPosterContent from './ListPosterContent'
type ListBlockProps = {
  internal?: string | null
}

const ListBlock:React.FC<ListBlockProps> = ({internal})=> {
  return (
      <div style={{
        height:'538px',
        background:"#E1ECEE",
        borderRadius:"14px",
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
          bottom:0,
          right:0
        }}
        />
          <ListPosterContent/>
      </div>
  )
}

export default ListBlock 