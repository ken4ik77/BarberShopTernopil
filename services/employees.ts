import { EmployeeAssignServiceResponse, EmployeeBody, EmployeeCreateBody, EmployeeParams, EmployeeResponse } from "@/types/employees";
import { proxyServer } from "./serverConfig";
import { ServiceBody } from "@/types/services";

export const getEmployees = async (params: EmployeeParams) => { 
    const res = await proxyServer.get<EmployeeResponse>(`/employees`, {params});
    return res.data;
};
export const createNewEmployees = async (body: EmployeeCreateBody) => {
    const res = await proxyServer.post<EmployeeBody>(`/employees/`, body);
    return res.data;
 };
export const getEmployeesById = async (employeeId : string) => {
    const res = await proxyServer.get<EmployeeBody>(`/employees/${employeeId}`);
    return res.data;
 };
export const createNewEmployeesById = async (employeeId : string, body: EmployeeCreateBody) => { 
    const res = await proxyServer.patch<EmployeeBody>(`/employees/${employeeId}`, body);
    return res.data;
};
export const deleteEmployees = async (employeeId : string) => {
    const res = await proxyServer.delete<EmployeeBody>(`/employees/${employeeId}`);
    return res.data;
 };
export const getTypeServices = async (employeeId : string) => {
    const res = await proxyServer.get<{services:ServiceBody[]}>(`/employees/${employeeId}/services`);
    return res.data;
 };
export const assignServices = async (employeeId: string, serviceId: string) => { 
    const res = await proxyServer.post<EmployeeAssignServiceResponse>(`/employees/${employeeId}/services/${serviceId}`);
    return res.data;
};
export const deleteServices = async (employeeId: string, serviceId: string) => {
    const res = await proxyServer.delete<ServiceBody>(`/employees/${employeeId}/services/${serviceId}`);
    return res.data;
 };

