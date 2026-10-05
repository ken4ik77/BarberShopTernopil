import { UserRefreshBody, UsersBody, UsersResponse, UserUpDateBody } from "@/types/users";
import { proxyServer } from "./serverConfig";

export const getUser = async () => { 
    const res = await proxyServer.get<UsersResponse>('/users');
    return res.data;
};
export const refreshMyProfile = async (body: UserUpDateBody) => { 
    const res = await proxyServer.patch<UsersBody>('/users/me', body);
    return res.data;
};
export const getUserById = async (_id: string) => {
    const res = await proxyServer.get<UsersBody>(`/users/${_id}`);
    return res.data;
 };
export const refreshUserById = async (_id: string, body: UserRefreshBody) => { 
    const res = await proxyServer.patch<UsersBody>(`/users/${_id}`, body);
    return res.data;
};
export const deleteUser = async (_id: string) => {
    const res = await proxyServer.delete<UsersBody>('/users/${_id}');
    return res.data;
 };