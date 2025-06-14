import { NextResponse } from 'next/server'
import { addOrder } from '@/services/orders/addOrder'
import { IOrderData } from '@/types/order'

export async function POST(request: Request) {
  try {
    const clientData = await request.json()
    // const requestData:IOrderData = {
      
    // }
    const result = await addOrder(clientData as IOrderData)
    return NextResponse.json(result)
  } catch (error) {
    console.log(JSON.stringify({text:'$$$ addOrder',error}));
    
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}