import { ReactNode } from "react";
import { number } from "yup";
export interface IPost {
  id: number
  title: string
  body: string
}
export interface ChildrenComponentProps {
  children: ReactNode;
}
export interface ContentContainerProps extends ChildrenComponentProps {
  centerContent?: boolean | undefined
}
export interface HeaderInfoProps {
  theme: 'light' | 'dark'
}
export interface CustomStackProps extends ChildrenComponentProps {
  variant: "column" | "row",
  gap?: number,
  justify?: 'flex-start' | 'flex-end' | 'center'
}
export interface CustomTitleProps extends ChildrenComponentProps {
  fontSize?: number,
  color?: string,
}
export interface CustomTextProps extends ChildrenComponentProps {
  fontSize?: number,
  color?: string,
}
export interface ProductColor {
  label: string,
  color?: string,
}
export interface StockBlock extends ProductColor {
  inStock: number
}
export interface ProductVariant extends ProductColor {
  image: string,
  value: number
}
export interface Product {
  id: number,
  type?: "toy" | "balloon" | "supplies" | undefined,
  name: string,
  price: number,
  discount_price?: number,
  height?: number,
  width?: number,
  previewComment?: string,
  mustHave?: boolean,
  variants: ProductVariant[],
  comment: string,
  productDescription: string,
  productCharacteristic: string,
  stock: StockBlock[],
  connected?: Product[],
  article: string
}
export interface ProductPreviewProps {
  product: Product
}
export interface ProductFullViewProps {
  product: Product
}
export interface ProductsCarouselProps {
  label: string,
  products: Product[]
}
export interface CustomButtonProps {
  width?: number,
  height?: number,
  variant: 'solid' | 'outline' | 'ghost'
  label: string,
  action?: () => void
}

export interface FooterNavNextElement {
  label: string,
  link?: string
}
export interface FooterNavBlock {
  [key: string]: FooterNavNextElement
}
export interface SummaryContactElement {
  label: string | string[],
  caption: string,
  type?: 'mail' | 'phone' | 'address'
}
export interface FooterContactElement {
  label: string | string[],
  caption?: string,
}
export interface BasketItem {
  product: Product,
  variants: ProductVariant[],
}
export interface OneVariantBasketItem {
  product: Product,
  variant: ProductVariant,
}
export interface BasketCustomer {
  name: string,
  phone: string,
  mail: string,
  comment?: string,
  processConsent: boolean,
  paymentVariant: 'ONLINE' | 'OFFLINE'
}
export interface Basket {
  items: BasketItem[] | [],
  customer: {
    name: string,
    phone: string,
    mail: string,
    comment?: string,
    processConsent: boolean,
    paymentVariant: 'ONLINE' | 'OFFLINE'
  } | null
}

export interface Viewed {
  items: Product[] | []
}

export interface NewBasketElementFormValues extends OneVariantBasketItem { }