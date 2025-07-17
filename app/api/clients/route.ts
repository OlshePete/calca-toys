import { NextResponse } from 'next/server';
import { addClient } from '@services/clients/addClient';

export async function POST(request: Request) {
  try {
    const clientData = await request.json();
    const result = await addClient(clientData);
    return NextResponse.json(result);
  } catch (error) {

    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
