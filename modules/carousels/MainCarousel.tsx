"use client";
import { useState } from "react";
import CustomStack from "../../components/CustomStack/CustomStack";
import { Box, Button, Heading, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react";
import Slider from 'react-slick'
import ContentContainer from "@/components/ContentContainer/ContentContainer";


  const items =  [
      {
        id: 1,
        title: "Оформление",
        subtitle:"надувными шарами",
        body: "Широкий выбор оформления праздника для вашего ребенка",
        imageUrl: "https://storage.yandexcloud.net/calca-web/oformlenie.png"
      },
      {
        id: 2,
        title: "Оформление",
        subtitle:"надувными шарами",
        body: "Широкий выбор оформления праздника для вашего ребенка",
        imageUrl: "https://res.cloudinary.com/kizmelvin/image/upload/v1587785064/kizmelvin/michael-BcgEo2CNeYA-unsplash_cdaruk.jpg"
      },
      {
        id: 3,
        title: "Оформление",
        subtitle:"надувными шарами",
        body: "Широкий выбор оформления праздника для вашего ребенка",
        imageUrl: "https://res.cloudinary.com/kizmelvin/image/upload/v1586799827/kizmelvin/brownlion_qm8hah.jpg"
      },
      {
        id: 4,
        title: "Оформление",
        subtitle:"надувными шарами",
        body: "Широкий выбор оформления праздника для вашего ребенка",
        imageUrl: "https://res.cloudinary.com/kizmelvin/image/upload/v1587870308/kizmelvin/edvin-johansson-5AylXcpJn1I-unsplash_lbhgod.jpg"
      }
    ]

// Settings for the slider

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
}
type CustomSlider = InstanceType<typeof Slider>
export default function MainCarousel() {
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    })
  const side = useBreakpointValue({ base: '30%',sm:"2%", md: '10%' },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'md',
    })

  // const handleSelect = (selectedIndex: number) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <Box position={'relative'} height={'100vh'} width={'100vw'} overflow={'hidden'}>
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
        onClick={() => slider?.slickPrev()}>
            <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
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
        onClick={() => slider?.slickNext()}>
        <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
          <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
          <path
            d="M31.3536 21.6464C31.5488 21.8417 31.5488 22.1583 31.3536 22.3536L28.1716 25.5355C27.9763 25.7308 27.6597 25.7308 27.4645 25.5355C27.2692 25.3403 27.2692 25.0237 27.4645 24.8284L30.2929 22L27.4645 19.1716C27.2692 18.9763 27.2692 18.6597 27.4645 18.4645C27.6597 18.2692 27.9763 18.2692 28.1716 18.4645L31.3536 21.6464ZM13 21.5L31 21.5L31 22.5L13 22.5L13 21.5Z"
            fill="#90BCE4"
          />
        </Icon>
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {items.map(({imageUrl,...item}, index) => (
            <Box
            height={'100vh'}
            key={index}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            textAlign={'center'}
            backgroundSize="cover"
            backgroundImage={`url(${imageUrl})`}
          >
          <ContentContainer>
<div
              style={{
                padding:"110px 0 110px 100px",
                height:'100vh',
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
              }}>
                <Text style={{
                  fontFamily:'TS_Remarker',
                  fontStyle:'normal',
                  color:'white',
                  fontWeight:400,
                  textTransform:"uppercase",
                  fontSize:'60px'
                }}>Тест ШРИФТА Ts-remarker</Text>
              <CustomStack variant="column" gap={76}>
                <CustomStack variant="column" gap={17}>
                  <CustomStack variant="column" gap={0}>
                    <Heading variant={'main_header'}>{item.title}</Heading>
                    <Heading variant={'sub_header'}>{item.subtitle}</Heading>
                  </CustomStack>

                  <Text variant={'banner_text'}>{item.body}</Text>
                </CustomStack>
                <Button variant="solid" width={200}>
                  выбрать
                </Button>
              </CustomStack></div>
          </ContentContainer>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
