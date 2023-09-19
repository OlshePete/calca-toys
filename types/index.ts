import { ReactNode } from "react";

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
interface ProductColor {
  label: string,
  color: string
}
export interface ProductPreviewProps {
  product: {
    id: number,
    name: string,
    price: number,
    height?: number,
    width?: number,
    mustHave: boolean,
    rebate?: number,
    colors?: ProductColor[],
    img: string,
    comment?: string,
  }
}
export interface ProductsCarouselProps {
  label: string,

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
export interface FooterContactElement {
  label: string | string[],
  caption?: string,
}