import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest) => {
    const body = await req.json();
    const cookieStorage = await cookies();
    const res = await globalServer.patch(`/users/me`, body, {
        headers: {
            Cookies: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
}