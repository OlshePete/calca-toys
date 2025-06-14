import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import { globalStyles } from './globalStyles';
import { lato, ts_remarker, blue_curve } from '../app/providers';

// Определение цветов
const colors = {
  brand: {
    900: "#FEF7E6",
    800: "#F49AA5",
    700: "#F15B40",
    600: "#E1ECEE",
    500: "#71BBFF",
    400: "#FEF7E6",//базовый фон
    300: "#27AE60",
    200: "#515151",
    100: "#313131",
  },
};

// Определение компонентов
const Text = defineStyleConfig({
  baseStyle: {
    color: "brand.200",
    fontFamily: lato.style.fontFamily,
  },
  variants: {
    info_accordion_btn: {
      color: "brand.100",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
      textAlign: 'left',
      textTransform: "uppercase",
      "&.open": {
        color: 'brand.800'
      }
    },
    banner_text: {
      color: "#FFF",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: "24px",
      maxWidth: '360px',
      textAlign: 'left',
    },
    nav_link: {
      color: "#FFF",
      cursor: "pointer",
      textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
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
    privacy_text: {
      color: "brand.200",
      fontFamily:lato.style.fontFamily,
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
    },
    products_link: {
      color: "brand.800",
      cursor: "pointer",
      textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
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
      fontFamily:lato.style.fontFamily, 
      color: "#515151",
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "24px",
    },
    post_text: {
      color: "brand.200",
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: "300",
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
    price_text:{
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
  }
});

const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "49px",
    fontFamily: lato.style.fontFamily,
  },
  variants: {
    solid: {
      fontFamily: lato.style.fontFamily,
      textTransform: 'uppercase', 
      background: "brand.500",
      color: "#FFF",
      fontSize: "14px",
      fontWeight: 500,
      "&:hover": {
        background: "brand.300",
      },
    },
    ghost: {
      background: "transparent",
      color: "brand.100",
      fontSize: "14px",
      fontWeight: 500,
    },
    outline: {
      textTransform: 'uppercase',
      borderColor: "brand.500",
      height: "55px",
      width: "200px",
      fontWeight: 500,
      lineHeight: '14px',
      color: 'brand.100',
    },
    outline_secondary: {
      textTransform: 'uppercase',
      border: "1px solid #F49AA5",
      background: "#F49AA5",
      color: "#FFF",
      height: "55px",
      width: "200px",
      fontWeight: 500,
      lineHeight: '14px',
      "&:hover": {
        color: "#FFF",
        background:'#90BCE4',
      },
      "&.opposite":{
        color: "#FFF",
        background:'#90BCE4',
      }
    },
    header_link: {
      color: "brand.100",
      fontSize:'14px',
      textTransform:'uppercase',
      fontStyle: "normal",
      fontWeight: "400",
    },
    products_link_more: {
      color: "brand.900",
      border: "1px solid #A8D4AF",
      padding: "25px",
      textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
      fontSize: ["24px"],
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "100%",
      textTransform: "uppercase",
      maxWidth: "min(320px, 100%)",
    },
    header_popper_category: {
      color:'brand.200',
      background:'transparent',
      fontWeight:'400',
      textTransform:'uppercase',
      fontSize:'14px',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      gap:'22px',
      width:'100%',
      height:'34px',
      borderRadius:0,
      padding:'0 58px',
      position:'relative',
      "&.only_text":{
        width:'175px',
        padding:0,
        alignItems:'center',
        justifyContent:'flex-start',
        '&:hover':{
          color:'#90BCE4',
        }
      },
      "&.active_category":{
        color:'#90BCE4',
        "& > .expand_icon > path":{
          stroke:'#90BCE4',
        }
      },
      "&.to_catalog":{
        color:'#F49AA5',
        '&:hover':{
          textDecoration:'underline',
          color:'#F49AA5',
        }
      }
    }
  }
});

const Heading = defineStyleConfig({
  baseStyle: {
    color: "#FFF",
    textTransform: "uppercase",
    fontFamily: ts_remarker.style.fontFamily,
  },
  variants: {
    main_header: {
      fontFamily:ts_remarker.style.fontFamily,
      color: "#FFF",
      textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
      fontSize: ["32px", "36px", "70px", "90px"],
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: ["32px", "36px", "70px", "90px"],
      letterSpacing: "2.64px",
      textTransform: "uppercase",
      maxWidth: "min(620px, 100%)",
      "&.sub_header": {
        fontSize:  ["32px", "36px", "44px", "57px"],
      },
    },
    sub_header: {
      fontFamily:ts_remarker.style.fontFamily,
      color: "#FFF",
      fontSize:  ["32px", "36px", "44px", "57px"],
      fontStyle: "normal",
      fontWeight: "200",
      lineHeight: ["32px", "36px", "44px", "57px"],
      letterSpacing: "2.64px",
      textTransform: "uppercase",
      maxWidth: "min(720px, 100%)"
    },
    post_header: {
      color: "brand.100",
      fontFamily:ts_remarker.style.fontFamily,
      fontSize: "40px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "48px",
      textTransform: "uppercase",
    },
    privacy_header: {
      color: "brand.100",
      fontFamily:lato.style.fontFamily,
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "26px",
      textTransform: "uppercase",
      paddingTop:'28px',
      paddingBottom:'8px'
    },
  }
});

const ListItem = defineStyleConfig({
  variants: {
    regular: {
      color: "brand.100",
      textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "119.5%",
      letterSpacing: "2.64px",
    }
  },
});

const Input = defineStyleConfig({
  baseStyle:{
    fontFamily:lato.style.fontFamily,
    fontWeight:300,
  },
  variants: {
    outline:{
      background:'red!important',
    }
  }
});

const InputGroup = defineStyleConfig({
  baseStyle:{
    outline:'1px solid red'
  }
});

const Tab = defineStyleConfig({
  baseStyle: {
    borderRadius:"49px",
    fontSize:'12px',
    lineHeight:'14px',
    fontWeight:400,
    fontFamily:lato.style.fontFamily,
  },
});

const Badge = defineStyleConfig({
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
});

// Создание темы
export const theme = extendTheme({
  colors,
  fonts: {
    heading: ts_remarker.style.fontFamily,
    body: blue_curve.style.fontFamily,
  },
  components: {
    Text,
    Button,
    Heading,
    Input,
    InputGroup,
    Tab,
    Badge,
    ListItem,
  },
  styles: globalStyles,
}); 