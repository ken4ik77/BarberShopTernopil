import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const res = await globalServer.post("/auth/login", body);
    const cookieStorage = await cookies();
}