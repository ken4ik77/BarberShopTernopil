import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


interface EmployyeesIdParams {
    params: Promise<{employeeId : string}>
}
export const GET = async (req: NextRequest, { params }: EmployyeesIdParams) => {
    const { employeeId } = await params;
    const res = await globalServer.get(`/employees/${employeeId}`);
    return NextResponse.json(res.data);

};
export const PATCH = async (req: NextRequest, { params }: EmployyeesIdParams) => {
    const { employeeId } = await params;
    const body = await req.json();
    const cookieStorage = await cookies();
    const res = await globalServer.patch(`/employees/${employeeId}`, body, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
 };
export const DELETE = async (req: NextRequest, { params }: EmployyeesIdParams) => {
    const { employeeId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.delete(`/employees/${employeeId}`, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    });
    return NextResponse.json(res.data);
 };