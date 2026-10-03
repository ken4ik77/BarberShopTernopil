

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
export interface LoginResponse {
    accessToken: string;
}

export interface LogOutResponse {
    message: string;
};
 
export interface RefreshResponse {
    accessToken: string;
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
    user: UserBody;
}