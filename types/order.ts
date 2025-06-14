
export interface IOrderData {
  comment?:string,
  client:string,
  paymentMethod: 'cash' | 'card',
  status:
  "pending" |
  "confirmed" |
  "processing" |
  "shipped" |
  "delivered" |
  "cancelled"
  items:{
    value:number,
    product:string,
    variant:string
  }[],
}