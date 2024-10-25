import { NextResponse } from 'next/server';
import { services } from '@/assets/data/services';

export async function GET() {
    return NextResponse.json(services, { status: 200 });
}