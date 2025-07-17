import { IProduct, IProductVariant, IResponseData } from './api';

export interface IBasket {
  items: Record<string, IBasketItem>;
  customer: IBasketCustomer | null;
}
export interface IBasketItem {
  id: string;
  product: IResponseData<IProduct>;
  variant: Record<string, IProductBasketVariant>;
}
export interface IProductBasketVariant extends Pick<IProductVariant, 'id'> {
  value: number;
}
export interface IBasketCustomer {
  name: string;
  phone: string;
  mail: string;
  comment?: string;
  processConsent: boolean;
  paymentVariant: 'ONLINE' | 'OFFLINE';
  value: number;
}
