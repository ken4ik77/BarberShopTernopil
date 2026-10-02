

export interface RegisterBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
};
export interface RegisterResponse {
    status: number;
    message: string;
    data: string;
};

export interface LoginBody {
    email: string;
    password: string;
};
export interface LoginResponse {
    status: number;
    message: string;
    data: string;
}

export interface LogOutResponse {
     status: number;
    message: string;
    data: string;
};
 
export interface RefreshResponse {
status: number;
    message: string;
    data: string;
}
export interface UserBody{
_id: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    role: string;
    createdAt: string;
    updatedAt: string;
}

export interface UserResponse {
    user: UserBody[];
}