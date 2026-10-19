import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => { 
    const cookieStorage = await cookies()
        const params = Object.fromEntries(req.nextUrl.searchParams.entries());
            const res = await globalServer.get('/appointments/my', {
                params,
                headers: {cookie:cookieStorage.toString()}
            })
            return NextResponse.json(res.data);
};
