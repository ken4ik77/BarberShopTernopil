import { globalServer } from "@/services/serverConfig";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface AppointmetsSearchID {
    params: Promise<{appointmentId : string}>
}
export const GET = async (req: NextRequest, {params}: AppointmetsSearchID) => { 
    const cookieStorage = await cookies();
    const { appointmentId } = await params;
            const res = await globalServer.get(`/appointments/${appointmentId}`, {
                headers: {cookie:cookieStorage.toString()}
            })
            return res.data;
};
export const PATCH = async (req: NextRequest, { params }: AppointmetsSearchID) => {
    const {appointmentId } = await params;
        const body = await req.json();
        const cookieStorage = await cookies();
        const res = await globalServer.patch(`/appointments/${appointmentId}`, body, {
            headers: {
                Cookie: cookieStorage.toString() 
            }
        })
        return NextResponse.json(res.data);
 };
export const DELETE = async (req: NextRequest, { params }: AppointmetsSearchID) => {
    const { appointmentId } = await params;
    const cookieStorage = await cookies();
    const res = await globalServer.delete(`/appointments/${appointmentId}`, {
        headers: {
            Cookie: cookieStorage.toString()
        }
    })
    return NextResponse.json(res.data);
 };
