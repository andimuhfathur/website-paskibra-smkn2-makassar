import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'


export async function GET(req: NextRequest) {
    return NextResponse.json({data : 'hello world'}, {status: 200})
}