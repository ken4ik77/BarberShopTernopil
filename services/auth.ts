import { LoginBody, LoginResponse, LogOutResponse, RefreshResponse, RegisterBody, RegisterResponse, UserBody } from "@/types/auth";
import { proxyServer } from "./serverConfig";

export const getMe = async () => {
    const res = await proxyServer.get<UserBody>('/auth/me');
    return res.data;
 };

export const registerUser = async (body: RegisterBody) => { 
    const res = await proxyServer.post<RegisterResponse>('/auth/register',body);
    return res.data;
};
export const loginUser = async (body: LoginBody) => {
    const res = await proxyServer.post<LoginResponse>('/auth/login', body);
    return res.data;
 };
export const endSession = async () => { 
    const res = await proxyServer.post<LogOutResponse>('/auth/logout', null);
    return res.data;
};
export const refreshTokens = async () => { 
    const res = await proxyServer.post<RefreshResponse>('/auth/refresh', null);
    return res.data;
};