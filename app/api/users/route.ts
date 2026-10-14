import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const cookieStorage = await cookies();
    const res = await globalServer.get(`/users`, {
        params,
        headers: {
            Cookie: cookieStorage.toString()
        }
    })
    return NextResponse.json(res.data);
}