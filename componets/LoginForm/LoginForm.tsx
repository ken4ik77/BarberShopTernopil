"use client"
import { useRouter } from 'next/router';
import css from './LoginForm.module.css';
import { useAuthStore } from '@/stores/auth';
import { loginUser } from '@/services/auth';

const LoginForm = () => {
  const setUser = useAuthStore((s) => s.setUser);
  const router = useRouter();


  const handleSubmit = async (formData: FormData) => {
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
  
    const res = await loginUser(body);
    setUser(res.user);
    router.push("/");

  }


  return (
    <div className={css['loginForm']}>
          <form action={handleSubmit}>
              <input type="email" name="email" defaultValue="test123@gmail.com" /> 
              <input type="password" name= "password" defaultValue="string" /> 
                  <button>Sing In</button>
      </form>
    </div>
  );
};

export default LoginForm;
