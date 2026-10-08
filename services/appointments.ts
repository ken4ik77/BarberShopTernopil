import { AppointmentBody, AppointmentCreateBody, AppointmentParams, AppointmentResponse, AppointmentsUpdateBody, AvailabilityResponse } from "@/types/appointments";
import { proxyServer } from "./serverConfig";

export const getAllAppointments = async (params:AppointmentParams) => {
    const res = await proxyServer.get<AppointmentResponse>(`/appointments`, {params});
    return res.data;
 };
export const createAppointment = async (body: AppointmentCreateBody) => { 
    const res = await proxyServer.post<AppointmentBody>(`/appointments`, body);
    return res.data;
};
export const getMyAppointments = async () => { 
    const res = await proxyServer.get<AppointmentBody>(`/appointments/my`);
    return res.data;
};
export const getAppointmentById = async (appointmentId: string) => { 
    const res = await proxyServer.get<AppointmentBody>(`/appointments/${appointmentId}`);
    return res.data;
};
export const updateAppointment = async (appointmentId: string, body: AppointmentsUpdateBody) => {
    const res = await proxyServer.patch<AppointmentBody>(`/appointments/${appointmentId}`, body);
    return res.data;
 };
export const deleteAppointment = async (appointmentId: string) => {
    const res = await proxyServer.delete<AppointmentBody>(`/appointments/${appointmentId}`);
    return res.data;
 };
export const getAppointmentAvailability = async () => { 
    const res = await proxyServer.get<AvailabilityResponse>(`/availability`);
    return res.data;
};