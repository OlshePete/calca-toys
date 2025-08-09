import { ReactNode } from 'react';
import { IProduct, IProductByIdContent, IResponseData, ISubscribeResponse } from './api';
import {
  BoxProps,
  // ButtonProps,
  ChakraComponent,
  ContainerProps,
  StackProps,
} from '@chakra-ui/react';
import Image from 'next/image';
import type { ButtonProps as ChakraButtonProps, HeadingProps as ChakraHeadingProps, TextProps as ChakraTextProps, RecipeVariantProps } from "@chakra-ui/react"
import { headingRecipe } from '@theme/recipes/headingRecipe';
import { buttonRecipe } from '@theme/recipes/buttonRecipe';
import { textRecipe } from '@theme/recipes/textRecipe';

type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>
type HeadingVariantProps = RecipeVariantProps<typeof headingRecipe>
type TextVariantProps = RecipeVariantProps<typeof textRecipe>

export interface ButtonProps
  extends React.PropsWithChildren<ButtonVariantProps>, ChakraButtonProps {}
export interface HeadingProps extends React.PropsWithChildren<HeadingVariantProps>, ChakraHeadingProps {}
export interface TextProps extends React.PropsWithChildren<TextVariantProps>, ChakraTextProps {}
export interface IPost {
  id: number;
  title: string;
  body: string;
}
export interface ChildrenComponentProps {
  children: ReactNode;
}
export interface ContentContainerProps extends ContainerProps {
  centerContent?: boolean | undefined;
}
export interface HeaderInfoProps {
  theme: 'light' | 'dark';
}
export interface ICustomBoxProps extends ChildrenComponentProps, ChakraComponent<'div', {}> {}
export interface ICustomStackProps extends ChildrenComponentProps {
  variant: 'column' | 'row';
  gap?: number;
  justify?: 'flex-start' | 'flex-end' | 'center';
  style?: object;
  className?: string;
}
export interface IFooterCustomStackProps extends StackProps {
  children: ReactNode;
  gap?: number;
  justify?: 'flex-start' | 'flex-end' | 'center';
  style?: object;
  className?: string;
  variant?: 'links' | 'contacts';
}
export interface CustomTitleProps extends HeadingProps {
  label?: string;
}
export interface CustomTextProps extends TextProps {
  color?: string;
  style?: object;
  label?:string
}
export interface ProductColor {
  label: string;
  color?: string;
}
export interface StockBlock extends ProductColor {
  inStock: number;
}
export interface ProductVariant extends ProductColor {
  image: string;
  value?: number;
}
export interface Product {
  id: number;
  type?: 'toy' | 'balloon' | 'supplies' | undefined;
  name: string;
  price: number;
  discount_price?: number;
  height?: number;
  width?: number;
  previewComment?: string;
  mustHave?: boolean;
  variants: ProductVariant[];
  comment: string;
  productDescription: string;
  productCharacteristic: string;
  stock: StockBlock[];
  connected?: Product[];
  article: string;
}
export interface ProductPreviewProps {
  product: IResponseData<IProduct>;
}
export interface ProductFullViewProps {
  product: IProductByIdContent;
}
export interface BaseCarouselProps extends BoxProps {
  label: string;
  products: IResponseData<IProduct>[];
  link?: string;
  dinamicMarginLeft?: boolean;
  withButton?: boolean;
  components?:{
    label:ReactNode;
    items:ReactNode[];
    button?:ReactNode;
  }
}
export interface ProductsCarouselProps extends BaseCarouselProps {
  label: string;
  products: IResponseData<IProduct>[];
}
export interface CustomButtonProps extends ButtonProps{
  label?: string;
  className?:string;
  endIcon?:React.ReactNode;
  action?: () => void;
}

export interface FooterNavNextElement {
  label: string;
  link?: string;
  query?: {
    [key: string]: string;
  };
}
export interface FooterNavBlock {
  [key: string]: FooterNavNextElement;
}
export interface SummaryContactElement {
  caption: string;
  type: 'email' | 'phone' | 'address' | 'time';
}
export interface FooterContactElement {
  label: string | string[];
  caption?: string;
}
export interface BasketItem {
  product: Product;
  variants: ProductVariant[];
}
// export interface OneVariantBasketItem {
//   product: Product,
//   variant: ProductVariant,
// }
export interface BasketCustomer {
  name: string;
  phone: string;
  mail: string;
  comment?: string;
  processConsent: boolean;
  paymentVariant: 'ONLINE' | 'OFFLINE';
}
export interface Basket {
  items: BasketItem[] | [];
  customer: {
    name: string;
    phone: string;
    mail: string;
    comment?: string;
    processConsent: boolean;
    paymentVariant: 'ONLINE' | 'OFFLINE';
  } | null;
}

export interface Viewed {
  items: Product[] | [];
}

// export interface NewBasketElementFormValues extends OneVariantBasketItem { }
export interface ServicesCarouselItem {
  id: string;
  name: string;
  title: string;
  link: string;
  image: string;
}
export interface ServicesCarouselProps {
  label: string;
  services: ServicesCarouselItem[];
}
export interface SubscribeCarouselItem {
  id: string;
  image: string;
}
export interface SubscribeCarouselProps {
  content: ISubscribeResponse
}
export interface IIconButtonProps extends ButtonProps {
  label: string;
  icon: typeof Image;
}