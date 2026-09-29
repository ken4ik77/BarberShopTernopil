export interface AppointmentBody {
    employeeId: string;
    serviceId: string;
    userId: string;
    startAt: string;
    comment?: string;
};
export interface AppointmentsResponse {
    page: number;
    perPage: number;
    sortField: string;
    sortOrder: string;
    employeeId: string;
    serviceId: string;
    userId: string;
    status: string;
    dateFrom: string;
    dateTo: string;
};
export interface MyAppointmentResponse {
    page: number;
    perPage: number;
    sortField: string;
    sortOrder: string;
    status: string;
    dateFrom: string;
    dateTo: string;
};
export interface AvailabilityResponse {
    employeeId: string;
    serviceId: string;
    date: string;
}