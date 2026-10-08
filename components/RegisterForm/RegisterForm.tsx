"use client"
import { registerUser } from '@/services/auth';
import css from './RegisterForm.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const RegisterForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      setIsLoading(true);
        setError(null);
    const { firstName, lastName, email, phone, password, confirmPassword } = formData;
  
  
  
  
  if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError("Усі обов’язкові поля мають бути заповнені.");
      setIsLoading(false);
      return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Будь ласка, введіть коректний формат email.");
      setIsLoading(false);
      return;
    }
  if (password.length < 6) {
      setError("Пароль має містити щонайменше 6 символів.");
      setIsLoading(false);
      return;
  }
  if (password !== confirmPassword) {
      setError("Паролі не збігаються.");
      setIsLoading(false);
      return;
  }
  const body = {
      email,
      password,
      firstName,
      lastName,
      phone: phone.trim() || undefined, // Телефон необов'язковий
  };
  try {
      await registerUser(body);
      router.push("/auth/login");
    } catch {
      setError("Щось пішло не так. Можливо, такий email вже зареєстрований.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css.title}>Реєстрація</h2>

        {error && <div className={css.errorMessage}>{error}</div>}

        <div className={css.inputGroup}>
          <label className={css.label}>Ім’я *</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="Введіть ім'я" 
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Прізвище *</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Введіть прізвище" 
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Email *</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="example@mail.com" 
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Телефон (необов’язково)</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            placeholder="+380XXXXXXXXX" 
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Пароль *</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Мінімум 6 символів" 
          />
        </div>

        <div className={css.inputGroup}>
          <label className={css.label}>Підтвердження пароля *</label>
          <input 
            type="password" 
            name="confirmPassword" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            placeholder="Повторіть пароль" 
          />
        </div>

        <button type="submit" className={css.submitBtn} disabled={isLoading}>
          {isLoading ? "Реєстрація..." : "Зареєструватися"}
        </button>
      </form>
    </div>
  );
};


export default RegisterForm;


