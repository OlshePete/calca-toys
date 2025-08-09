import BreadCrumb from '@components/BreadCrumb/BreadCrumb';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import ListItemWrapper from '@components/ListItemWrapper/ListItemWrapper';
import { getAllCategoryName } from '@services/categories/getCategories';
import { getProductTypes } from '@services/products/getProductsAttributes';
// import { IProductType, IResponseData } from '@/types/api';
import Heading from '../../ui/Heading/CustomHeading';
import { Card, Link, List } from '@chakra-ui/react';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
  console.log('catalog page prerender')
  const categoryNames = await getAllCategoryName();
  const productTypes = await getProductTypes();
  const pageTitle = 'Каталог';
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const types = [...productTypes.data];
  return (
    <div
      style={{
        background: '#FEF7E6',
        padding: '44px 0',
      }}
    >
      <Suspense fallback={<>Loading...</>}>
        <ContentContainer position={'sticky'} top={0}>
          <BreadCrumb />
          <Heading visual={'post_header'} pt={'60px'} pb={'40px'}>
            {pageTitle}
          </Heading>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            {[...types].map((type) => {
              const id = type.attributes.internal;
              const { title, image } = type.attributes;
              const src = `${API_URL}/cms${image?.data.attributes.url}`;

              return (
                <ListItemWrapper key={id}>
                    <Image
                      alt={title}
                      src={src}
                      fill={true}
                      style={{
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        zIndex: 10,
                        height: '40%',
                        color: 'white',
                        background: 'rgba(0,0,0,.4)',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                     <Heading visual={'post_header'} fontSize={28} color={'white'}>
                        {title}
                      </Heading>
                      {/* <span>{subtitle}</span> */}
                      <Link href={`catalog/${type.attributes.internal}`}>
                        <button>В Каталог</button>
                      </Link>
                    </div>
                </ListItemWrapper>
              );
            })}
          </div>
        </ContentContainer>
      </Suspense>
    </div>
  );
}
