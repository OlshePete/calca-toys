import { ReactNode } from "react";

export interface IPost {
  id: number
  title: string
  body: string
}
export interface ChildrenComponentProps {
  children: ReactNode;
}
export interface FooterStackProps extends ChildrenComponentProps {
  variant: "column" | "row",
  gap?: Number
}
export interface FooterNavNextElement {
  label: String,
  link?: String
}
export interface FooterNavBlock {
  [key: string]: FooterNavNextElement
}
export interface FooterContactElement {
  label: String | String[],
  caption?: String,
}