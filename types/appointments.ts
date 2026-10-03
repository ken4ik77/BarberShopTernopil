export interface AppointmentBody {
    _id: string;
    userId: string;
    employeeId: string;
    serviceId: string;
    startAt: string;
    endAt: string;
    price: number;
    status: string;
    comment: string;
    createdAt: string;
    updatedAt: string;
};
export interface AppointmentParams {
    page?: number;
    perPage?: number;
    sortField?: string;
    sortOrder?: string;
    employeeId?: string;
    serviceId?: string;
    userId?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
};
export interface AppointmentResponse {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    appointments: AppointmentBody[];
}
export interface AppointmentCreateBody {
    employeeId: string;
    serviceId: string;
    userId?: string;
    startAt: string;
    comment?: string;
}

export interface MyAppointmentParams {
    page?: number;
    perPage?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
};
export interface AppointmentRecordParams {
    appointmentId: string;
}
export interface AppointmentsUpdateBody {
    employeeId?: string;
    serviceId?: string;
    startAt?: string;
    comment?: string;
    status?: string;
}
export interface DeleteAppointmentParams {
    appointmentId: string;
}
export interface AvailabilityParams {
    employeeId?: string;
    serviceId?: string;
    date?: string;
};
export interface AvailabilityResponse {
    date: string;
    employeeId: string;
    serviceId: string;
    durationMinutes: number;
    slots: string[];
}