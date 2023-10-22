"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import localFont from "next/font/local";
import { StoreProviders } from "./GlobalRedux/provider";
const colors = {
  brand: {
    900: "#FEF7E6",
    800: "#F49AA5",
    700: "#F15B40",
    600: "#E1ECEE",
    500: "#71BBFF",
    400: "rgba(0,0,0,.15)",
    300: "#E1ECEE",
    200: "#515151",
    100: "#313131",
  },
};

export const lato = localFont({
  variable:"--font--lato",
  src: [
    {
      path: "../public/fonts/Lato/Lato-Bold.woff",
    },
    {
      path: "../public/fonts/Lato/Lato-Medium.woff",
    },
    {
      path: "../public/fonts/Lato/Lato-Regular.woff",
    },
    {
      path: "../public/fonts/Lato/Lato-Semibold.woff",
    },
  ],
});
export const blue_curve = localFont({
  src: [
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Light.ttf",
    },
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Regular.ttf",
    },
    {
      path: "../public/fonts/Blue_curve/Bluecurve-Bold.ttf",
    },
  ],
});
export const ts_remarker = localFont({
  variable:"--font--ts-remarker",
  src: [
    {
      path: "../public/fonts/TS_remarker/TS Remarker Regular.otf",
    }
  ],
});
console.log('====================================');
console.log(blue_curve);
console.log(ts_remarker);
console.log('====================================');
export const theme = extendTheme({
  colors,
  fonts: {
    heading: ts_remarker.style.fontFamily,
    text: lato.style.fontFamily,
    body: blue_curve.style.fontFamily,
  },
  styles: {
    global: {
      body: {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        backgroundColor: "brand.900",
        maxWidth: "100vw",
        overflowX: "hidden",
        minHeight: "100vh",
      },
      main: {
        minHeight: "60vh",
      },
      a: {
        fontFamily:lato.style.fontFamily,
        textDecoration: 'none'
      },
      header: {
        backgroundColor: "rgba(0,0,0,0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,

        "& .header-info": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "brand.900",
          height: "38px",
          position: "relative",
          top: 0,
          left: 0,
          padding: 0,
          minWidth: "100vw",
        },
        "& .header-nav-container": {
        // zIndex:1000,
          minWidth: "100vw",
          backgroundColor: "rgba(0,0,0,0)",
          position: "absolute",
          top: "34px",
          left: 0,
          height: "77px",
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "& .header-nav": {
          borderRadius: "43px",
          width: "min(100%, 1170px)",
          // width:'100%',
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
          // position:'sticky',
          // top:'74px',
          // left:"calc(100vh)",
        },
        "& .basket-icon": {
          marginRight: "16px",
        },
        width: "100vw",
        // padding: ["8px", "16px", "0 50px"],
      },
      footer: {
        height: "386px",
        padding: "40px 0",
        backgroundColor: "brand.600",
        display: "flex",
        "&>div": {
          display: "flex",
          flexShrink: 1,
        },
        "&>div>.footer-summary": {
          width: "280px",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        "&>div>.footer-nav": {
          flexGrow: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        },
      },
      ".section": {
        minHeight: "60vh",
        // fontFamily: "var(--font--lato)",
      },
      ".section.fullH": {
        minHeight: "100vh",
      },
      ".product-sm": {
        width:'270px',
        height:'464px',
        display:'flex',
        flexDirection:'column',
        color:'brand.200',
      },
      "button.nav_icon > svg > circle":{
        stroke:'#F49AA5',
      },
      "button.nav_icon > svg > path":{
        fill:'#F49AA5'
      },
      "button.nav_icon.active > svg > circle":{
        fill:'#F49AA5',
      },
      "button.nav_icon.active > svg > path":{
        fill:'#FFF'
      },
    },
  },
  components: {
    Badge: {
      baseStyle: {
        backgroundColor: "brand.700",
        borderRadius:"28px",
        color:"#FFF",
        fontSize:'14px',
        lineHeight:'14px',
        fontWeight:400,
        fontFamily:lato.style.fontFamily,
        textTransform:'none',
        padding:'9px 20px'
      },
      variants:{
        discount:{
        backgroundColor: "brand.500",
        }
      }
    },
    Text: {
      baseStyle: {
        color: "brand.200",
        fontFamily: lato.style.fontFamily,
      },
      variants: {
        info_accordion_btn:{
          color: "brand.100",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          textAlign:'left',
          textTransform: "uppercase",
        },
        banner_text:{
          color: "#FFF",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          maxWidth:'360px',
          textAlign:'left',
        },
        nav_link: {
          color: "#FFF",
          cursor: "pointer",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily: "Orchidea Pro",
          fontSize: "44px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          transition: "all 0.2s ease-in-out",
          _hover: {
            color: "brand.900",
          },
        },
        products_link: {
          color: "brand.800",
          cursor: "pointer",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily: "Orchidea Pro",
          position: "relative",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          transition: "all 0.2s ease-in-out",
          _hover: {
            color: "brand.900",
          },
        },
        paragraph: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
        },
        post_text: {
          color: "lightgrey",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
        },
        product_name: {
          margin:0,
          color: "brand.100",
          fontFamily: lato.style.fontFamily,
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "22px",
        },
        product_text: {
        margin:0,
          color: "brand.100",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "24px",
        },
        product_text_sub: {
        margin:0,
          color: "brand.200",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "20px",
        },
        full_product_name: {
          margin:0,
          color: "brand.100",
          fontFamily: lato.style.fontFamily,
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "38px",
          textTransform:'uppercase',
        },
        full_product_text: {
          fontFamily: lato.style.fontFamily,
          margin:0,
          color: "brand.100",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "20px",
        },
        full_product_text_sub: {
          fontFamily: lato.style.fontFamily,
          margin:0,
          color: "brand.200",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "20px",
        }
      },
    },
    Heading: {
      baseStyle: {
        color: "#FFF",
        textTransform: "uppercase",
      },
      variants: {
        main_header: {
          fontFamily:ts_remarker.style.fontFamily,
          color: "#FFF",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily:'Orchidea Pro',
          fontSize: ["32px", "36px", "70px"],
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          maxWidth: "min(620px, 100%)",
        },
        sub_header: {
          fontFamily:ts_remarker.style.fontFamily,
          color: "#FFF",
          fontSize:  ["32px", "36px", "44px"],
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          maxWidth: "min(720px, 100%)",
        },
        post_header: {
          color: "brand.100",
          fontFamily:ts_remarker.style.fontFamily,
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "48px",
          textTransform: "uppercase",
        }
      },
    },
    Button: {
      baseStyle: {
          borderRadius:"49px",
          fontFamily: lato.style.fontFamily,
      },
      variants: {
        outline:{
          textTransform:'uppercase',
          borderColor: "brand.500",
          height:"55px",
          width:"200px",
          fontFamily:lato.style.fontFamily,
          fontWeight:500,
          lineHeight:'14px',
        },
        solid:{
          backgroundColor: "brand.500",
          color:'#FFF',
          fontFamily:lato.style.fontFamily,
          fontSize:'14px',
          lineHeight: "14px",
          textTransform:'uppercase',
        },
        products_link_more: {
          color: "brand.900",
          border: "1px solid #A8D4AF",
          padding: "25px",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily:'Orchidea Pro',
          fontSize: ["24px"],
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "100%",
          textTransform: "uppercase",
          maxWidth: "min(320px, 100%)",
        },
      },
    },
    ListItem: {
      variants: {
        regular: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
        },
      },
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <StoreProviders>
          {children}
        </StoreProviders>
      </ChakraProvider>
    </CacheProvider>
  );
}
