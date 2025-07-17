import { defineRecipe } from "@chakra-ui/react";
import { lato } from "../../app/providers";


export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: '49px',
    background:'transparent !important',
    fontFamily: lato.style.fontFamily+'!important',
    "&:hover":{
      background:'transparent !important',
    }
  },
  variants: {
    visual: {
      solid: {
        fontFamily: lato.style.fontFamily,
        textTransform: 'uppercase',
        background: 'brand.500',
        color: '#FFF',
        fontSize: '14px',
        fontWeight: 500,
        '&:hover': {
          background: 'brand.300',
        },
      },
      outline: {
        textTransform: 'uppercase',
        borderColor: 'brand.500',
        height: '55px',
        width: '200px',
        fontWeight: 500,
        lineHeight: '14px',
        color: 'brand.100',
      },
      ghost: {
        background: 'transparent',
        color: 'brand.100',
        fontSize: '14px',
        fontWeight: 500,
      },
      outline_secondary: {
        textTransform: 'uppercase',
        border: '1px solid #F49AA5',
        background: '#F49AA5',
        color: '#FFF',
        height: '55px',
        width: '200px',
        fontWeight: 500,
        lineHeight: '14px',
        '&:hover': {
          color: '#FFF',
          background: '#90BCE4',
        },
        '&.opposite': {
          color: '#FFF',
          background: '#90BCE4',
        },
      },
      header_link: {
        fontFamily: lato.style.fontFamily+'!important',
        color: 'brand.100',
        fontSize: '14px',
        textTransform: 'uppercase',
        fontStyle: 'normal',
        fontWeight: '400',
        borderRadius:0,
        border:'none',
        '&:is(:hover, [data-hover]):not(:disabled, [data-disabled])':{
          outlineColor:'green',
          background:'transparent!important',
          outline:'4px solid #90BCE4',
          fontSize: '14px',
        }
      },
      products_link_more: {
        color: 'brand.900',
        border: '1px solid #A8D4AF',
        padding: '25px',
        textShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
        fontSize: ['24px'],
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '100%',
        textTransform: 'uppercase',
        maxWidth: 'min(320px, 100%)',
      },
      header_popper_category: {
        color: 'brand.200',
        background: 'transparent',
        fontWeight: '400',
        textTransform: 'uppercase',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '22px',
        width: 'fit-content',
        height: '34px',
        borderRadius: 0,
        padding: '0 0 0 48px',
        position: 'relative',
        whiteSpace:'nowrap',
        '&.only_text': {
          width: '175px',
          padding: 0,
          alignItems: 'center',
          justifyContent: 'flex-start',
          '&:hover': {
            color: '#90BCE4',
          },
        },
        '&.active_category': {
          color: '#90BCE4',
          '& > .expand_icon': {
            transform:'rotate(-180deg)'
          },
          '& > .expand_icon > path': {
            stroke: '#90BCE4',
          },
        },
        '&.to_catalog': {
          color: '#F49AA5',
          '&:hover': {
            textDecoration: 'underline',
            color: '#F49AA5',
          },
        },
      },
    },
    // size: {
    //   sm: { padding: "4", fontSize: "12px" },
    //   lg: { padding: "8", fontSize: "24px" },
    // },
  },
})