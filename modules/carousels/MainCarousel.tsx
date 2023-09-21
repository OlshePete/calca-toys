"use client";
import { useState } from "react";
import { items } from "../../public/start_items_carousel.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../styles/Bootstrap.module.css";
import CustomStack from "../../components/CustomStack/CustomStack";
import CustomTitle from "@/ui/typographies/CustomTitle";
import CustomText from "@/ui/typographies/CustomText";
import { Button, Heading, Icon, Text } from "@chakra-ui/react";
export default function MainCarousel() {
  const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      prevIcon={
        <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
          <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
          <path
            d="M12.6464 21.6464C12.4512 21.8417 12.4512 22.1583 12.6464 22.3536L15.8284 25.5355C16.0237 25.7308 16.3403 25.7308 16.5355 25.5355C16.7308 25.3403 16.7308 25.0237 16.5355 24.8284L13.7071 22L16.5355 19.1716C16.7308 18.9763 16.7308 18.6597 16.5355 18.4645C16.3403 18.2692 16.0237 18.2692 15.8284 18.4645L12.6464 21.6464ZM31 21.5L13 21.5L13 22.5L31 22.5L31 21.5Z"
            fill="#90BCE4"
          />
        </Icon>
      }
      nextIcon={
        <Icon viewBox="0 0 44 44" width={"44px"} height={"44px"}>
          <circle cx="22" cy="22" r="22" fill="#FEF7E6" />
          <path
            d="M31.3536 21.6464C31.5488 21.8417 31.5488 22.1583 31.3536 22.3536L28.1716 25.5355C27.9763 25.7308 27.6597 25.7308 27.4645 25.5355C27.2692 25.3403 27.2692 25.0237 27.4645 24.8284L30.2929 22L27.4645 19.1716C27.2692 18.9763 27.2692 18.6597 27.4645 18.4645C27.6597 18.2692 27.9763 18.2692 28.1716 18.4645L31.3536 21.6464ZM13 21.5L31 21.5L31 22.5L13 22.5L13 21.5Z"
            fill="#90BCE4"
          />
        </Icon>
      }
    >
      {bootstrap.map((item) => (
        <Carousel.Item
          key={item.id}
          className={styles.itemP}
          interval={8000}
          style={{}}
        >
          <img src={item.imageUrl} alt="slides" />
          {/* <Image
          alt="slides"
          src={item.imageUrl}
          width={1000}
          height={1000}
          /> */}
          {/* <img src={} alt="slides" /> */}
          <Carousel.Caption className={styles.caption}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                padding: "110px 0",
                height: "100vh",
              }}
            >
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
              </CustomStack>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
