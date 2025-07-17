import { defineRecipe } from "@chakra-ui/react";
import { lato } from "../../app/providers";


export const textRecipe = defineRecipe({
  base: {
    color: 'brand.200',
    fontFamily: lato.style.fontFamily,
  },
  variants: {
    visual: {
      info_accordion_btn: {
        color: 'brand.100',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '24px',
        textAlign: 'left',
        textTransform: 'uppercase',
        '&.open': {
          color: 'brand.800',
        },
      },
      banner_text: {
        color: '#FFF',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: '24px',
        maxWidth: '360px',
        textAlign: 'left',
      },
      nav_link: {
        color: '#FFF',
        cursor: 'pointer',
        textShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
        fontSize: '44px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '119.5%',
        letterSpacing: '2.64px',
        textTransform: 'uppercase',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          color: 'brand.900',
        },
      },
      privacy_text: {
        color: 'brand.200',
        fontFamily: lato.style.fontFamily,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
      },
      products_link: {
        color: 'brand.800',
        cursor: 'pointer',
        textShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
        position: 'relative',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '119.5%',
        letterSpacing: '2.64px',
        textTransform: 'uppercase',
        transition: 'all 0.2s ease-in-out',
        _hover: {
          color: 'brand.900',
        },
      },
      paragraph: {
        fontFamily: lato.style.fontFamily,
        color: '#515151',
        fontSize: '18px',
        fontStyle: 'normal',
        lineHeight: '24px',
      },
      post_text: {
        color: 'brand.200',
        fontSize: '28px',
        fontStyle: 'normal',
        fontWeight: '300',
      },
      product_name: {
        margin: 0,
        color: 'brand.100',
        fontFamily: lato.style.fontFamily,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '22px',
      },
      product_text: {
        margin: 0,
        color: 'brand.100',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
      },
      price_text: {
        margin: 0,
        color: 'brand.100',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '24px',
      },
      product_text_sub: {
        margin: 0,
        color: 'brand.200',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
      },
      full_product_name: {
        margin: 0,
        color: 'brand.100',
        fontFamily: lato.style.fontFamily,
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '38px',
        textTransform: 'uppercase',
      },
      full_product_text: {
        fontFamily: lato.style.fontFamily,
        margin: 0,
        color: 'brand.100',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
      },
      full_product_text_sub: {
        fontFamily: lato.style.fontFamily,
        margin: 0,
        color: 'brand.200',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '20px',
      },

    }
    // Другие варианты
  },
  defaultVariants: {
    // Вариант по умолчанию
  }
});