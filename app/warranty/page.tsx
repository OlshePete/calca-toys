"use client";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import ContentContainer from "@/components/ContentContainer/ContentContainer";
import DinamicContactSummary from "@/components/DinamicContactSummary/DinamicContactSummary";
import { ChildrenComponentProps } from "@/types";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface WithBoxProps extends ChildrenComponentProps {
  bg?: string;
}

const WithBox = ({ children, bg = "#EBB7BD" }: WithBoxProps) => {
  return (
    <Box
      bg={bg}
      minW={"90px"}
      maxW={"90px"}
      minH={"90px"}
      maxH={"90px"}
      borderRadius={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {children}
    </Box>
  );
};

const CustomListIcon1 = () => (
  <WithBox
    bg={"#EBB7BD"}
  >
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <path
        d="M19.2487 3.69352C20.7206 1.91206 23.4509 1.91206 24.9227 3.69352L27.1307 6.36607C27.9094 7.30853 29.1053 7.80278 30.322 7.68507L33.7779 7.35076C36.0836 7.1277 38.0197 9.06511 37.7948 11.3708L37.4627 14.7776C37.3435 16.0003 37.8423 17.2019 38.7923 17.9807L41.4436 20.1541C43.2396 21.6263 43.2396 24.3738 41.4436 25.846L38.7923 28.0194C37.8423 28.7983 37.3435 29.9998 37.4627 31.2225L37.7948 34.6294C38.0197 36.9349 36.0836 38.8724 33.7779 38.6493L30.322 38.3151C29.1053 38.1973 27.9094 38.6916 27.1307 39.634L24.9227 42.3066C23.4509 44.0881 20.7206 44.0881 19.2487 42.3066L17.0407 39.634C16.2621 38.6916 15.0662 38.1973 13.8494 38.3151L10.3936 38.6493C8.0878 38.8724 6.15186 36.9349 6.37665 34.6294L6.70881 31.2225C6.82802 29.9998 6.32923 28.7983 5.37915 28.0194L2.72789 25.846C0.931848 24.3738 0.931848 21.6263 2.72789 20.1541L5.37915 17.9807C6.32923 17.2019 6.82802 16.0003 6.70881 14.7776L6.37665 11.3708C6.15186 9.06511 8.0878 7.1277 10.3936 7.35076L13.8494 7.68507C15.0662 7.80278 16.2621 7.30853 17.0407 6.36607L19.2487 3.69352Z"
        stroke="#FEF7E6"
        strokeWidth="2"
      />
      <path
        d="M14.9512 24.4215L19.1613 28.615C19.9527 29.4033 21.258 29.3106 21.9298 28.4182L29.2197 18.7363"
        stroke="#FEF7E6"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  </WithBox>
);
const CustomListIcon2 = () => (
  <WithBox bg={"#B7D3EC"}>
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="35"
      viewBox="0 0 46 35"
      fill="none"
    >
      <path
        d="M39.9308 0H6.06918L0 12.0906L23 35L46 12.0906L39.9308 0ZM38.5906 2.15956L42.9268 10.7978H31.1455L29.6998 2.15956H38.5906ZM18.4979 2.15956H27.5021L28.9478 10.7978H17.0522L18.4979 2.15956ZM7.40942 2.15956H16.3002L14.8545 10.7978H3.07323L7.40942 2.15956ZM3.93602 12.9573H14.9918L20.52 29.476L3.93602 12.9573ZM17.2764 12.9573H28.7237L23 30.0599L17.2764 12.9573ZM25.48 29.476L31.0082 12.9573H42.064L25.48 29.476Z"
        fill="#FEF7E6"
      />
    </Icon>
  </WithBox>
);
const CustomListIcon3 = () => (
  <WithBox bg={"#FAE6AC"}>
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
    >
      <g clip-path="url(#clip0_701_3112)">
        <path
          d="M44.4206 5.17371C44.6715 5.12504 44.9335 5.17371 45.1506 5.30473C45.5212 5.45821 45.7833 5.82133 45.7833 6.24809L45.9966 36.0388C46.0154 36.4056 45.8357 36.7688 45.4988 36.9672L33.3324 44.2258C33.1602 44.3568 32.9468 44.4317 32.7147 44.4317C32.6586 44.4317 32.6024 44.4279 32.55 44.4167L0.977446 40.9053C0.43464 40.8829 0.000395742 40.4336 0.000395742 39.8833V9.58728C-0.0108347 9.18298 0.217518 8.78992 0.614328 8.61772L16.453 1.65483C16.6177 1.57996 16.8049 1.55001 16.9996 1.57621L44.4206 5.17371ZM33.7442 14.2442V41.5941L43.949 35.5072L43.7506 7.9364L33.7442 14.2442ZM31.689 42.2567V14.5324L18.2237 12.8142L17.782 25.6805L13.0539 22.4611L8.32592 25.134L9.30297 11.6761L2.05557 10.7515V38.9662L31.689 42.2567ZM29.559 5.28976L19.6275 10.9275L32.5463 12.5746L41.6018 6.86951L29.559 5.28976ZM10.5683 9.77071L20.1965 4.06189L17.022 3.64636L4.7696 9.03324L10.5683 9.77071Z"
          fill="#FEF7E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_701_3112">
          <rect width="46" height="46" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  </WithBox>
);

export default function WarrantyPage() {
  return (
    <div
      className="section  fullH"
      style={{ background: "#FEF7E6", padding: "110px 0" }}
    >
      <ContentContainer>
        <BreadCrumb />
        <Heading
          variant={"post_header"}
          pt={"60px"}
          pb={"40px"}
          style={{
            fontFamily: "TS Remarker",
          }}
        >
          ГАРАНТИИ КАЧЕСТВА
        </Heading>
        <Grid templateColumns="repeat(12, 1fr)" gap={"0px"}>
          <GridItem
            minH={"530px"}
            colSpan={7}
            display={"flex"}
            flexDirection={"column"}
            gap={"8px"}
          >
            <Heading
              variant={"privacy_header"}
              textTransform={"uppercase"}
              fontSize={"16px"}
              fontWeight={500}
            >
              Мы прилагаем максимум усилий, чтобы ассортимент магазина состоял
              из товаров высокого качества и отвечал высоким требованиям
              покупателей
            </Heading>
            <List spacing={'22px'}pt={'28px!important'}>
              <ListItem display={"flex"} alignItems={"center"} gap={"33px"}>
                <ListIcon as={CustomListIcon1} width={'90px'} height={'90px'}/>
                <Text flexGrow={1}>
                Тщательно выбираем поставщиков и партнеров</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"} gap={"33px"}>
                <ListIcon as={CustomListIcon2}  width={'90px'} height={'90px'}/>
                <Text>
                Допускаем в продажу только сертифицированные товары надлежащего
                качества</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"} gap={"33px"}>
                <ListIcon as={CustomListIcon3}  width={'90px'} height={'90px'}/>
                <Text>
                Соблюдаем все необходимые условия хранения и транспортировки</Text>
              </ListItem>
            </List>
            <Text variant={"privacy_text"}pt={'40px!important'}>
              Если по какой-то причине к вам попал товар ненадлежащего качества
              — свяжитесь с нами, мы оперативно урегулируем любое недоразумение
            </Text>
          </GridItem>
          <GridItem minH={"530px"} colStart={9} colEnd={13}>
            <DinamicContactSummary />
          </GridItem>
        </Grid>
      </ContentContainer>
    </div>
  );
}
