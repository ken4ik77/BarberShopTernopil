import { DashboardResponse, DashboardRevenueResponse, DashboardServiceStatisticsResponse } from "@/types/dashboard";
import { proxyServer } from "./serverConfig";

export const getDashboard = async () => { 
    const res = await proxyServer.get<DashboardResponse>(`/dashboard`);
    return res.data;
};
export const getDashboardRevenue = async () => { 
     const res = await proxyServer.get<DashboardRevenueResponse>(`/dashboard/revenue`);
    return res.data;
};
export const getDashboardStatistic = async () => { 
     const res = await proxyServer.get<DashboardServiceStatisticsResponse>(`/dashboard/services`);
    return res.data;
};
