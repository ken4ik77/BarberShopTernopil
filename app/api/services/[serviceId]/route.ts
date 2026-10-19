import { globalServer } from "@/services/serverConfig";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


interface ServiceParamsId {
    params: Promise<{serviceId: string}>
}
export const GET = async (req: NextRequest, { params }: ServiceParamsId) => { 
    const { serviceId } = await params;
        const res = await globalServer.get(`/services/${serviceId}`)
    return NextResponse.json(res.data);
};
export const PATCH = async (req: NextRequest, {params }: ServiceParamsId) => {
    const { serviceId } = await params;
    const body = await req.json();
    const cookieStorage = await cookies();
    const res = await globalServer.patch(`/services/${serviceId}`, body, {
        headers: {
            Cookie: cookieStorage.toString() 
        }
    })
    return NextResponse.json(res.data);
 };
export const DELETE = async (req: NextRequest, { params }: ServiceParamsId) => { 
    const { serviceId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.delete(`/services/${serviceId}`, { 
        headers: {
            Cookie: cookieStorage.toString()
        }
    })
    return NextResponse.json(res.data);
};