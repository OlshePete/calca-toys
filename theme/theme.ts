'use client'
import { createSystem, defaultConfig, defineConfig, defineRecipe, RecipeDefinition } from "@chakra-ui/react"
import { globalStyles } from './globalStyles';
import { lato, ts_remarker, blue_curve } from '../app/providers';
import { buttonRecipe } from "./recipes/buttonRecipe";
import { textRecipe } from "./recipes/textRecipe";
import { headingRecipe } from "./recipes/headingRecipe";
    
console.log('№№№',Object.keys(defaultConfig.theme?.recipes ?? {}))
const tokens  = ({
  ...defaultConfig.theme?.tokens,
  colors: {
    brand: {
      '900': {value:'#FEF7E6'},
      '800': {value:'#F49AA5'},
      '700': {value:'#F15B40'},
      '600': {value:'#E1ECEE'},
      '500': {value:'#71BBFF'},
      '400': {value:'#939393'},
      '300': {value:'#27AE60'},
      '200': {value:'#515151'},
      '100': {value:'#313131'},
      ...defaultConfig.theme?.tokens?.colors,
    }
  },
  fonts: {
    ...defaultConfig.theme?.tokens?.fonts,
    heading: { value: ts_remarker.style.fontFamily },
    body: { value: blue_curve.style.fontFamily },
    text:{ value: lato.style.fontFamily}
  }
});

const recipes:Record<string, RecipeDefinition> = {
  ...defaultConfig.theme?.recipes,
  text: textRecipe,
  button: buttonRecipe,
  heading: headingRecipe,
  // Другие рецепты
};
export const system = createSystem(defaultConfig,{
  globalCss:globalStyles,
  theme: {
    ...defaultConfig.theme,
    tokens,
    // semanticTokens,
    recipes
  },
});