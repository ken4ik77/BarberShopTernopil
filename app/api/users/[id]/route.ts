import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


interface UserIdParam {
    params: Promise<{userId:string}>
}

export const GET = async (req: NextRequest, { params }: UserIdParam) => {
    const { userId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.get(`/users/${userId}`, {
        headers: {
            Cookie: cookieStorage.toString(),
        }
    });
    return NextResponse.json(res.data);
};
export const PATCH = async (req: NextRequest, { params }: UserIdParam) => {
    const { userId } = await params;
    const cookieStorage = await cookies();
    const body = await req.json();
    const res = await globalServer.patch(`/users/${userId}`, body, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
 };
export const DELETE = async (req: NextRequest, { params }: UserIdParam) => {
    const cookieStorage = await cookies();
    const { userId } = await params;
    const res = await globalServer.delete(`/users/${userId}`, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
};