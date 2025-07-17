'use client';
import { useRef, useState } from 'react';
import CustomStack from '../../components/CustomStack/CustomStack';
import { Box, Button, Heading, Icon, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import ContentContainer from '@components/ContentContainer/ContentContainer';
import { IMainCarouselContent } from '../../types/api';
import CustomHeading from '../../ui/Heading/CustomHeading';
import CustomText from '../../ui/Text/CustomText';
import CustomButton from '../../ui/Buttons/CustomButton';

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
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <Icon viewBox="0 0 44 44" width={'44px'} height={'44px'}>
          <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
          <path
            d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM31 21.5L13 21.5L13 22.5L31 22.5L31 21.5Z"
            fill="#90BCE4"
          />
        </Icon>
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <Icon viewBox="0 0 44 44" width={'44px'} height={'44px'}>
          <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
          <path
            d="M31.3536 21.6464C31.5488 21.8417 31.5488 22.1583 31.3536 22.3536L28.1716 25.5355C27.9763 25.7308 27.6597 25.7308 27.4645 25.5355C27.2692 25.3403 27.2692 25.0237 27.4645 24.8284L30.2929 22L27.4645 19.1716C27.2692 18.9763 27.2692 18.6597 27.4645 18.4645C27.6597 18.2692 27.9763 18.2692 28.1716 18.4645L31.3536 21.6464ZM13 21.5L31 21.5L31 22.5L13 22.5L13 21.5Z"
            fill="#90BCE4"
          />
        </Icon>
      </IconButton>
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
