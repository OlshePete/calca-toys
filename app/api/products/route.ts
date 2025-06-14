import { NextResponse } from 'next/server'
import { getProductById } from '@/services/products/getProducts'

export async function POST(request: Request) {
  try {
    const clientData = String(await request.json())
    console.log('№№№clientData',clientData);
    const result = await getProductById(clientData)
    console.log('result',result);
    
    return NextResponse.json(result)
  } catch (error) {
    console.log(JSON.stringify({text:'2',error}));
    
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    )
  }
}