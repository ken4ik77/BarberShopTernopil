export interface UsersBody {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    createdAt: string;
    updatedAt: string;

};
export interface UsersResponse {
    page: number;
    perPage: number;
    totalPages: number;
    totalItems: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    users: UsersBody[];
};

export interface UsersParams {
    page: number;
    perPage: number;
    sortField: string;
    sortOrder: string;
    search: string;
    role: string;
};
export interface UserErrorResponse {
status: number;
    message: string;
    data: string;
}

export interface UserRefreshBody {
    firstName: string;
    lastName: string;
    phone: string;
    role: "user";
}
export interface UserRefreshResponse {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};

export interface UserByIdParams {
    userId: string;
};
export interface UserByIdResponse {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
export interface UserByIdErrorResponse {
status: number;
    message: string;
    data: string;
};
export interface UserUpDateParams {
userId: string;
};
export interface UserUpDateBody {
firstName: string,
  lastName: string,
  phone: string,
    role: "user";
};
export interface UserUpDateResponse {
      _id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    createdAt: string;
    updatedAt: string;
};
export interface UserUpDateErrorResponse {
    status: number;
    message: string;
    data: string;
};
export interface UserDeleteParams {
    userId:string
};
export interface UserDeleteResponse {
    message: string;
};
export interface UserDeleteErrorResponse {
    status: number;
    message: string;
    data: string;

};