import { DashboardParams, DashboardResponse, DashboardRevenueResponse, DashboardServiceStatisticsResponse } from "@/types/dashboard";
import { proxyServer } from "./serverConfig";

export const getDashboard = async (params:DashboardParams) => { 
    const res = await proxyServer.get<DashboardResponse>(`/dashboard`,{params});
    return res.data;
};
export const getDashboardRevenue = async (params:DashboardParams) => { 
     const res = await proxyServer.get<DashboardRevenueResponse>(`/dashboard/revenue`,{params});
    return res.data;
};
export const getDashboardStatistic = async (params:DashboardParams) => { 
     const res = await proxyServer.get<DashboardServiceStatisticsResponse>(`/dashboard/services`,{params});
    return res.data;
};
