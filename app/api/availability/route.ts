import { globalServer } from "@/services/serverConfig";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => { 
    const params = Object.fromEntries(req.nextUrl.searchParams.entries());
    const res = await globalServer.get(`/availability`, { params });
    return NextResponse.json(res.data);
    
 };