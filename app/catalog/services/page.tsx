import Breadcrumbs from '@/components/BreadCrumb/BreadCrumb'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import ListItemWrapper from '@/components/ListItemWrapper/ListItemWrapper'
import BasketContent from '@/components/PageContents/BasketContent'
import { getAllServices } from '@/services/services/getService'
import CustomButton from '@/ui/Buttons/CustomButton'
import CustomTitle from '@/ui/typographies/CustomTitle'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const title = "Услуги"
  const data = await getAllServices()

  const services = data.data
  return (
    <div>
      <div className='section  fullH'  style={{background:"#FEF7E6",padding:'44px 0' }}>
        <ContentContainer>
          <Breadcrumbs/>
          <CustomTitle variant={"post_header"} pt={"60px"} pb={"40px"}>{title}</CustomTitle>
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'14px'
          }}>

          {
            [...services].map(((service,Skey)=>{
              const id = service.id
              const { title, subtitle, image, internal } = service.attributes
              return <ListItemWrapper key={id}>
                <Image
                  alt={image.data.attributes.alternativeText ?? title}
                  src={image.data?`${API_URL}/cms${image.data.attributes.formats?.medium?.url ?? image.data.attributes.url}`:"/"}
                  fill={true}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div 
                  style={{
                    zIndex:10,
                    height:'40%',
                    color:'white',
                    background:"rgba(0,0,0,.4)",
                    padding:'1rem',
                    display:"flex",
                    flexDirection:'column',
                    justifyContent:'space-between'
                  }}
                >
                  <CustomTitle variant={"post_header"} fontSize={28} color={'white'}>{title}</CustomTitle>
                  {/* <span>{subtitle}</span> */}
                  <Link href={`services/${internal}`}>
                    <button>
                      К услуге
                    </button>
                  </Link>
                </div>
              </ListItemWrapper>
            }))
          }
          </div>
          
        </ContentContainer>
      </div>
    </div>
  )
}
