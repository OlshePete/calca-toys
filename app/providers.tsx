"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

export const theme = extendTheme({
  colors,
  fonts: {
    // heading: `var(--font--lato)`,
    // text: `var(--font--lato)`,
    // body: `var(--font--lato)`,
  },
  styles: {
    global: {
      body:{
        backgroundColor:'brand.900',
        // fontFamily:"var(--font--lato)"
      },
      header: {
        backgroundColor:'rgba(0,0,0,0)',
        "& .header-info": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "brand.900",
          height: "38px",
        },
        "& .header-nav": {
          borderRadius:'43px',
          maxWidth:"1200px",
          margin:'0 auto',
          padding:"4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFF",
          height: "77px",
          border:'1px solid red',
        },
        "& .basket-icon":{
          marginRight:'16px'
        },
        "&>.search-bar":{
          border:'1px solid blue'
        },
        width: "100vw",
        // padding: ["8px", "16px", "0 50px"],
      },
      footer:{
          height: '386px',
          padding:'40px 0',
          backgroundColor: "brand.600",
            display:'flex',
          "&>div":{
            display:'flex',
            flexShrink:1,
          },
          "&>div>.footer-summary":{
            width:'280px',
            minHeight:'100%',
            display:"flex",
            flexDirection:'column',
            justifyContent:'space-between'
          },
          "&>div>.footer-nav":{
            flexGrow:1,
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)'
          },
      },
      ".section": {
        padding: ["8px", "16px", "0 50px"],
      },
    },
  },
  components: {
    Text: {
      variants: {
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
      },
    },
    Heading: {
      variants: {
        main_header: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          // fontFamily:'Orchidea Pro',
          fontSize: ["32px", "36px", "44px"],
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          maxWidth: "min(620px, 100%)",
        },
        sub_header: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(2px)",
          // fontFamily:'Orchidea Pro',
          fontSize: ["34px"],
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          maxWidth: "min(720px, 100%)",
        },
        post_header: {
          color: "brand.800",
          textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
          textAlign: "right",
          // fontFamily:'Orchidea Pro',
          fontSize: ["34px"],
          fontStyle: "normal",
          fontWeight: "200",
          lineHeight: "119.5%",
          letterSpacing: "2.64px",
          textTransform: "uppercase",
          maxWidth: "min(720px, 100%)",
        },
      },
    },
    Button: {
      variants: {
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
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
