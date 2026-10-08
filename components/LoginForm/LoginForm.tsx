"use client";
import css from "./LoginForm.module.css";
import { useAuthStore } from "@/stores/auth";
import { getMe, loginUser } from "@/services/auth";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    try {
      await loginUser(body);
      const res = await getMe();
      setUser(res);
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        axiosError.message ||
        "Щось пішло не так";
      setError(errorMessage);
    }

    router.push("/");
  };

  return (
    <div className={css["loginForm"]}>
      <form action={handleSubmit}>
        <input type="email" name="email" placeholder="test123@gmail.com" />
        <input type="password" name="password" placeholder="string" />
        <button>Sing In</button>
      </form>
      {error && <p className={css["errorMessage"]}>{error}</p>}
    </div>
  );
};

export default LoginForm;
