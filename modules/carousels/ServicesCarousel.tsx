"use client";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import React, { useRef } from "react";
import ProductPreview from "../cards/ProductPreview";
import { ServicesCarouselProps } from "@/types";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import ServicePreview from "../cards/ServicePreview";

function ServicesCarousel({ label, services }: ServicesCarouselProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  function handleScroll(e: React.MouseEvent<HTMLButtonElement>, flag: boolean) {
    if (containerRef.current)
      containerRef.current.scrollBy({
        left: flag ? -500 : 500,
        behavior: "smooth",
      });
  }
  return (
    <Box  
    // pr={"240px"}
    style={{
      position:'relative'
    }}>
      <ContentContainer>
        
      <Box display={"flex"} justifyContent={"space-between"} height={'auto'}
      >
        <Heading variant={"post_header"}>{label}</Heading>
        <ButtonGroup variant="outline" spacing="6">
          <IconButton
            onClick={(e) => handleScroll(e, true)}
            className="nav_icon"
            aria-label="scroll left"
            width={"44px"} height={"44px"}
            icon={
              <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
                <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
                <path
                  d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM31 21.5L13 21.5L13 22.5L31 22.5L31 21.5Z"
                  fill="#90BCE4"
                />
              </Icon>
            }
          />
          <IconButton
            onClick={(e) => handleScroll(e, false)}
            className="nav_icon"
            aria-label="scroll right"
            width={"44px"} height={"44px"}
            icon={
              <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
                <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
                <path
                  d="M31.3536 21.6464C31.5488 21.8417 31.5488 22.1583 31.3536 22.3536L28.1716 25.5355C27.9763 25.7308 27.6597 25.7308 27.4645 25.5355C27.2692 25.3403 27.2692 25.0237 27.4645 24.8284L30.2929 22L27.4645 19.1716C27.2692 18.9763 27.2692 18.6597 27.4645 18.4645C27.6597 18.2692 27.9763 18.2692 28.1716 18.4645L31.3536 21.6464ZM13 21.5L31 21.5L31 22.5L13 22.5L13 21.5Z"
                  fill="#90BCE4"
                />
              </Icon>
            }
          />
        </ButtonGroup>
      </Box>
      </ContentContainer>
      <div
        ref={containerRef}
        className="hideScroll"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          height: "494px",
          overflowX: "scroll",
          margin: "20px 0 20px 200px",
          paddingRight:'120px'
        }}
      >
        {services.map((service,index) => {
          return (
            <ServicePreview key={service.name + index} service={service} />
          );
        })}
      </div>
      <Box
      display={'flex'}
      justifyContent={'center'}
      >
      <Button onClick={() => router.push("/catalog")} variant="outline" className="text">
        смотреть все
      </Button>
      </Box>
    </Box>
  );
}

export default ServicesCarousel;
