"use client";

import { theme } from "@/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import localFont from "next/font/local";
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
      path: "../public/fonts/Lato/Lato-Regular.woff",
    },
    {
      path: "../public/fonts/Lato/Lato-Medium.woff",
    }
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
      path: "../public/fonts/TS_remarker/TS_Remarker_Regular.otf",
    },
    {
      path: "../public/fonts/TS_remarker/TS_Remarker.ttf",
    }
  ],
});
// export const theme2 = extendTheme({
//   colors,
//   fonts: {
//     heading: ts_remarker.style.fontFamily,
//     // text: lato.style.fontFamily,
//     body: blue_curve.style.fontFamily,
//   },
//   styles: {
//     global: {
//       body: {
//         boxSizing: "border-box",
//         padding: 0,
//         margin: 0,
//         backgroundColor: "brand.900",
//         maxWidth: "100vw",
//         overflowX: "hidden",
//         minHeight: "100vh",
//       },
//       main: {
//         minHeight: "60vh",
//       },
//       a: {
//         fontFamily:lato.style.fontFamily,
//         textDecoration: 'none',
//       },
//       nav:{
//         "&.chakra-breadcrumb":{
//           fontFamily:lato.style.fontFamily,
//         }
//       },
//       header: {
//         backgroundColor: "rgba(0,0,0,0)",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         padding: 0,
//         "& .header-info": {
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "brand.900",
//           height: "38px",
//           position: "relative",
//           top: 0,
//           left: 0,
//           padding: 0,
//           minWidth: "100vw",
//         },
//         "& .header-nav-container": {
//         // zIndex:1000,
//           minWidth: "100vw",
//           backgroundColor: "rgba(0,0,0,0)",
//           position: "relative",
//           top: ["14px","18px","34px"],
//           left: '-5px',
//           height: "77px",
//           padding: 0,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         },
//         "& .header-nav": {
//           borderRadius: "43px",
//           width: "min(100%, 1170px)",
//           padding: "4px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         },
//         "& .basket-icon": {
//           marginRight: "16px",
//         },
//         width: "100vw",
//         // padding: ["8px", "16px", "0 50px"],
//       },
//       footer: {
//         height: "386px",
//         padding: "40px 0",
//         backgroundColor: "brand.600",
//         display: "flex",
//         "&>div": {
//           display: "flex",
//           flexShrink: 1,
//         },
//         "&>div>.footer-summary": {
//           minHeight: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         },
//         "&>div>.footer-nav": {
//           flexGrow: 1,
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//         },
//       },
//       ".section": {
//         minHeight: "60vh",
//         // fontFamily: "var(--font--lato)",
//       },
//       ".section.fullH": {
//         minHeight: "100vh",
//       },
//       ".product-sm": {
//         width:'270px',
//         height:'464px',
//         display:'flex',
//         borderRadius: "8px",
//         flexDirection:'column',
//         color:'brand.200',
//         transition: "all 0.3s ease", // Плавный переход для всех свойств
//         cursor: "pointer",
//       },
//       "label.feedback_form_label":{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300,
//         fontSize:'14px',
//       },
//       "label.feedback_form_checkbox,span.chakra-checkbox__label":{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:200,
//         fontSize:'14px',
//         marginLeft:'16px',
//       },
//       "label.confirm_form_checkbox":{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:200,
//         fontSize:'14px',
//         marginLeft:'16px',
//         "& > .chakra-checkbox__control":{
//           borderRadius:'100%'
//         },
//       },
//       "span.chakra-checkbox__control":{
//         // background:'#F49AA5',
//         borderColor:'#F49AA5',
//         width:'22px',
//         height:'22px',
//       },
//       "span.chakra-checkbox__control[data-checked], span.chakra-checkbox__control[data-hover][data-checked], span.chakra-checkbox__control[data-hover]":{
//         background:'#F49AA5',
//         borderColor:'#F49AA5',
//       },
//       "p.feedback_form_label.error":{
//         position:'absolute',
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300,
//         fontSize:'14px',
//         color:"red"
//       },
//     "textarea.feedback_input":{
//       fontFamily:lato.style.fontFamily,
//       fontWeight:300,
//       fontSize:'13px',
//     },
//     "h3.seo-title":{
//       outline:'1px solid red',
//       fontFamily:ts_remarker.style.fontFamily,
//       fontSize:'28px',
//       fontStyle:'normal',
//       fontWeight:'400',
//       lineHeight:'120%',
//       textTransform:'uppercase',
//     },
//       "input.feedback_input":{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300,
//         fontSize:'13px',
//         "&:focus-visible":{
//           boxShadow:'none'
//         }
//       },
//       "button.nav_icon > svg > circle":{
//         stroke:'#F49AA5',
//       },
//       "button.nav_icon > svg > path":{
//         fill:'#F49AA5'
//       },
//       "button.nav_icon.active > svg > circle":{
//         fill:'#F49AA5',
//       },
//       "button.nav_icon.active > svg > path":{
//         fill:'#FFF'
//       },
//       "button.chakra-tabs__tab":{
//         fontSize:'12px',
//         lineHeight:'8px',
//         padding:'14px 0',
//         fontFamily:lato.style.fontFamily,
//         alignItems:'center'
//       },
//       "select.chakra-select":{
//         fontSize:'14px',
//         lineHeight:'8px',
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300
//       },
//       "article.list_item":{
//         position:"relative",
//         width:'370px',
//         height:'560px',
//         "&>img":{
//           height:'440px',
//           borderRadius:'14px',
//           marginBottom:'20px'

