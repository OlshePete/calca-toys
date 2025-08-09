'use client';
import { useState } from 'react';
import CustomStack from '../../components/CustomStack/CustomStack';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import { IMainCarouselContent } from '../../types/api';
import CustomHeading from '../../ui/Heading/CustomHeading';
import CustomText from '../../ui/Text/CustomText';
import CustomButton from '../../ui/Buttons/CustomButton';
import Arrow from '../../ui/icons/Arrow';

const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
interface ICarouselProps {
  data: IMainCarouselContent;
}
export default function MainCarousel({ data }: ICarouselProps) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const items = data.data;
  const [slider, setSlider] = useState<Slider | null>(null);
  const top = useBreakpointValue(
    { base: '96dvh', md: '50%' },
    {
      fallback: 'md',
    }
  );
  const side = useBreakpointValue(
    { base: '2%', sm: '2%', md: '12px', lg: '40px', xl: '6%' },
    {
      fallback: 'md',
    }
  );

  return (
    <Box position={'relative'} height={'100dvh'} width={'100vw'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <Arrow
        format='left'
        colorScheme="messenger"
        borderRadius="100%"
        position="absolute"
        background={'brand.900'}
        _hover={{
          border:'2px solid #FEF7E6'
        }}
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      />
      {/* Right Icon */}
      <Arrow
        format='rigth'
        colorScheme="messenger"
        borderRadius="100%"
        position="absolute"
        background={'brand.900'}
        _hover={{
          border:'2px solid #FEF7E6'
        }}
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      />
      {/* Slider */}
      <Slider {...settings} ref={slider => {
        setSlider(slider);
      }}>
        {items &&
          items.map((initial, index) => {
            const item = initial.attributes;
            const imageUrl = item.image.data.attributes.url;
            return (
              <Box
                height={'100svh'}
                key={index}
                backgroundPosition={useBreakpointValue({ base: '64% top', md: 'center' })}
                backgroundRepeat="no-repeat"
                textAlign={'center'}
                backgroundSize="cover"
                backgroundImage={`url(${API_URL}/cms${imageUrl})`}
              >
                <ContentContainer>
                  <div
                    style={{
                      padding: useBreakpointValue({
                        base: '110px 0 110px 0',
                        md: '110px 0 110px 100px',
                      }),
                      height: '100svh',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                    }}
                  >
                    <CustomStack variant="column" gap={80}>
                      <CustomStack variant="column" gap={20}>
                        <CustomStack variant="column" gap={0}>
                          {(() => {
                            const words = item.title.split(' ');
                            const firstWord = words[0];
                            const restWords = words.slice(1).join(' ');
                            return (
                              <>
                                <CustomHeading
                                  visual={'main_header'}
                                  style={{
                                    display: 'inline',
                                    whiteSpace: 'nowrap',
                                  }}
                                >
                                  {firstWord}
                                </CustomHeading>
                                {restWords && (
                                  <CustomHeading
                                    visual={'main_header'}
                                    className="sub_header"
                                    style={{
                                      display: 'inline',
                                      whiteSpace: 'nowrap',
                                    }}
                                  >
                                    {restWords}
                                  </CustomHeading>
                                )}
                              </>
                            );
                          })()}
                          <CustomHeading
                            visual={'sub_header'}
                            style={{
                              textAlign: 'left',
                            }}
                          >
                            {item.subtitle}
                          </CustomHeading>
                        </CustomStack>

                        <CustomText visual={'banner_text'}>{item.body}</CustomText>
                      </CustomStack>
                      <CustomButton visual="solid" width={200} height={55} label="pick_main_carousel_item">
                        выбрать
                      </CustomButton>
                    </CustomStack>
                  </div>
                </ContentContainer>
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
}
