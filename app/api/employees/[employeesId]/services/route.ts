import { globalServer } from "@/services/serverConfig";
import { NextRequest, NextResponse } from "next/server";

interface EmployeeByIdService { 
    params: Promise<{ employeeId: string }>
}

export const GET = async (req: NextRequest, { params }: EmployeeByIdService) => {
    const { employeeId} = await params;
    const res = await globalServer.get(`/employees/${employeeId}/services`);
    return NextResponse.json(res.data);
 };