//         },
//         "&>h2":{
//           fontSize:'16px',
//           fontFamily:lato.style.fontFamily,
//           fontWeight:600,
//           textTransform:'uppercase',
//           letterSpacing:'0',
//           marginBottom:'26px',
//           lineHeight:'24px',
//           maxHeight: '48px', 
//           overflow: 'hidden', 
//           textOverflow: 'ellipsis', 
//           display: '-webkit-box', 
//           WebkitLineClamp: 2, 
//           WebkitBoxOrient: 'vertical', 
//         },
//         "& span":{
//           fontSize:'14px',
//           fontFamily:lato.style.fontFamily,
//           fontWeight:400,
//         },
//       },
//       'div.type_name': {
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         fontWeight:300,
//         width:'122px',
//         height:'32px',
//         borderRadius:'28px',
//         background:'#90BCE4',
//         color:'#FFFFFF',
//         textTransform:'uppercase',
//         fontSize:'12px',
//         fontFamily:lato.style.fontFamily,
//         position:"absolute",
//         left:'16px',
//         top:'16px',
//       },
//       'div.chakra-input__group':{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300,
//         fontSize:'12px',
//         "&>*":{
//           fontFamily:lato.style.fontFamily,
//           fontWeight:300,
//           fontSize:'12px',
//           borderRadius:'4px'
//         }
//       },
//       "input.phoneInput":{
//         fontFamily:lato.style.fontFamily,
//       },
//       ".contacts_link":{
//         outline:'none',
//         fontSize:'14px',
//         color:"#F49AA5",
//         textDecoration:"underline",
//         textUnderlineOffset:'4px',
//         cursor:'pointer',
//       }
//     },
//   },
//   components: {
//     Input: {
//       baseStyle:{
//         fontFamily:lato.style.fontFamily,
//         fontWeight:300,
//       },
//       variants: {
//         outline:{
//           background:'red!important',
//         }
//       }
//     },
//     InputGroup: {
//       baseStyle:{
//         outline:'1px solid red'
//       }
//     },
//     Tab:{
//       baseStyle: {
//         borderRadius:"49px",
//         fontSize:'12px',
//         lineHeight:'14px',
//         fontWeight:400,
//         fontFamily:lato.style.fontFamily,
//       },
//     },
//     Badge: {
//       baseStyle: {
//         backgroundColor: "brand.700",
//         borderRadius:"28px",
//         color:"#FFF",
//         fontSize:'14px',
//         lineHeight:'14px',
//         fontWeight:400,
//         fontFamily:lato.style.fontFamily,
//         textTransform:'none',
//         padding:'9px 20px'
//       },
//       variants:{
//         discount:{
//         backgroundColor: "brand.500",
//         }
//       }
//     },
//     Text: {
//       baseStyle: {
//         color: "brand.200",
//         fontFamily: lato.style.fontFamily,
//       },
//       variants: {
//         info_accordion_btn:{
//           color: "brand.100",
//           fontSize: "16px",
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "24px",
//           textAlign:'left',
//           textTransform: "uppercase",
//           "&.open":{
//             color:'#F49AA5'
//           }
//         },
//         banner_text:{
//           fontFamily:lato.style.fontFamily,
//           color: "#FFF",
//           fontSize: "18px",
//           fontStyle: "normal",
//           fontWeight: "200",
//           lineHeight: "24px",
//           maxWidth:'360px',
//           textAlign:'left',
//         },
//         nav_link: {
//           color: "#FFF",
//           cursor: "pointer",
//           textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
//           // fontFamily: "Orchidea Pro",
//           fontSize: "44px",
//           fontStyle: "normal",
//           fontWeight: "600",
//           lineHeight: "119.5%",
//           letterSpacing: "2.64px",
//           textTransform: "uppercase",
//           transition: "all 0.2s ease-in-out",
//           _hover: {
//             color: "brand.900",
//           },
//         },
//         privacy_text: {
//           color: "brand.200",
//           fontFamily:lato.style.fontFamily,
//           fontSize: "14px",
//           fontStyle: "normal",
//           fontWeight: 400,
//           lineHeight: "20px",
//         },
//         products_link: {
//           color: "brand.800",
//           cursor: "pointer",
//           textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
//           // fontFamily: "Orchidea Pro",
//           position: "relative",
//           fontSize: "32px",
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "119.5%",
//           letterSpacing: "2.64px",
//           textTransform: "uppercase",
//           transition: "all 0.2s ease-in-out",
//           _hover: {
//             color: "brand.900",
//           },
//         },
//         paragraph: {
//           fontFamily:lato.style.fontFamily, 
//           color: "#515151",
//           fontSize: "18px",
//           fontStyle: "normal",
//           lineHeight: "24px",
//         },
//         post_text: {
//           color: "lightgrey",
//           fontSize: "18px",
//           fontStyle: "normal",
//           fontWeight: "300",
//           lineHeight: "119.5%",
//           letterSpacing: "2.64px",
//         },
//         product_name: {
//           margin:0,
//           color: "brand.100",
//           fontFamily: lato.style.fontFamily,
//           fontSize: "16px",
//           fontStyle: "normal",
//           fontWeight: "500",
//           lineHeight: "22px",
//         },
//         product_text: {
//           margin:0,
//           color: "brand.100",
//           fontSize: "18px",
//           fontStyle: "normal",
//           fontWeight: "500",
//           lineHeight: "24px",
//         },
//         price_text:{
//           margin:0,
//           color: "brand.100",
//           fontSize: "18px",
//           fontStyle: "normal",
//           fontWeight: "500",
//           lineHeight: "24px",
//         },
//         product_text_sub: {
//         margin:0,
//           color: "brand.200",
//           fontSize: "14px",
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "20px",
//         },
//         full_product_name: {
//           margin:0,
//           color: "brand.100",
//           fontFamily: lato.style.fontFamily,
//           fontSize: "30px",
//           fontStyle: "normal",
//           fontWeight: "600",
//           lineHeight: "38px",
//           textTransform:'uppercase',
//         },
//         full_product_text: {
//           fontFamily: lato.style.fontFamily,
//           margin:0,
//           color: "brand.100",
//           fontSize: "14px",
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "20px",
//         },
//         full_product_text_sub: {
//           fontFamily: lato.style.fontFamily,
//           margin:0,
//           color: "brand.200",
//           fontSize: "14px",
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "20px",
//         }
//       },
//     },
//     Heading: {
//       baseStyle: {
//         color: "#FFF",
//         textTransform: "uppercase",
//       },
//       variants: {
//         main_header: {
//           fontFamily:ts_remarker.style.fontFamily,
//           color: "#FFF",
//           textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
//           fontSize: ["32px", "36px", "70px", "90px"],
//           fontStyle: "normal",
//           fontWeight: "200",
//           lineHeight: ["32px", "36px", "70px", "90px"],
//           letterSpacing: "2.64px",
//           textTransform: "uppercase",
//           maxWidth: "min(620px, 100%)",
//         },
//         sub_header: {
//           fontFamily:ts_remarker.style.fontFamily,
//           color: "#FFF",
//           fontSize:  ["32px", "36px", "44px", "57px"],
//           fontStyle: "normal",
//           fontWeight: "200",
//           lineHeight: ["32px", "36px", "44px", "57px"],
//           letterSpacing: "2.64px",
//           textTransform: "uppercase",
//           maxWidth: "min(720px, 100%)"
//         },
//         post_header: {
//           color: "brand.100",
//           fontFamily:ts_remarker.style.fontFamily,
//           fontSize: "40px",
//           fontStyle: "normal",
//           fontWeight: 400,
//           lineHeight: "48px",
//           textTransform: "uppercase",
//         },
//         privacy_header: {
//           color: "brand.100",
//           fontFamily:lato.style.fontFamily,
//           fontSize: "16px",
//           fontStyle: "normal",
//           fontWeight: 500,
//           lineHeight: "26px",
//           textTransform: "uppercase",
//           paddingTop:'28px',
//           paddingBottom:'8px'
//         },
//       },
//     },
//     Button: {
//       baseStyle: {
//           borderRadius:"49px",
//           fontFamily: lato.style.fontFamily,
//       },
//       variants: {
//         outline:{
//           textTransform:'uppercase',
//           borderColor: "brand.500",
//           height:"55px",
//           width:"200px",
//           fontFamily:lato.style.fontFamily,
//           fontWeight:500,
//           lineHeight:'14px',
//         },
//         outline_secondary:{
//           textTransform:'uppercase',
//           border: "1px solid #F49AA5",
//           background: "#F49AA5",
//           color: "#FFF",
//           height:"55px",
//           width:"200px",
//           fontFamily:lato.style.fontFamily,
//           fontWeight:500,
//           lineHeight:'14px',
//           "&:hover":{
//             background:'transparent',
//             color: "inherit",
//           }
//         },
//         solid:{
//           backgroundColor: "brand.500",
//           color:'#FFF',
//           fontFamily:lato.style.fontFamily,
//           fontSize:'14px',
//           lineHeight: "14px",
//           textTransform:'uppercase',
//         },
//         products_link_more: {
//           color: "brand.900",
//           border: "1px solid #A8D4AF",
//           padding: "25px",
//           textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
//           // fontFamily:'Orchidea Pro',
//           fontSize: ["24px"],
//           fontStyle: "normal",
//           fontWeight: "400",
//           lineHeight: "100%",
//           textTransform: "uppercase",
//           maxWidth: "min(320px, 100%)",
//         },
//         // header_link: {
//         //   borderRadius:'none',
//         //   color: "inherit",
//         //   fontSize:'14px',
//         //   textTransform:'uppercase',
//         //   fontStyle: "normal",
//         //   fontWeight: "400",
//         // },
//         header_popper_category: {
//           background:'transparent',
//           fontWeight:'400',
//           textTransform:'uppercase',
//           fontSize:'14px',
//           display:'flex',
//           alignItems:'center',
//           justifyContent:'space-between',
//           gap:'22px',
//           width:'100%',
//           height:'34px',
//           borderRadius:0,
//           padding:'0 58px',
//           position:'relative',
//           "&.only_text":{
//             width:'175px',
//             padding:0,
//             alignItems:'center',
//             justifyContent:'flex-start',
//             '&:hover':{
//               color:'#90BCE4',
//             }
//           },
//           "&.active_category":{
//             color:'#90BCE4',
//             "& > .expand_icon > path":{
//               stroke:'#90BCE4',
//             }
//           },
//           "&.to_catalog":{
//             color:'#F49AA5',
//             '&:hover':{
//               textDecoration:'underline',
//               color:'#F49AA5',
//             }
//           }
//         }
//       },
//     },
//     ListItem: {
//       variants: {
//         regular: {
//           color: "brand.800",
//           textShadow: "0px 4px 4px rgba(255, 255, 255, 0.05)",
//           fontSize: "18px",
//           fontStyle: "normal",
//           fontWeight: "500",
//           lineHeight: "119.5%",
//           letterSpacing: "2.64px",
//         },
//       },
//     },
//   },
// });
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
          {children}
    </ChakraProvider>
  );
}
