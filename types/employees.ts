export interface EmployeeBody {
    firstName: string,
  lastNam: string,
  description: string,
  phone: string,
  email: string,
  imageUrl: string,
  isActive: boolean,
};
export interface EmployeeResponse {
     page: number;
        perPage: number;
        sortField: string;
        sortOrder: string;
        search: string;
    serviceId: string;
    users: EmployeeBody[];
};
export interface ServicesEmployeeBody{
    employeeId: string;
    serviceId: string;
};
export interface ServicesEmployeeResponse {
    employeeId: string;
};