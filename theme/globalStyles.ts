import { lato, ts_remarker, blue_curve } from '../app/providers';

export const globalStyles = {
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
    label:{
      fontFamily:lato.style.fontFamily,
      color:'brand.100',
    },
    main: {
      minHeight: "60vh",
    },
    a: {
      fontFamily:lato.style.fontFamily,
      textDecoration: 'none',
    },
    nav:{
      "&.chakra-breadcrumb":{
        fontFamily:lato.style.fontFamily,
      }
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
        position: "relative",
        top: ["14px","18px","34px"],
        left: '-5px',
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
        backgroundColor:['transparent','transparent','transparent','#E1ECEE'],
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
        width: ["120px","160px","280px"],
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
      borderRadius: "8px",
      flexDirection:'column',
      color:'brand.200',
      transition: "all 0.3s ease", // Плавный переход для всех свойств
      cursor: "pointer",
    },
    "label.feedback_form_label":{
      fontFamily:lato.style.fontFamily,
      fontWeight:300,
      fontSize:'14px',
    },
    "label.feedback_form_checkbox,span.chakra-checkbox__label":{
      fontFamily:lato.style.fontFamily,
      fontWeight:200,
      fontSize:'14px',
      marginLeft:'16px',
    },
    "label.confirm_form_checkbox":{
      fontFamily:lato.style.fontFamily,
      fontWeight:200,
      fontSize:'14px',
      marginLeft:'16px',
      "& > .chakra-checkbox__control":{
        borderRadius:'100%'
      },
    },
    "span.chakra-checkbox__control":{
      borderColor:'#F49AA5',
      width:'22px',
      height:'22px',
    },
    "span.chakra-checkbox__control[data-checked], span.chakra-checkbox__control[data-hover][data-checked], span.chakra-checkbox__control[data-hover]":{
      background:'#F49AA5',
      borderColor:'#F49AA5',
    },
    "span[role='presentation']":{
      color:'brand.100',
    },
    "p.feedback_form_label.error":{
      position:'absolute',
      fontFamily:lato.style.fontFamily,
      fontWeight:300,
      fontSize:'14px',
      color:"red"
    },
  "textarea.feedback_input":{
    fontFamily:lato.style.fontFamily,
    fontWeight:300,
    fontSize:'13px',
  },
  "h3.seo-title":{
    outline:'1px solid red',
    fontFamily:ts_remarker.style.fontFamily,
    fontSize:'28px',
    fontStyle:'normal',
    fontWeight:'400',
    lineHeight:'120%',
    textTransform:'uppercase',
  },
    "input.feedback_input":{
      fontFamily:lato.style.fontFamily,
      fontWeight:300,
      fontSize:'13px',
      "&:focus-visible":{
        boxShadow:'none'
      }
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
    "button.chakra-tabs__tab":{
      fontSize:'12px',
      lineHeight:'8px',
      padding:'14px 0',
      fontFamily:lato.style.fontFamily,
      alignItems:'center'
    },
    "select.chakra-select":{
      fontSize:'14px',
      lineHeight:'8px',
      fontFamily:lato.style.fontFamily,
      fontWeight:300
    },
    "article.list_item":{
      position:"relative",
      width:'370px',
      height:'560px',
      "&>img":{
        height:'440px',
        borderRadius:'14px',
        marginBottom:'20px'

      },
      "&>h2":{
        fontSize:'16px',
        fontFamily:lato.style.fontFamily,
        fontWeight:600,
        textTransform:'uppercase',
        letterSpacing:'0',
        marginBottom:'26px',
        lineHeight:'24px',
        maxHeight: '48px', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis', 
        display: '-webkit-box', 
        WebkitLineClamp: 2, 
        WebkitBoxOrient: 'vertical', 
      },
      "& span":{
        fontSize:'14px',
        fontFamily:lato.style.fontFamily,
        fontWeight:400,
      },
    },
    'div.type_name': {
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontWeight:300,
      width:'122px',
      height:'32px',
      borderRadius:'28px',
      background:'#90BCE4',
      color:'#FFFFFF',
      textTransform:'uppercase',
      fontSize:'12px',
      fontFamily:lato.style.fontFamily,
      position:"absolute",
      left:'16px',
      top:'16px',
    },
    'div.chakra-input__group':{
      fontFamily:lato.style.fontFamily,
      fontWeight:300,
      fontSize:'12px',
      "&>*":{
        fontFamily:lato.style.fontFamily,
        fontWeight:300,
        fontSize:'12px',
        borderRadius:'4px'
      }
    },
    "input.phoneInput":{
      fontFamily:lato.style.fontFamily,
    },
    ".contacts_link":{
      outline:'none',
      fontSize:'14px',
      color:"#F49AA5",
      textDecoration:"underline",
      textUnderlineOffset:'4px',
      cursor:'pointer',
    }
  },
}; 