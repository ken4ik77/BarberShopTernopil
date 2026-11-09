import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


interface UserIdParam {
    params: Promise<{id:string}>
}

export const GET = async (req: NextRequest, { params }: UserIdParam) => {
    const { id } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.get(`/users/${id}`, {
        headers: {
            Cookie: cookieStorage.toString(),
        }
    });
    return NextResponse.json(res.data);
};
export const PATCH = async (req: NextRequest, { params }: UserIdParam) => {
    const { id } = await params;
    const cookieStorage = await cookies();
    const body = await req.json();
    const res = await globalServer.patch(`/users/${id}`, body, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
 };
export const DELETE = async (req: NextRequest, { params }: UserIdParam) => {
    const cookieStorage = await cookies();
    const { id } = await params;
    const res = await globalServer.delete(`/users/${id}`, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
};