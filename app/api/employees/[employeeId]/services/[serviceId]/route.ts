import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface EmployeeAssignServiceParams {
    params: Promise<{serviceId:string,employeeId:string}>
}

export const POST = async (req: NextRequest, { params }: EmployeeAssignServiceParams) => {
    const { serviceId } = await params;
    const { employeeId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.post(`/employees/${employeeId}/services/${serviceId}`, null, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    })
    return NextResponse.json(res.data);
 };
export const DELETE = async (req: NextRequest, { params }: EmployeeAssignServiceParams) => { 
   const { serviceId } = await params;
    const { employeeId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.post(`/employees/${employeeId}/services/${serviceId}`,{
        headers: {
            Cookie: cookieStorage.toString()
        }
    })
    return NextResponse.json(res.data);
};