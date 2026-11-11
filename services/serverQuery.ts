import { AppointmentResponse } from "@/types/appointments";
import { proxyServer } from "./serverConfig";
import { cookies } from "next/headers";

export const getMyAppointmentsServer = async () => { 
    const cookieStorage = await cookies();
    const res = await proxyServer.get<AppointmentResponse>(`/appointments/my`, {
        headers: {
            Cookie: cookieStorage.toString()
}
    });
    return res.data;
};
