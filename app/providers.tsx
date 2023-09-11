"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#A8D4AF",
    800: "#fff",
    700: "#22356f",
  },
};

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Spectral'`,
    text: `'Spectral'`,
    body: `'Spectral'`,
  },
  styles: {
    global: {
      header: {
        padding: ["8px", "16px", "0 50px"],
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
