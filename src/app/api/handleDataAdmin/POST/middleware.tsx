import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export const dynamic = 'force-dynamic'


export function Middleware(req: NextRequest) {
    const cokkieToken = req.cookies.get('token')

    if (!cokkieToken) {
        return NextResponse.redirect((new URL ('/Register', req.url)))
    }

    const token = cokkieToken.value

    try {

        jwt.verify(token, '9d1aS3cfL1k9U6mjR4oPq7Zt8v5WnXy!')
         console.log('to berhasil');
        
        return NextResponse.next()
    } catch (err) {
        return NextResponse.json({data : 'kdalkdada'})
    }
}

export const config = {
    matcher : ['/Admin/:path*']
}