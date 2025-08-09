'use client';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import React, { useRef } from 'react';
import ProductPreview from '../cards/ProductPreview';
import { BaseCarouselProps } from '@apptypes';
import { useRouter } from 'next/navigation';
import { Box,  ButtonGroup } from '@chakra-ui/react';
import CustomHeading from '../../ui/Heading/CustomHeading';
import CustomButton from '../../ui/Buttons/CustomButton';
import Arrow from '../../ui/icons/Arrow';

function BaseCarousel({
  label,
  products: baseProducts,
  dinamicMarginLeft = true,
  link,
  withButton = true,
  components,
  ...boxProps
}: BaseCarouselProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const showComponents = Boolean(components)
  const products = baseProducts;

  function handleScroll(e: React.MouseEvent<HTMLButtonElement>, flag: boolean) {
    if (containerRef.current)
      containerRef.current.scrollBy({
        left: flag ? -500 : 500,
        behavior: 'smooth',
      });
  }
  return (
    <Box
      style={{
        position: 'relative',
      }}
      {...boxProps}
    >
      <ContentContainer>
        <Box display={'flex'} justifyContent={'space-between'} height={'auto'}>
          {
            showComponents ? 
              components?.label :
              <CustomHeading visual={'post_header'}>
                {label}
              </CustomHeading>
          }
          
          <ButtonGroup variant="outline" style={{border:'none',marginTop:'12px'}}>
            <Arrow
              format='left'
              onClick={(e) => handleScroll(e, true)}
              className="nav_icon"
              aria-label="scroll left"
              width={'44px'}
              height={'44px'}
            />
            <Arrow
              format='rigth'
              onClick={(e) => handleScroll(e, false)}
              className="nav_icon"
              aria-label="scroll right"
              width={'44px'}
              height={'44px'}
            />
          </ButtonGroup>
        </Box>
      <div
        ref={containerRef}
        className="hideScroll"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          height: '494px',
          overflowX: 'scroll',
          margin: '20px 0 20px 0',
          paddingRight: '120px',
        }}
      >
        {showComponents && components?.items}
        {!showComponents && products &&
          products.map((product) => {
            return <ProductPreview key={product.id + product.attributes.name} product={product} />;
          })}
      </div>
      {withButton && (
        <Box display={'flex'} justifyContent={'center'}>
          {!showComponents ?
            <CustomButton onClick={() => router.push(`/catalog${link}`)} visual="outline" className="text">
              смотреть все
            </CustomButton> :
            components?.button
            }
        </Box>
      )}
      </ContentContainer>
    </Box>
  );
}

export default BaseCarousel;
