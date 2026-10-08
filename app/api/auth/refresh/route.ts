import { globalServer } from "@/services/serverConfig";
import { AxiosError } from "axios";
import { parseCookie } from "cookie";
import { cookies } from "next/headers"
import { NextResponse } from "next/server";

export const POST = async () => {
    try {
        const cookieStorage = await cookies();
        if (!cookieStorage.get("refreshToken")) {
            return NextResponse.json({ success: false });
        }
        if (cookieStorage.get("accessToken")) {
            return NextResponse.json({ success: true });
        }

        const res = await globalServer.post("/auth/refresh", null, {
            headers: {
                Cookie: cookieStorage.toString()
            }
        })

        const setCookie = res.headers["set-cookie"] as string[];
        for (const coolieStr of setCookie) {
            const cookie = parseCookie(coolieStr);
            const options = {
                maxAge: Number(cookie["Max-Age"]),
                path: cookie.Path,
                expires: cookie.expires ? new Date(cookie.expires) : undefined,
            };
            if (cookie.refreshToken) {
                cookieStorage.set("refreshToken", cookie.refreshToken, options)
            }
            if (cookie.accessToken) {
                cookieStorage.set("accessToken", cookie.accessToken, options)
            }
        }
        return NextResponse.json(res.data);
    } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        return NextResponse.json(
            { error: err.response?.data.message || err.message },
            { status: err.response?.status || 500 },
        );
    
    
    }
}