export interface EmployeeBody {
    _id: string;
    firstName: string;
    lastNam: string;
    description: string;
    phone: string;
    email: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeParams {
    page: number;
        perPage: number;
        sortField: string;
        sortOrder: string;
    search: string;
    isActive: boolean;
    serviceId: string;
};
export interface EmployeeResponse {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  employees: EmployeeBody[];
};
export interface EmployeeErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface EmployeeCreateBody {
    firstName: string;
    lastName: string;
    description?: string;
    phone?: string;
    email?: string;
    imageUrl?: string;
    isActive?: boolean;
};
export interface EmployeeCreateResponse {
     _id: string;
    firstName: string;
    lastNam: string;
    description: string;
    phone: string;
    email: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeCreateErrorResponse {
 status: number;
    message: string;
    data: string;
};
export interface EmployeeByIdParams {
    employeeId: string;
};
export interface EmployeeByIdResponse {
     _id: string;
    firstName: string;
    lastNam: string;
    description: string;
    phone: string;
    email: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeUpdateByIdParams {
    employeeId: string;
};
export interface EmployeeUpdateByIdBody {
    firstName: string;
    lastNam: string;
    description?: string;
    phone?: string;
    email?: string;
    imageUrl?: string;
    isActive?: boolean;
};
export interface EmployeeUpdateByIdResponse {
    _id: string;
    firstName: string;
    lastNam: string;
    description: string;
    phone: string;
    email: string;
    imageUrl: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeUpdateErrorByIdResponse {
    status: number;
    message: string;
    data: string;
};
export interface EmployeeDeleteParams {
    employeeId: string;
};
export interface EmployeeDeleteResponse {
    message: string;
};
export interface EmployeeDeleteErrorResponse {
     status: number;
    message: string;
    data: string;
};
export interface EmployeeServicesParams{
    employeeId: string;
};
export interface EmployeeServiceBody {
    _id: string;
    name: string;
    description: string;
    durationMinutes: number;
    price: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeServicesResponse {
    services: EmployeeServiceBody[];
};
export interface EmployeeServicesErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface EmployeeAssignServiceParams {
    employeeId: string;
    serViceId: string;
};
export interface EmployeeAssignServiceResponse { 
    _id: string;
    employeeId: string;
    serviceId: string;
    createdAt: string;
    updatedAt: string;
};
export interface EmployeeAssignServiceErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface EmloyeeDeleteServiceParams {
    employeeId: string;
    serviceId: string;
};
export interface EmloyeeDeleteServiceResponse {
    message: string;
};
export interface EmloyeeDeleteServiceErrorResponse {
status: number;
    message: string;
    data: string;
};