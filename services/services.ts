import { CreateServiceBody, ServiceBody, UpdateServiceBody } from "@/types/services";
import { proxyServer } from "./serverConfig";

export const getService = async () => {
    const res = await proxyServer.get<ServiceBody>(`/services`);
    return res.data;
 };
export const createService = async (body: CreateServiceBody) => { 
    const res = await proxyServer.post<ServiceBody>(`/services`, body);
    return res.data;
};
export const getServiceById = async (serviceId: string) => {
    const res = await proxyServer.get<ServiceBody>(`/services/${serviceId}`);
    return res.data;
 };
export const updateService = async (serviceId: string, body: UpdateServiceBody) => { 
    const res = await proxyServer.patch<ServiceBody>(`/services/${serviceId}`, body);
    return res.data;
};
export const deleteService = async (serviceId: string) => { 
    const res = await proxyServer.delete<ServiceBody>(`/services/${serviceId}`);
    return res.data;
};