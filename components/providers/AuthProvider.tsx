"use client"
import { getMe, refreshTokens } from "@/services/auth";
import { useAuthStore } from "@/stores/auth"
import { useEffect } from "react";

 
const AuthProvider = ({children} : {children : React.ReactNode}) => {
    const isAuth = useAuthStore((s) => s.isAuth);
    const setUser = useAuthStore((s) => s.setUser);
    const clearUser = useAuthStore((s) => s.clearUser);
    useEffect(() => {
        const fetchData = async () => {
            if (!isAuth) {
                const res = await refreshTokens();

                if (res.success) {
                    const user = await getMe()
                    setUser(user)
                } else {
                    clearUser()
                }
            }
        };
        fetchData();
    }, []);
    return children;
}

export default AuthProvider;
