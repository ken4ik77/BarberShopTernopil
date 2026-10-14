import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const res = await globalServer.get(`/employees`, {
        params
    });
    return NextResponse.json(res.data);
};
export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const cookieStorage = await cookies();
    const res = await globalServer.post(`/employees`, body, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);

 };