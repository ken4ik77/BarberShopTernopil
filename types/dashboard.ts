export interface DashboardParams {
    dateFrom?: string;
    dateTo?: string;
};
export interface DashboardResponse{
    period: {
        from: string;
        to: string;
    };
    revenue: number;
    appointments: {
        total: number;
        completed: number;
        cancelled: number;
        upcoming: number;
    };
    users: {
        total: number;
        newInPeriod: number;
    };
    employees: {
        total: number;
        active: number;
    };
    services: {
        total: number;
    };

};
export interface DashboardRevenueResponse {
    date: string;
    revenue: number;
};
export interface DashboardServiceStatisticsResponse {
    serviceId: string;
    name: string;
    appointmentsCount: number;
    revenue: number;
}