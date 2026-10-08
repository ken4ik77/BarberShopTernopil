"use client"
import { useAuthStore } from "@/stores/auth"
import { useEffect } from "react";

 
const AuthProvider = ({children} : {children : React.ReactNode}) => {
    const isAuth = useAuthStore((s) => s.isAuth);
    const setUser = useAuthStore((s) => s.setUser);
    const clearUser = useAuthStore((s) => s.clearUser);
    useEffect(() => {
        const fetchData = async () => {
            if()
        }
    })
}
