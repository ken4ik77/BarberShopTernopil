import { UserBody } from "@/types/auth";
import { create } from "zustand";

interface AuthStore {
    user: UserBody | null;
    isAuth: boolean;

    setUser: (user: UserBody) => void;
    clearUser: () => void;
    
};

export const useAuthStore = create<AuthStore>()((setStore) => {
    return {
        user: null,
        isAuth: false,

        setUser: (user) => {
            setStore({ user: user, isAuth: true })
        },
        clearUser: () => {
            setStore({ user: null, isAuth: false })
            
        },
    };
});