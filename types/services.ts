export interface ServiceBody {
    _id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface ServiceParam {
    page: number;
    perPage: number;
    sortField: string;
    sortOrder: string;
    search: string;
    isActive: boolean;
    serviceId: string;
    minPrice: number;
    maxPrice: number;
};
export interface ServiceResponse {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    services: ServiceBody[];
};
export interface ServicesErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface CreateServiceBody {
    name: string;
    description?: string;
    durationMinutes: number;
    price: number;
    isActive?: boolean;
};
export interface CreateServiceResponse {
    _id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface CreateServiceErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface ServiceByIdParams {
    serviceId: string;
};
export interface ServiceByIdResponse {
    _id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface ServiceByIdErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface UpdateServiceParam {
    serviceId: string;
};
export interface UpdateServiceBody {
    name: string;
    description?: string;
    durationMinutes: number;
    price: number;
    isActive?: boolean;
};
export interface UpdateServiceResponse {
    _id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface UpdateServiceErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface DeleteServiceParam {
    serviceId: string;

};
export interface DeleteServiceResponse {
    message: string;
};
export interface DeleteServiceErrorResponse {
    status: number;
    message: string;
    data: string;

};