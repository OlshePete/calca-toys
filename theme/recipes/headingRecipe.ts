import { defineRecipe } from "@chakra-ui/react";
import { lato, ts_remarker } from "../../app/providers";


export const headingRecipe = defineRecipe({
  base: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontFamily: ts_remarker.style.fontFamily,
  },
  variants: {
    visual: {
      main_header: {
        fontFamily: ts_remarker.style.fontFamily,
        color: '#FFF',
        textShadow: '0px 4px 4px rgba(255, 255, 255, 0.05)',
        fontSize: {
          base: '32px',
          sm: '36px',
          md: '70px',
          lg: '90px'
        },
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: {
          base: '32px',
          sm: '36px',
          md: '70px',
          lg: '90px'
        },
        letterSpacing: '2.64px',
        textTransform: 'uppercase',
        maxWidth: 'min(620px, 100%)',
        '&.sub_header': {
          fontSize: {
            base: '32px',
            sm: '36px',
            md: '44px',
            lg: '57px'
          },
        },
      },
      sub_header: {
        fontFamily: ts_remarker.style.fontFamily,
        color: '#FFF',
          fontSize: {
            base: '32px',
            sm: '36px',
            md: '44px',
            lg: '57px'
          },
        fontStyle: 'normal',
        fontWeight: '200',
        lineHeight: {
            base: '32px',
            sm: '36px',
            md: '44px',
            lg: '57px'
          },
        letterSpacing: '2.64px',
        textTransform: 'uppercase',
        maxWidth: 'min(720px, 100%)',
      },
      post_header: {
        color: 'brand.100',
        fontFamily: ts_remarker.style.fontFamily,
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '48px',
        textTransform: 'uppercase',
      },
      privacy_header: {
        color: 'brand.100',
        fontFamily: lato.style.fontFamily,
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '26px',
        textTransform: 'uppercase',
        paddingTop: '28px',
        paddingBottom: '8px',
      },
    }
  }
});