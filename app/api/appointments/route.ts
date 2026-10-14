import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";


export const GET = async (req: NextRequest) => {
    const cookieStorage = await cookies()
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
        const res = await globalServer.get('/appointments', {
            params,
            headers: {cookie:cookieStorage.toString()}
        })
        return res.data;
 };
export const POST = async (req: NextRequest) => { 
    const cookieStorage = await cookies();
    const body = await req.json();
    const res = await globalServer.post('/appointments', body, {
        headers: {cookie:cookieStorage.toString()}
    })
    return res.data;
};