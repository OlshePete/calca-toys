import BreadCrumb from '@/components/BreadCrumb/BreadCrumb'
import ContentContainer from '@/components/ContentContainer/ContentContainer'
import ListItemWrapper from '@/components/ListItemWrapper/ListItemWrapper'
import { getAllCategoryName } from '@/services/categories/getCategories'
import { getProductTypes } from '@/services/products/getProductsAttributes'
import { IProductType, IResponseData } from '@/types/api'
import CustomTitle from '@/ui/typographies/CustomTitle'
import { Link } from '@chakra-ui/react'
import Image from 'next/image'

export default async function Home() {
  const categoryNames = await getAllCategoryName()
  const productTypes = await getProductTypes()
  const pageTitle = 'Каталог'
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const serviceBlock = {
    id:productTypes.data.length,
    attributes:{
      internal:"services",
      title:'Услуги',
      image:{

      },
      createdAt:"",
      publishedAt:"",
      updatedAt:"",
    }
  } 
  const types = [...productTypes.data]
  return (
    <div style={{
      background:'#FEF7E6',
      padding: '44px 0'
    }}>
      <ContentContainer position={'sticky'} top={0}>
      <BreadCrumb/>
      <CustomTitle variant={"post_header"} pt={"60px"} pb={"40px"}>{pageTitle}</CustomTitle>
          <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:'14px'
          }}>
          {
            [...types].map((type)=>{
              const id = type.attributes.internal
              const { title, image } = type.attributes
              const src = `${API_URL}/cms${image?.data.attributes.url}`
              
              return <ListItemWrapper key={id}>
                <Image
                  alt={ title}
                  src={src}
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
                  <Link href={`catalog/${type.attributes.internal}`}>
                    <button>
                      В Каталог
                    </button>
                  </Link>
                </div>
              </ListItemWrapper>
            })
          }
          </div>
      </ContentContainer>
    </div>
  )
}
