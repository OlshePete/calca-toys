import { NextResponse } from 'next/server';
import { getProductById } from '@services/products/getProducts';

export async function POST(request: Request) {
  try {
    const clientData = String(await request.json());
    const result = await getProductById(clientData);

    return NextResponse.json(result);
  } catch (error) {

    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
