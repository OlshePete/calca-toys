'use client';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import React, { useRef } from 'react';
import { ServicesCarouselProps } from '@apptypes';
import { useRouter } from 'next/navigation';
import { Box, ButtonGroup } from '@chakra-ui/react';
import ServicePreview from '../cards/ServicePreview';
import CustomHeading from '../../ui/Heading/CustomHeading';
import Arrow from '../../ui/icons/Arrow';
import CustomButton from '../../ui/Buttons/CustomButton';
import BaseCarousel from './BaseCarousel';

function ServicesCarousel({ label, services }: ServicesCarouselProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  function handleScroll(e: React.MouseEvent<HTMLButtonElement>, flag: boolean) {
    if (containerRef.current)
      containerRef.current.scrollBy({
        left: flag ? -500 : 500,
        behavior: 'smooth',
      });
  }
  return <BaseCarousel
    label=''
    products={[]}
    withButton
    components={{
      label: <CustomHeading visual={'post_header'} style={{}}>
        {label}
      </CustomHeading>,
      items: services.map((service, index) => {
        return <ServicePreview key={service.name + index} service={service} />;
      }),
      button: <CustomButton onClick={() => router.push('/catalog/services/decoration')} visual="outline" className="text">
        смотреть все
      </CustomButton>
    }}
  />
  // return (
  //   <Box
  //     style={{
  //       position: 'relative',
  //     }}
  //   >
  //     <ContentContainer>
  //       <Box display={'flex'} justifyContent={'space-between'} height={'auto'}>
  //         <CustomHeading visual={'post_header'} style={{}}>
  //           {label}
  //         </CustomHeading>
  //         <ButtonGroup variant="outline">
  //           <Arrow
  //             format='left'
  //             onClick={(e) => handleScroll(e, true)}
  //             className="nav_icon"
  //             aria-label="scroll left"
  //             width={'44px'}
  //             height={'44px'}
  //           />
  //           <Arrow
  //             format='rigth'
  //             onClick={(e) => handleScroll(e, false)}
  //             className="nav_icon"
  //             aria-label="scroll right"
  //             width={'44px'}
  //             height={'44px'}
  //           />
  //         </ButtonGroup>
  //       </Box>
  //       <div
  //         ref={containerRef}
  //         className="hideScroll"
  //         style={{
  //           display: 'flex',
  //           flexDirection: 'row',
  //           gap: '30px',
  //           height: '494px',
  //           overflowX: 'scroll',
  //           margin: '20px 0 20px 0',
  //           paddingRight: '120px',
  //         }}
  //       >
  //         {services.map((service, index) => {
  //           return <ServicePreview key={service.name + index} service={service} />;
  //         })}
  //       </div>
  //       <Box display={'flex'} justifyContent={'center'}>
  //         <CustomButton onClick={() => router.push('/catalog/services/decoration')} visual="outline" className="text">
  //           смотреть все
  //         </CustomButton>
  //       </Box>
  //     </ContentContainer>
  //   </Box>
  // );
}

export default ServicesCarousel;
