export interface RegisterBody {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone?: string;
};
export interface RegisterResponse {
    message: string;
};

export interface LoginBody {
    email: string;
    password: string;
};

export interface LogOutResponse {
    message: string;
};